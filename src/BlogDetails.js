import { useParams } from "react-router-dom";
import LikesController from "./LikesController";
import useFetch from "./useFetch";
const BlogDetails = () => {
	const { id } = useParams();
	const { blogs, error, isPending } = useFetch(
		"http://localhost:8000/blogs/" + id
	);

	return (
		<div className="my-[10px] mx-[0px]">
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blogs && (
				<article>
					<h2 className="text-[20px] text-[#e40f0f] mb-[10px] font-semibold ">
						{blogs.title}
					</h2>
					<div>{blogs.body}</div>
					<LikesController />
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
