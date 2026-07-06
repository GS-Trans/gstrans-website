const getPreviousNextItem = (items, currentId) => {
	const totalItems = items?.length;
	const currentIndex = items?.findIndex(({ id }) => currentId === id);
	const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
	const nextIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : null;
	const currentItem = items?.find(({ id }) => currentId === id);
	const prevItem = prevIndex !== null ? items[prevIndex] : null;
	const nextItem = nextIndex !== null ? items[nextIndex] : null;
	const isPrevItem = currentIndex > 0;
	const isNextItem = currentIndex < totalItems - 1;
	const prevSlug = prevItem?.slug;
	const nextSlug = nextItem?.slug;
	return { prevItem, nextItem, currentItem, isPrevItem, isNextItem, prevSlug, nextSlug };
};

export default getPreviousNextItem;

