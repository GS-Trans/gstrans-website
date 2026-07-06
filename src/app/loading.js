import { COLORS } from "@/lib/constants";

export default function Loading() {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			minHeight: "100vh",
			backgroundColor: "#fff",
		}}>
			<div style={{
				width: "48px",
				height: "48px",
				border: "4px solid #f3f3f3",
				borderTop: `4px solid ${COLORS.primary}`,
				borderRadius: "50%",
				animation: "spin 0.8s linear infinite",
			}} />
			<style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
		</div>
	);
}

