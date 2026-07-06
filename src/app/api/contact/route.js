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

export async function POST(request) {
	try {
		// Rate limit: 5 requests per minute per IP
		const { success } = rateLimit(request, { limit: 5, windowMs: 60 * 1000 });
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
		const { name, email, phone, topic, message } = body;

		// Validate input
		if (!name || !email || !phone || !topic || !message) {
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

		// Sanitize all user inputs
		const safeName = escapeHtml(name);
		const safeEmail = escapeHtml(email);
		const safePhone = escapeHtml(phone);
		const safeTopic = escapeHtml(topic);
		const safeMessage = escapeHtml(message);

		// Send admin notification email
		await transporter.sendMail({
			from: `"GS Trans" <${FROM_EMAIL}>`,
			to: ADMIN_EMAIL,
			subject: `New Contact Form Submission: ${safeTopic}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #D4AF37;">New Contact Form Submission</h2>
					<div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
						<p><strong>Name:</strong> ${safeName}</p>
						<p><strong>Email:</strong> ${safeEmail}</p>
						<p><strong>Phone:</strong> ${safePhone}</p>
						<p><strong>Topic:</strong> ${safeTopic}</p>
						<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
						<p><strong>Message:</strong></p>
						<p style="white-space: pre-wrap;">${safeMessage}</p>
					</div>
					<p style="color: #666; font-size: 12px; margin-top: 20px;">
						This email was sent from your GS Trans website contact form.
					</p>
				</div>
			`,
		});

		// Send confirmation email to user
		await transporter.sendMail({
			from: `"GS Trans" <${FROM_EMAIL}>`,
			to: email,
			subject: "We received your message - GS Trans",
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #D4AF37;">Thank You for Contacting GS Trans</h2>
					<p>Hi ${safeName},</p>
					<p>We have received your message and appreciate you reaching out to us. Our team will get back to you shortly.</p>
					<div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
						<p><strong>Your Submission Details:</strong></p>
						<p><strong>Topic:</strong> ${safeTopic}</p>
						<p><strong>Reference Phone:</strong> ${safePhone}</p>
					</div>
					<p>If you have any urgent matters, please call us at:</p>
					<p style="font-size: 18px; color: #D4AF37; font-weight: bold;">+91 91335 33549</p>
					<hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
					<p style="color: #666; font-size: 12px;">
						Best regards,<br />
						<strong>GS Trans Team</strong><br />
						Smart Transport, Smarter Solutions
					</p>
				</div>
			`,
		});

		return Response.json(
			{ 
				success: true, 
				message: "Email sent successfully! We'll be in touch soon." 
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Email sending error:", error);
		return Response.json(
			{ error: "Failed to send email. Please try again later." },
			{ status: 500 }
		);
	}
}
