import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const abortCont = new AbortController();
		fetch(url, { signal: abortCont.signal })
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
				setIsPending(false);
				setError(false);
			})
			.catch((err) => {
				if (err.name === "AbortError") {
					console.log("fetch aborted");
				} else {
					setIsPending(false);
					setError(err.message);
				}
			});
		return () => abortCont.abort();
	}, [url]);

	return { blogs, isPending, error };
};

export default useFetch;
