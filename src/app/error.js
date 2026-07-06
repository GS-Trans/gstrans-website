"use client";

export default function Error({ error, reset }) {
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			minHeight: "100vh",
			padding: "40px 20px",
			textAlign: "center",
			fontFamily: "system-ui, -apple-system, sans-serif",
		}}>
			<h1 style={{ fontSize: "48px", marginBottom: "16px", color: "#1a1a1a" }}>
				Something went wrong
			</h1>
			<p style={{ fontSize: "18px", color: "#666", marginBottom: "32px", maxWidth: "500px" }}>
				We apologize for the inconvenience. Please try again or contact us if the problem persists.
			</p>
			<button
				onClick={() => reset()}
				style={{
					padding: "12px 32px",
					fontSize: "16px",
					fontWeight: "600",
					color: "#fff",
					backgroundColor: "#D4AF37",
					border: "none",
					borderRadius: "8px",
					cursor: "pointer",
				}}
			>
				Try Again
			</button>
		</div>
	);
}
