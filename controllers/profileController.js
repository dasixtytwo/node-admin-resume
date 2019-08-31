// Load Input Validation
const validateProfileInput = require("../validation/profile");
const validateExperienceInput = require("../validation/experience");
const validateEducationInput = require("../validation/education");
const validateSkillInput = require("../validation/skill");

// Load profile model
const Profile = require("../models/Profile");
// Load User Profile
const User = require("../models/User");

// @route  GET api/profile
// @desc   Get current user profile
// @access private
exports.find_profile = (req, res) => {
	const errors = {};
	Profile.findOne({
		user: req.user.id,
	})
		.populate("user", ["name", "email", "avatar"])
		.then(profile => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				return res.status(404).json(errors);
			}
			res.json(profile);
		})
		.catch(err => res.status(404).json(err));
};

// @route  GET api/profile/handle/:handle
// @desc   Get profile by handle
// @access Public
exports.find_profile_by_handle = (req, res) => {
	Profile.findOne({
		handle: req.params.handle,
	})
		.populate("user", ["name", "email", "avatar"])
		.then(profile => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				res.status(404).json(errors);
			}
			res.json(profile);
		})
		.catch(err => res.status(404).json(err));
};

// @route  GET api/profile/users/:user_id
// @desc   Get profile by user ID
// @access Public
exports.find_profile_by_id = (req, res) => {
	Profile.findOne({
		user: req.params.user_id,
	})
		.populate("user", ["name", "email", "avatar"])
		.then(profile => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				res.status(404).json(errors);
			}
			res.json(profile);
		})
		.catch(err =>
			res.status(404).json({
				profile: "There is no profile for this user",
			}),
		);
};

// @route  GET api/profile/all
// @desc   Get all profile
// @access Public
exports.get_all_profile = (req, res) => {
	Profile.find()
		.populate("user", ["name", "email", "avatar"])
		.then(profiles => {
			if (!profiles) {
				errors.noprofile = "There are no profiles";
				res.status(404).json(errors);
			}
			res.json(profiles);
		})
		.catch(err =>
			res.status(404).json({
				profile: "There are no profiles",
			}),
		);
};

// @route  POST api/profile/
// @desc   Create a current user profile
// @access Private
exports.create_profile = (req, res) => {
	const { errors, isValid } = validateProfileInput(req.body);

	// Check Validation
	if (!isValid) {
		// Return any errors with 400 status
		return res.status(400).json(errors);
	}

	// Get fields
	const profileFields = {};
	profileFields.user = req.user.id;
	if (req.body.handle) profileFields.handle = req.body.handle;
	if (req.body.birthday) profileFields.birthday = req.body.birthday;
	// Location
	profileFields.location = {};
	if (req.body.address) profileFields.location.address = req.body.address;
	if (req.body.city) profileFields.location.city = req.body.city;
	if (req.body.postcode) profileFields.location.postcode = req.body.postcode;
	if (req.body.country) profileFields.location.country = req.body.country;
	if (req.body.lon) profileFields.location.lon = req.body.lon;
	if (req.body.lat) profileFields.location.lat = req.body.lat;

	if (req.body.phone) profileFields.phone = req.body.phone;
	if (req.body.mobile) profileFields.mobile = req.body.mobile;
	if (req.body.company) profileFields.company = req.body.company;
	if (req.body.website) profileFields.website = req.body.website;
	// Language - Split into array
	if (typeof req.body.language !== "undefined") {
		profileFields.language = req.body.language.split(",");
	}
	if (req.body.bio) profileFields.bio = req.body.bio;
	if (req.body.status) profileFields.status = req.body.status;
	if (req.body.githubUsername)
		profileFields.githubUsername = req.body.githubUsername;
	// Social
	profileFields.social = {};
	if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
	if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
	if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
	if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
	if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
	if (req.body.googlePlus)
		profileFields.social.googlePlus = req.body.googlePlus;

	Profile.findOne({
		user: req.user.id,
	}).then(profile => {
		if (profile) {
			// Update
			Profile.findOneAndUpdate(
				{ user: req.user.id },
				{ $set: profileFields },
				{ new: true },
			).then(profile => res.json(profile));
		} else {
			// Create

			// Check id handle exist
			Profile.findOne({
				handle: profileFields.handle,
			}).then(profile => {
				if (profile) {
					errors.handle = "That handle already exist";
					res.status(404).json(errors);
				}
				// Save profile
				new Profile(profileFields).save().then(profile => res.json(profile));
			});
		}
	});
};

// @route  POST api/profile/skills
// @desc   Add skills to profile
// @access Private
exports.add_skills = (req, res) => {
	const { errors, isValid } = validateSkillInput(req.body);

	// Check Validation
	if (!isValid) {
		// Return any errors with 400 status
		return res.status(400).json(errors);
	}
	Profile.findOne({
		user: req.user.id,
	}).then(profile => {
		const newSkill = {
			skillTitle: req.body.skillTitle,
			skillPercent: req.body.skillPercent,
		};

		// Add to exp array
		profile.skills.unshift(newSkill);

		profile.save().then(profile => res.json(profile));
	});
};

// @route  Delete api/profile/skills/:id
// @desc   Delete skills from profile
// @access Private
exports.delete_skills = (req, res) => {
	Profile.findOne({
		user: req.user.id,
	})
		.then(profile => {
			// Get remove index
			const removeIndex = profile.skills
				.map(item => item.id)
				.indexOf(req.params.skill_id);

			// Splice out of array
			profile.skills.splice(removeIndex, 1);

			// Save
			profile.save().then(profile => res.json(profile));
		})
		.catch(err => res.status(404).json(err));
};

// @route  POST api/profile/experience
// @desc   Add experience to profile
// @access Private
exports.add_experience = (req, res) => {
	const { errors, isValid } = validateExperienceInput(req.body);

	// Check Validation
	if (!isValid) {
		// Return any errors with 400 status
		return res.status(400).json(errors);
	}
	Profile.findOne({
		user: req.user.id,
	}).then(profile => {
		const newExp = {
			title: req.body.title,
			company: req.body.company,
			location: req.body.location,
			from: req.body.from,
			to: req.body.to,
			current: req.body.current,
			description: req.body.description,
		};

		// Add to exp array
		profile.experience.unshift(newExp);

		profile.save().then(profile => res.json(profile));
	});
};

// @route  POST api/profile/education
// @desc   Add education to profile
// @access Private
exports.add_education = (req, res) => {
	const { errors, isValid } = validateEducationInput(req.body);

	// Check Validation
	if (!isValid) {
		// Return any errors with 400 status
		return res.status(400).json(errors);
	}
	Profile.findOne({
		user: req.user.id,
	}).then(profile => {
		const newEdu = {
			school: req.body.school,
			degree: req.body.degree,
			fieldOfStudy: req.body.fieldOfStudy,
			from: req.body.from,
			to: req.body.to,
			description: req.body.description,
		};
		// Add to exp array
		profile.education.unshift(newEdu);

		profile.save().then(profile => res.json(profile));
	});
};

// @route  Delete api/profile/experience/:id
// @desc   Delete experience from profile
// @access Private
exports.delete_experience = (req, res) => {
	Profile.findOne({
		user: req.user.id,
	})
		.then(profile => {
			// Get remove index
			const removeIndex = profile.experience
				.map(item => item.id)
				.indexOf(req.params.exp_id);

			// Splice out of array
			profile.experience.splice(removeIndex, 1);

			// Save
			profile.save().then(profile => res.json(profile));
		})
		.catch(err => res.status(404).json(err));
};

// @route  DELETE api/profile/education/:edu_id
// @desc   Delete education from profile
// @access Private
exports.delete_education = (req, res) => {
	Profile.findOne({
		user: req.user.id,
	}).then(profile => {
		// Get remove index
		const removeIndex = profile.education
			.map(item => item.id)
			.indexOf(req.params.edu_id);

		// Splice out of array
		profile.education.splice(removeIndex, 1);

		// Save
		profile.save().then(profile => res.json(profile));
	});
};

// @route  DELETE api/profile/
// @desc   Delete profile
// @access Private
exports.delete_profile = (req, res) => {
	Profile.findOneAndRemove({
		user: req.user.id,
	}).then(() => {
		User.findOneAndRemove({
			_id: req.user.id,
		}).then(() =>
			res.json({
				success: true,
			}),
		);
	});
};
