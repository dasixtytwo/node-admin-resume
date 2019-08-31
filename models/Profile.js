const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	handle: {
		type: String,
		required: true,
		max: 40,
	},
	birthday: {
		type: Date,
	},
	location: {
		address: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		postcode: {
			type: String,
			required: true,
		},
		country: {
			type: String,
			required: true,
		},
		lon: {
			type: String,
			required: true,
		},
		lat: {
			type: String,
			required: true,
		},
	},
	phone: {
		type: String,
	},
	mobile: {
		type: String,
	},
	company: {
		type: String,
	},
	website: {
		type: String,
	},
	status: {
		type: String,
		required: true,
	},
	language: {
		type: [String],
		required: true,
	},
	bio: {
		type: String,
	},
	githubUsername: {
		type: String,
	},
	skills: [
		{
			skillTitle: {
				type: String,
				required: true,
			},
			skillPercent: {
				type: Number,
				required: true,
			},
		},
	],
	experience: [
		{
			title: {
				type: String,
				required: true,
			},
			company: {
				type: String,
				required: true,
			},
			location: {
				type: String,
			},
			from: {
				type: Date,
				required: true,
			},
			to: {
				type: Date,
			},
			current: {
				type: Boolean,
				default: false,
			},
			description: {
				type: String,
			},
		},
	],
	education: [
		{
			school: {
				type: String,
				required: true,
			},
			degree: {
				type: String,
				required: true,
			},
			fieldOfStudy: {
				type: String,
				required: true,
			},
			from: {
				type: Date,
				required: true,
			},
			to: {
				type: Date,
			},
			current: {
				type: Boolean,
				default: false,
			},
			description: {
				type: String,
			},
		},
	],
	social: {
		youtube: {
			type: String,
		},
		twitter: {
			type: String,
		},
		facebook: {
			type: String,
		},
		linkedin: {
			type: String,
		},
		instagram: {
			type: String,
		},
		googlePlus: {
			type: String,
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
