import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
// react/Redux
import { Provider } from "react-redux";
import store from "store";
// JWT decode
import jwt_decode from "jwt-decode";
// Core Libraries
import setAuthToken from "utils/setAuthToken";
import { setCurrentUser, logoutUser } from "actions/authActions";
import { clearCurrentProfile } from "actions/profileActions";
import ProtectedRoute from "utils/RouterProtector";
// Import Font Awesome Icons Set
import "font-awesome/css/font-awesome.min.css";
// Import Animations
import "animate.css/animate.min.css";
// Layouts
import { DashboardLayout, HomeLayout } from "containers";
//import pages;
import { Login, Register, NotFound } from "views/pages";

import "assets/vendors/style";
// Import Main styles for the dashboard
import "scss/dashboard/da-backend.scss";
// Import Main styles for the home
import "scss/home/da-frontend.scss";

// Check for token
if (localStorage.jwtDAToken) {
	// Set Auth token header auth
	setAuthToken(localStorage.jwtDAToken);
	// decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtDAToken);
	// Set user and Authentication
	store.dispatch(setCurrentUser(decoded));

	// Check for expired token
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// if expired clean the localStorage
		localStorage.removeItem("jwtDAToken");
		// Logout user
		store.dispatch(logoutUser);
		// Clear current profile
		store.dispatch(clearCurrentProfile());
		// redirect to login
		window.location.href = "/login";
	}
}

const hist = createBrowserHistory();

function App() {
	return (
		<Router history={hist}>
			<Provider store={store}>
				<Switch>
					<Route exact path="/login" name="Login Page" component={Login} />
					<Route
						exact
						path="/register"
						name="Register Page"
						component={Register}
					/>
					<Route
						exact
						path="/notfound"
						name="Page Not Found"
						component={NotFound}
					/>
					<Route exact path="/" name="Home" component={HomeLayout} />
					{/* This go in protectedRoute later */}
					<ProtectedRoute
						path="/"
						name="Dashboard"
						component={DashboardLayout}
					/>
				</Switch>
			</Provider>
		</Router>
	);
}

export default App;
