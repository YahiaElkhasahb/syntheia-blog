import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
	return (
		<nav className={"navbar"}>
			<h1>syntheia</h1>
			<div className="links">
				<Link to="/">Home</Link> |
				<Link to="/what we do">What we do</Link> |
				<Link to="/products">Products</Link> |
				<Link to="/create">New blog</Link>
			</div>
		</nav>
	);
};

export default Navbar;
