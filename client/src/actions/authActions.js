import axios from "axios";
import setAuthToken from "utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "actions/types";

// Register User
export const registerUser = (userData, history) => dispatch => {
	axios
		.post("/api/v2/users/register", userData)
		.then(res => history.push("/login"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Login - Get User token
export const loginUser = userData => dispatch => {
	axios
		.post("/api/v2/users/login", userData)
		.then(res => {
			// Save in localStorage
			const { token } = res.data;
			// Set token to localStorage
			localStorage.setItem("jwtDAToken", token);
			// Set token to Auth header
			setAuthToken(token);
			// decode token to get user data
			const decoded = jwt_decode(token);
			// Set current user
			dispatch(setCurrentUser(decoded));
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Set logged user
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	};
};

// log user out
export const logoutUser = () => dispatch => {
	// remove token from localStorage
	localStorage.removeItem("jwtDAToken");
	// Remove auth header for future request
	setAuthToken(false);
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};
