const BlogList = ({ blogs, title, handleDelete }) => {
	return (
		<div className="blog-list">
			<h1>{title}</h1>
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
