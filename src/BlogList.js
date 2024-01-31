const BlogList = ({ blogs }) => {
	return (
		<div className="blog-list">
			{blogs.map((blog) => (
				<div
					className="blog-preview"
					key={blog.id}
				>
					<h2>{blog.title}</h2>
					<p>{blog.brief}</p>
				</div>
			))}
		</div>
	);
};

export default BlogList;
