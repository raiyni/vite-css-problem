<script>
	import { Router, Link, Route } from "svelte-navigator";
	import Home from "./routes/Home.svelte";
	import "./lib/app.css"
	import Features from "./routes/Features.svelte";

</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="features">Features</Link>
	</nav>
	<div>
		<Route path="/">
			<Home />
		</Route>
		<Route path="features" component={Features} />
	</div>
</Router>
