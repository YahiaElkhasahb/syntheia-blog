import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIspending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((res) => {
				if (!res.ok) {
					// error coming back from server
					throw Error(
						"could not fetch the data for that resource"
					);
				}
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setBlogs(data);
				setIspending(false);
				setError(false);
			})
			.catch((err) => {
				setError(err.message);
				setIspending(false);
			});
	}, []);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>loading...</div>}
			{blogs && <BlogList blogs={blogs} />}
		</div>
	);
};

export default Home;
