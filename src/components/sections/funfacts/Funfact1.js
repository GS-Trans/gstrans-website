import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<div className="tj-countup-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="countup-wrap">
							<div className="countup-item">
								<FunfactSingle currentValue={99.5} symbol={"%"} />

								<span className="count-text">On-Time Delivery Rate</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={50} symbol={"+"} />
								<span className="count-text">Cities Service Coverage</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={200} symbol={"+"} />
								<span className="count-text">Modern Fleet Vehicles</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={24} symbol={"-"} />
								<span className="count-text">Hour Delivery Guarantee</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Funfact1;

