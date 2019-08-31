import axios from "axios";

import { GET_ERRORS, GET_MAILS, GET_MAIL, DELETE_MAIL } from "actions/types";

// Send email from the contact form
export const sendMsgContact = userData => dispatch => {
	axios
		.post("/api/v2/mails/sendcontact", userData)
		.then(res => {
			if (res.data.msg === "success") {
				alert("Message has been sent successfully!");
			} else if (res.data.msg === "fail") {
				alert("Message failed to send!");
			}
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			}),
		);
};

// Get Posts
export const getMails = () => dispatch => {
	dispatch(setMailLoading());
	axios
		.get("/api/v2/mails")
		.then(res =>
			dispatch({
				type: GET_MAILS,
				payload: res.data,
			}),
		)
		.catch(err =>
			dispatch({
				type: GET_MAILS,
				payload: null,
			}),
		);
};

// Get Post
export const getMail = id => dispatch => {
	dispatch(setMailLoading());
	axios
		.get(`/api/v2/mails/mail/${id}`)
		.then(res =>
			dispatch({
				type: GET_MAIL,
				payload: res.data,
			}),
		)
		.catch(err =>
			dispatch({
				type: GET_MAIL,
				payload: null,
			}),
		);
};

// Delete Post
export const deleteMail = id => dispatch => {
	axios
		.delete(`/api/v2/mails/delete/${id}`)
		.then(res =>
			dispatch({
				type: DELETE_MAIL,
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
export const setMailLoading = () => {
	return {
		type: MAIL_LOADING,
	};
};
