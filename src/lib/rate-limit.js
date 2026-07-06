/**
 * Simple in-memory rate limiter for API routes.
 * Limits requests per IP address within a time window.
 */

const rateLimitMap = new Map();

// Clean up expired entries every 5 minutes
setInterval(() => {
	const now = Date.now();
	for (const [key, value] of rateLimitMap) {
		if (now - value.firstRequest > value.windowMs) {
			rateLimitMap.delete(key);
		}
	}
}, 5 * 60 * 1000);

/**
 * @param {Request} request
 * @param {Object} options
 * @param {number} options.limit - Max requests per window (default: 5)
 * @param {number} options.windowMs - Window in milliseconds (default: 60000 = 1 min)
 * @returns {{ success: boolean, remaining: number }} 
 */
export function rateLimit(request, { limit = 5, windowMs = 60 * 1000 } = {}) {
	const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
		|| request.headers.get("x-real-ip")
		|| "unknown";

	const key = `${ip}`;
	const now = Date.now();
	const record = rateLimitMap.get(key);

	if (!record || now - record.firstRequest > windowMs) {
		rateLimitMap.set(key, { count: 1, firstRequest: now, windowMs });
		return { success: true, remaining: limit - 1 };
	}

	record.count++;

	if (record.count > limit) {
		return { success: false, remaining: 0 };
	}

	return { success: true, remaining: limit - record.count };
}
