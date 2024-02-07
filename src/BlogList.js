import { Link } from "react-router-dom";
const BlogList = ({ blogs, title, date }) => {
	return (
		<div className="blog-list">
			<h1>{title}</h1>
			{blogs.map((blog) => (
				<div
					className="px-[16px] py-[10px] mx-[0] my-[10px] border-b-[1px] border-b-[#fafafa] hover:shadow-[1px_3px_60px_rgba(0,0,0,0.342)]"
					key={blog.id}
				>
					<Link to={`/blogs/${blog.id}`}>
						<h2 className="text-[20px] text-[#e40f0f] mb-[8px] font-semibold">
							{blog.title}
						</h2>
						<p>{blog.brief}</p>
						<time className="ml-[85%]">{blog.date}</time>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
