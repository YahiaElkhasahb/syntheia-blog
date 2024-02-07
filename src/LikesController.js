import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
const LikesController = () => {
	const { id } = useParams();
	const { blogs, isPending } = useFetch(
		"http://localhost:8000/blogs/" + id
	);
	console.log("blogs", blogs);
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [activeButton, setActiveButton] = useState("none");

	useEffect(() => {
		if (blogs) {
			setLikes(blogs.likes);
			setDislikes(blogs.dislikes);
		}
	}, [blogs]);

	const handleLike = () => {
		if (activeButton === "none") {
			setLikes(likes + 1);
			setActiveButton("like");
		} else if (activeButton === "like") {
			setLikes(likes - 1);
			setActiveButton("none");
		} else if (activeButton === "dislike") {
			setLikes(likes + 1);
			setDislikes(dislikes - 1);
			setActiveButton("like");
		}
	};

	const handleDislike = () => {
		if (activeButton === "none") {
			setDislikes(dislikes + 1);
			setActiveButton("dislike");
		} else if (activeButton === "dislike") {
			setDislikes(dislikes - 1);
			setActiveButton("none");
			return;
		} else if (activeButton === "like") {
			setDislikes(dislikes + 1);
			setLikes(likes - 1);
			setActiveButton("dislike");
		}
	};

	return (
		<>
			{isPending && <div>loading..</div>}

			{!isPending && (
				<div className="flex flex-col items-center justify-center">
					<div className="flex items-center bg-[#fff] px-[50px] py-[30px] rounded-[12px]">
						<button
							className={`"border-[none] text-[#fff] text-[0.8rem] flex items-center gap-[6px] bg-[#bdc0c5] rounded-[4px] px-[15px] py-[6px] mx-[10px] my-[0]" 
							${activeButton === "like" ? "bg-[#3dd3eb]" : ""}`}
							onClick={handleLike}
						>
							<link
								rel="stylesheet"
								href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
							/>
							<span className="material-symbols-outlined">
								thumb_up
							</span>
							{likes}
						</button>

						<button
							className={`"border-[none] text-[#fff] text-[0.8rem] flex items-center gap-[6px] bg-[#bdc0c5] rounded-[4px] px-[15px] py-[6px] mx-[10px] my-[0]" ${
								activeButton === "dislike"
									? " bg-[#f70000]"
									: ""
							}`}
							onClick={handleDislike}
						>
							<link
								rel="stylesheet"
								href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
							/>
							<span className="material-symbols-outlined">
								thumb_down
							</span>
							{dislikes}
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default LikesController;
