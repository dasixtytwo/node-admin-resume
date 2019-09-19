import {
	ADD_POST,
	GET_POSTS,
	GET_POST,
	DELETE_POST,
	IS_LOADING
} from "actions/types";

const initialState = {
	posts: [],
	post: {},
	isLoading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING:
			return {
				...state,
				isLoading: true
			};
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				isLoading: false
			};
		case GET_POST:
			return {
				...state,
				post: action.payload,
				isLoading: false
			};
		case ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts]
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.slug !== action.payload)
			};
		default:
			return state;
	}
}
