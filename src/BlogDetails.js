import { useParams } from "react-router-dom";
import LikesController from "./LikesController";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const BlogDetails = () => {
	const { id } = useParams();
	const { blogs, error, isPending } = useFetch(
		"http://localhost:8000/blogs/" + id
	);
	const history = useHistory();
	const handleClick = (e) => {
		fetch("http://localhost:8000/blogs/" + blogs.id, {
			method: "delete",
		}).then(() => {
			history.push("/");
		});
	};

	return (
		<div className="my-[10px] mx-[0px] max-w-[700px]">
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
			<button
				className=" px-[5px] ml-[85%] hover:bg-[#e40f0fb9] rounded"
				onClick={handleClick}
			>
				Delete
			</button>
		</div>
	);
};

export default BlogDetails;
