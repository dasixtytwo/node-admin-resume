import axios from "axios";

import {
	GET_ERRORS,
	CLEAR_ERRORS,
	ADD_PROJECT,
	GET_PROJECTS,
	GET_PROJECT,
	EDIT_PROJECT,
	UPDATE_PROJECT,
	DELETE_PROJECT,
	IS_LOADING,
} from "actions/types";

// Get Projects
export const getProjects = () => dispatch => {
	dispatch(setProjectLoading());
	axios
		.get("/api/v2/projects/all")
		.then(res =>
			dispatch({
				type: GET_PROJECTS,
				payload: res.data,
			}),
		)
		.catch(err =>
			dispatch({
				type: GET_PROJECTS,
				payload: null,
			}),
		);
};

// Get Project
export const getProject = id => dispatch => {
	dispatch(setProjectLoading());
	axios
		.get(`/api/v2/projects/project/${id}`)
		.then(res =>
			dispatch({
				type: GET_PROJECT,
				payload: res.data,
			}),
		)
		.catch(err =>
			dispatch({
				type: GET_PROJECT,
				payload: null,
			}),
		);
};

// Add Project
export const addProject = projectData => dispatch => {
	dispatch(clearErrors());
	axios
		.post("/api/v2/projects/create", projectData)
		.then(res =>
			dispatch({
				type: ADD_PROJECT,
				payload: res.data,
			}),
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			}),
		);
};

// Edit Project
export const editProject = id => dispatch => {
	dispatch(setProjectLoading());
	axios
		.put(`/api/v2/projects/update/${id}`)
		.then(res =>
			dispatch({
				type: EDIT_PROJECT,
				payload: res.data,
			}),
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			}),
		);
};

// Delete Project
export const deleteProject = id => dispatch => {
	axios
		.delete(`/api/v2/projects/delete/${id}`)
		.then(res =>
			dispatch({
				type: DELETE_PROJECT,
				payload: id,
			}),
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			}),
		);
};

// Set loading state
export const setProjectLoading = () => {
	return {
		type: IS_LOADING,
	};
};

// Clear errors
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
	};
};
