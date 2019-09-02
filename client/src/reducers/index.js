import { combineReducers } from "redux";
import authReducer from "reducers/authReducer";
import errorReducer from "reducers/errorsReducer";
import profileReducer from "reducers/profileReducer";
import postReducer from "reducers/postReducer";
import portfolioReducer from "reducers/portfolioReducer";
import mailReducer from "reducers/mailReducer";

export default combineReducers({
	auth: authReducer,
	profile: profileReducer,
	errors: errorReducer,
	post: postReducer,
	project: portfolioReducer,
	mail: mailReducer,
});
