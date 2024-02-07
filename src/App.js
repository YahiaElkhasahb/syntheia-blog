import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import "./index.css";
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom/cjs/react-router-dom.min";
function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="max-w-[600px] mx-[auto] my-[40px] p-[20px] m-0 font-[Quicksand] text-[#000000]">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
						<Route path="/blogs/:id">
							<BlogDetails />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
