import { MAIL_LOADING, GET_MAILS, GET_MAIL, DELETE_MAIL } from "actions/types";

const initialState = {
	mails: [],
	mail: {},
	loading: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case MAIL_LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_MAILS:
			return {
				...state,
				mails: action.payload,
				loading: false,
			};
		case GET_MAIL:
			return {
				...state,
				mail: action.payload,
				loading: false,
			};
		case DELETE_MAIL:
			return {
				...state,
				mails: state.mails.filter(mail => mail.id !== action.payload),
			};
		default:
			return state;
	}
}
