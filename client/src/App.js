import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// Layouts
import HomeLayout from "layouts";

const hist = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<h2>
				<Router history={hist}>
					<Switch>
						<Route exact path="/" name="Home" component={HomeLayout} />
					</Switch>
				</Router>
			</h2>
		</div>
	);
}

export default App;
