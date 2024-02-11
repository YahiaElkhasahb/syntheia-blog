import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-grow justify-center">
			<div className="rounded-lg bg-white p-8 text-center ">
				<h1 className="mb-4 text-4xl font-bold">404</h1>
				<p className="text-gray-600">
					Oops! The page you are looking for could not be
					found.
				</p>
				<Link
					to="/"
					className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
				>
					{" "}
					Go back to Home{" "}
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
