import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomeLayout from "./layouts";

function App() {
	return (
		<div className="App">
			<h2>
				<HomeLayout />
			</h2>
		</div>
	);
}

export default App;
