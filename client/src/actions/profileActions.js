import axios from "axios";
import {
	GET_PROFILE,
	GET_PROFILES,
	IS_LOADING,
	CLEAR_CURRENT_PROFILE,
	GET_ERRORS,
	SET_CURRENT_USER,
} from "actions/types";

// get current profile
export const getCurrentProfile = () => dispatch => {
	dispatch(setProfileLoading());
	axios
		.get("/api/v2/profile")
		.then(res =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			}),
		)
		.catch(err =>
			dispatch({
				type: GET_PROFILE,
				payload: {},
			}),
		);
};
// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
	dispatch(setProfileLoading());
	axios
		.get(`/api/v2/profile/handle/${handle}`)
		.then(res =>
			dispatch({
				type: GET_PROFILE,
				payload: res.data,
			}),
		)
		.catch(err =>
			dispatch({
				type: GET_PROFILE,
				payload: null,
			}),
		);
};
// Create Profile
export const createProfile = (profileData, history) => dispatch => {
	axios
		.post("/api/v2/profile", profileData)
		.then(res => history.push("/dashboard"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			}),
		);
};
// Add Skill
export const addSkill = (skillData, history) => dispatch => {
	axios
		.post("/api/v2/profile/skills", skillData)
		.then(res => history.push("/dashboard"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			}),
		);
};
// Add experience
export const addExperience = (experienceData, history) => dispatch => {
	axios
		.post("/api/v2/profile/experience", experienceData)
		.then(res => history.push("/dashboard"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			}),
		);
};
// Add education
export const addEducation = (educationData, history) => dispatch => {
	axios
		.post("/api/v2/profile/education", educationData)
		.then(res => history.push("/dashboard"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			}),
		);
};
// Delete Skill
export const deleteSkill = id => dispatch => {
	axios
		.delete(`/api/v2/profile/skills/${id}`)
		.then(res =>
			dispatch({
				type: GET_PROFILE,
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
// Delete Experience
export const deleteExperience = id => dispatch => {
	axios
		.delete(`/api/v2/profile/experience/${id}`)
		.then(res =>
			dispatch({
				type: GET_PROFILE,
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
// Delete Education
export const deleteEducation = id => dispatch => {
	axios
		.delete(`/api/v2/profile/education/${id}`)
		.then(res =>
			dispatch({
				type: GET_PROFILE,
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
// Get all profiles
export const getProfiles = () => dispatch => {
	dispatch(setProfileLoading());
	axios
		.get("/api/v2/profile/all")
		.then(res =>
			dispatch({
				type: GET_PROFILES,
				payload: res.data,
			}),
		)
		.catch(res =>
			dispatch({
				type: GET_PROFILES,
				payload: null,
			}),
		);
};
// Delete account & profile
export const deleteAccount = () => dispatch => {
	if (
		window.confirm("Are you sure want to delete Account? This is unreversable!")
	) {
		axios
			.delete("/api/v2/profile")
			.then(res =>
				dispatch({
					type: SET_CURRENT_USER,
					payload: {},
				}),
			)
			.catch(err =>
				dispatch({
					type: GET_ERRORS,
					payload: err.response.data,
				}),
			);
	}
};
// Profile Loading
export const setProfileLoading = () => {
	return {
		type: IS_LOADING,
	};
};
// Clear profile
export const clearCurrentProfile = () => {
	return {
		type: CLEAR_CURRENT_PROFILE,
	};
};
