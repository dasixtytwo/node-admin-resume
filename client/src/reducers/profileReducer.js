import {
	GET_PROFILE,
	GET_PROFILES,
	IS_LOADING,
	CLEAR_CURRENT_PROFILE
} from "actions/types";

const initialState = {
	profile: null,
	profiles: null,
	isLoading: true
};

export default function(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_PROFILE:
			return {
				...state,
				profile: action.payload,
				isLoading: false
			};
		case GET_PROFILES:
			return {
				...state,
				profiles: action.payload,
				isLoading: false
			};
		case CLEAR_CURRENT_PROFILE:
			return {
				...state,
				profile: null
			};
		default:
			return state;
	}
}
