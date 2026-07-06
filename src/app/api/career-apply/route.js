import { rateLimit } from "@/lib/rate-limit";
import nodemailer from "nodemailer";

const transporter = process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD
	? nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL_USER,
			pass: process.env.GMAIL_APP_PASSWORD,
		},
	})
	: null;

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@gstrans.in";
const FROM_EMAIL = process.env.GMAIL_USER || "info@gstrans.in";

// Escape HTML special characters to prevent XSS in email content
function escapeHtml(str) {
	if (typeof str !== "string") return "";
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

// Basic email format validation
function isValidEmail(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

// Validate URL to prevent javascript: protocol injection
function isValidUrl(url) {
	if (!url) return true; // optional field
	try {
		const parsed = new URL(url);
		return ["http:", "https:"].includes(parsed.protocol);
	} catch {
		return false;
	}
}

export async function POST(request) {
	try {
		// Rate limit: 3 requests per minute per IP
		const { success } = rateLimit(request, { limit: 3, windowMs: 60 * 1000 });
		if (!success) {
			return Response.json(
				{ error: "Too many requests. Please try again later." },
				{ status: 429 }
			);
		}

		if (!transporter) {
			return Response.json(
				{ error: "Email service not configured" },
				{ status: 503 }
			);
		}
		
		const body = await request.json();
		const { name, email, phone, resumeLink, coverLetter, jobTitle, jobId } = body;

		// Validate input
		if (!name || !email || !phone || !coverLetter || !jobTitle || !jobId) {
			return Response.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		if (!isValidEmail(email)) {
			return Response.json(
				{ error: "Invalid email address" },
				{ status: 400 }
			);
		}

		if (resumeLink && !isValidUrl(resumeLink)) {
			return Response.json(
				{ error: "Invalid resume link URL" },
				{ status: 400 }
			);
		}

		// Sanitize all user inputs
		const safeName = escapeHtml(name);
		const safeEmail = escapeHtml(email);
		const safePhone = escapeHtml(phone);
		const safeResumeLink = escapeHtml(resumeLink);
		const safeCoverLetter = escapeHtml(coverLetter);
		const safeJobTitle = escapeHtml(jobTitle);
		const safeJobId = escapeHtml(jobId);

		// Send admin notification email
		await transporter.sendMail({
			from: `"GS Trans HR" <${FROM_EMAIL}>`,
			to: ADMIN_EMAIL,
			subject: `New Job Application: ${safeJobTitle} (${safeJobId})`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #D4AF37;">New Job Application Received</h2>
					<div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
						<h3 style="color: #333; margin-top: 0;">Position Details</h3>
						<p><strong>Role:</strong> ${safeJobTitle}</p>
						<p><strong>Job ID:</strong> ${safeJobId}</p>
						<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
						<h3 style="color: #333;">Applicant Information</h3>
						<p><strong>Name:</strong> ${safeName}</p>
						<p><strong>Email:</strong> ${safeEmail}</p>
						<p><strong>Phone:</strong> ${safePhone}</p>
						${resumeLink ? `<p><strong>Resume Link:</strong> <a href="${safeResumeLink}" style="color: #D4AF37;">${safeResumeLink}</a></p>` : '<p><strong>Resume Link:</strong> Not provided</p>'}
						<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
						<h3 style="color: #333;">Cover Letter</h3>
						<p style="white-space: pre-wrap;">${safeCoverLetter}</p>
					</div>
					<p style="color: #666; font-size: 12px; margin-top: 20px;">
						This email was sent from the GS Trans careers portal.
					</p>
				</div>
			`,
		});

		// Send confirmation email to applicant
		await transporter.sendMail({
			from: `"GS Trans HR" <${FROM_EMAIL}>`,
			to: email,
			subject: `Application Received: ${safeJobTitle} - GS Trans`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #D4AF37;">Thank You for Your Application</h2>
					<p>Hi ${safeName},</p>
					<p>We have successfully received your application for the position of <strong>${safeJobTitle}</strong> (${safeJobId}).</p>
					<div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
						<p><strong>Application Summary:</strong></p>
						<p><strong>Position:</strong> ${safeJobTitle}</p>
						<p><strong>Job ID:</strong> ${safeJobId}</p>
						<p><strong>Your Email:</strong> ${safeEmail}</p>
						<p><strong>Your Phone:</strong> ${safePhone}</p>
					</div>
					<p>Our HR team will carefully review your application and get back to you within 5-7 business days. If your profile matches our requirements, we will contact you to schedule an interview.</p>
					<p style="margin-top: 20px;">In the meantime, feel free to explore more about GS Trans on our website or connect with us on social media.</p>
					<p>If you have any questions, please contact our HR department at:</p>
					<p style="font-size: 18px; color: #D4AF37; font-weight: bold;">+91 91335 33549</p>
					<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
					<p style="color: #666; font-size: 12px;">
						Best regards,<br />
						<strong>HR Team - GS Trans</strong><br />
						Smart Transport, Smarter Solutions
					</p>
				</div>
			`,
		});

		return Response.json(
			{ 
				success: true, 
				message: "Application submitted successfully! We'll review and get back to you soon." 
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending application emails:", error);
		return Response.json(
			{ error: "Failed to send application. Please try again later." },
			{ status: 500 }
		);
	}
}
