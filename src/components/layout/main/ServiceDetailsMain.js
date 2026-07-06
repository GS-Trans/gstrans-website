import HeroInner from "@/components/sections/hero/HeroInner";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
import getALlServices from "@/libs/getALlServices";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const ServiceDetailsMain = ({ currentItemSlug }) => {
	const items = getALlServices();
	const currentItem = items?.find(({ slug }) => slug === currentItemSlug);
	const { prevItem, nextItem, isPrevItem, isNextItem } =
		getPreviousNextItem(items, currentItem?.id);
	const { title } = currentItem || {};
	return (
		<div>
			<HeroInner
				title={title ? title : "Service Details"}
				text={title ? title : "Service Details"}
				breadcrums={[{ name: "Services", path: "/services" }]}
				backgroundImage="/images/bg/services-bg.webp"
			/>
			<ServicesDetailsPrimary
				option={{
					currentItem,
					items,
					prevItem,
					nextItem,
					isPrevItem,
					isNextItem,
				}}
			/>
		</div>
	);
};

export default ServiceDetailsMain;

