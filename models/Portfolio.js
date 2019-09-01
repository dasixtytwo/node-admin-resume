const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	title: {
		type: String,
		required: true,
	},
	slug: {
		type: String,
	},
	urlProject: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	category: {
		type: String,
		required: true,
	},
	projectImage: {
		type: String,
		default: "noimage.jpg",
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Portfolio = mongoose.model("portfolio", postSchema);
