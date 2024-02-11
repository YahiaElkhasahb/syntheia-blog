import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [brief, setBrief] = useState("");
	const [error, setError] = useState("");
	const [date, setCurrentDate] = useState(getDate());
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();
	function getDate() {
		const today = new Date();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();
		const day = today.getDate();
		return `${month}/${day}/${year}`;
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPending(true);
		if (
			title.trim() === "" ||
			body.trim() === "" ||
			brief.trim() === ""
		) {
			setError("Please enter a non-empty value.");
		} else {
			setError("");
			const blog = { title, body, brief, date };

			fetch("http://localhost:8000/blogs/", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(blog),
			}).then(() => {
				console.log("new blog added");
				setIsPending(false);
				history.push("/");
			});
		}
	};

	return (
		<div className="m-auto text-center max-w-[500px]">
			<h2 className="text-[20px] text-[#e40f0f] font-semibold">
				Add a New Blog
			</h2>
			<form onSubmit={handleSubmit}>
				<label className="block text-left ">
					Blog title:
				</label>
				<input
					className="w-full py-[6px] px-[10px] my-[10px] mx-[0px] border-[1px] border-[solid] border-[#ddd] box-border block"
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label className="block text-left ">
					Blog body:
				</label>
				<textarea
					className="w-full py-[6px] px-[10px] my-[10px] mx-[0px] border-[1px] border-[solid] border-[#ddd] box-border block"
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label className="block text-left ">
					Blog brief:
				</label>
				<textarea
					className="w-full py-[6px] px-[10px] my-[10px] mx-[0px] border-[1px] border-[solid] border-[#ddd] box-border block"
					required
					value={brief}
					onChange={(e) => setBrief(e.target.value)}
				></textarea>

				<label
					className="text-left block mt-[30px]"
					value={date}
					onChange={(e) => setCurrentDate(e.target.value)}
				>
					Blog Time : {date}
				</label>
				{!isPending && (
					<button className="m-10 px-[10px] py-1 rounded-[6px] bg-[#ff3e3e] hover:bg-[#ec4e4e85] cursor-pointer">
						Add Blog
					</button>
				)}
				{isPending && (
					<button
						className="m-10 px-[10px] py-1 rounded-[6px] bg-[#ff3e3e] hover:bg-[#ec4e4e85] cursor-pointer"
						disabled
					>
						Adding Blog ...
					</button>
				)}
				{error && <p>{error}</p>}
			</form>
		</div>
	);
};

export default Create;
