import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
	const { blogs, isPending, error } = useFetch(
		"http://localhost:8000/blogs"
	);
	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>loading...</div>}
			{blogs && <BlogList blogs={blogs} />}
			{blogs && <BlogList blogs={blogs} />}
		</div>
	);
};

export default Home;
