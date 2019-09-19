import {
	ADD_PROJECT,
	GET_PROJECTS,
	GET_PROJECT,
	EDIT_PROJECT,
	DELETE_PROJECT,
	IS_LOADING
} from "actions/types";

const initialState = {
	projects: [],
	project: {},
	isLoading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_PROJECTS:
			return {
				...state,
				projects: action.payload,
				isLoading: false
			};
		case GET_PROJECT:
			return {
				...state,
				project: action.payload,
				isLoading: false
			};
		case ADD_PROJECT:
			return {
				...state,
				projects: [action.payload, ...state.projects]
			};
		case EDIT_PROJECT:
			return {
				...state,
				projects: state.projects.filter(
					portfolio => portfolio.id === action.payload
				)
			};
		case DELETE_PROJECT:
			return {
				...state,
				projects: state.projects.filter(
					portfolio => portfolio.id !== action.payload
				)
			};
		default:
			return state;
	}
}
