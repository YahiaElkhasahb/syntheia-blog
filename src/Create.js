import { useState } from "react";

const Create = () => {
	const [title, setTitle] = useState(" ");
	const [body, setBody] = useState(" ");
	const [brief, setBrief] = useState(" ");
	const [date, setCurrentDate] = useState(getDate());
	function getDate() {
		const today = new Date();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();
		const day = today.getDate();
		return `${month}/${day}/${year}`;
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, brief, date };

		fetch("http://localhost:8000/blogs/", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("new blog added");
		});
	};

	return (
		<div className="create">
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<label>Blog brief:</label>
				<textarea
					required
					value={brief}
					onChange={(e) => setBrief(e.target.value)}
				></textarea>
				<label>
					Blog Time :{" "}
					<p
						value={date}
						onChange={(e) => setCurrentDate(e.target.value)}
					>
						{date}
					</p>
				</label>
				<button>Add Blog</button>
			</form>
		</div>
	);
};

export default Create;
