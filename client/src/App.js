import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Layouts
import HomeLayout from "layouts";

// Import Main styles for this application
import "scss/header.scss";

const hist = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<Router history={hist}>
				<Switch>
					<Route exact path="/" name="Home" component={HomeLayout} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
