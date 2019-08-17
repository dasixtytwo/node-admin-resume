import axios from 'axios';

import {
  GET_ERRORS
} from 'actions/types';

// Send email from the contact form
export const sendMsgContact = (userData) => dispatch => {
  axios
    .post('/api/v2/mails/sendcontact', userData)
    .then(res => {
      if (res.data.msg === 'success') {
        alert("Message has been sent successfully!");
      } else if (res.data.msg === 'fail') {
        alert("Message failed to send!")
      }
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
    )
}

export const sendMsgHire = (userData) => dispatch => {
  axios
    .post('/api/v2/mails/sendhire', userData)
    .then(res => {
      if (res.data.msg === 'success') {
        alert("Message has been sent successfully!");
      } else if (res.data.msg === 'fail') {
        alert("Message failed to send!")
      }
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
    )
}
