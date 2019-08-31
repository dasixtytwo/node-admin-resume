const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateportfolioInput(data) {
	let errors = {};

	data.title = !isEmpty(data.title) ? data.title : "";

	if (validator.isEmpty(data.title)) {
		errors.title = "Portfolio title is required";
	}

	if (validator.isEmpty(data.category)) {
		errors.category = "Portfolio category is required";
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
