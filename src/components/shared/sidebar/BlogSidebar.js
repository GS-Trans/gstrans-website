import BlogCategoriesWidget from "./widgets/BlogCategoriesWidget";
import BlogTagsWidget from "./widgets/BlogTagsWidget";
import RecentBlogWidget from "./widgets/RecentBlogWidget";

const BlogSidebar = ({ type }) => {
	return (
		<aside className={`tj-main-sidebar ${type == 2 ? "p-0" : ""}`}>
			{/* <!-- search --> */}
			<div className="tj-sidebar-widget widget-search">
				<h4 className="widget-title">Search here</h4>
				<div className="search-box">
					<form action="#">
						<input
							type="search"
							name="search"
							id="searchTwo"
							placeholder="Search here"
							aria-label="Search blog posts"
						/>
						<button type="submit" value="search" aria-label="Search">
							<i className="tji-search"></i>
						</button>
					</form>
				</div>
			</div>
			{/* <!-- recent post --> */}
			<RecentBlogWidget />
			{/* <!-- category --> */}
			<BlogCategoriesWidget />
			{/* <!-- tags --> */}
			<BlogTagsWidget />
		</aside>
	);
};

export default BlogSidebar;

