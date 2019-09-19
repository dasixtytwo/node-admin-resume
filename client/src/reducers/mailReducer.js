import {
	IS_LOADING,
	SEND_MAIL,
	GET_MAILS,
	GET_MAIL,
	DELETE_MAIL
} from "actions/types";

const initialState = {
	mails: [],
	mail: {},
	isLoading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case IS_LOADING:
			return {
				...state,
				isLoading: true
			};
		case SEND_MAIL:
			return {
				...state,
				sendmail: action.payload
			};
		case GET_MAILS:
			return {
				...state,
				mails: action.payload,
				isLoading: false
			};
		case GET_MAIL:
			return {
				...state,
				mail: action.payload,
				isLoading: false
			};
		case DELETE_MAIL:
			return {
				...state,
				mails: state.mails.filter(mail => mail.id !== action.payload)
			};
		default:
			return state;
	}
}
