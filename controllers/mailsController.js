const nodemailer = require("nodemailer");

const Mail = require("../models/Mail");

// Mail Config
const creds = require("../config/mailer");

// Transport nodemailer
let smtpConfig = {
	pool: true,
	host: "smtp.ethereal.email",
	port: 587,
	secure: false, // only for 465 port
	auth: {
		user: creds.mailUser,
		pass: creds.mailPass,
	},
};

const transporter = nodemailer.createTransport(smtpConfig);

// transporter server
transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Server is ready to take our messages");
	}
});

// Send mail from contact me form
exports.send_contact_mail = (req, res) => {
	// New object
	const newMail = new Mail({
		fullname: req.body.fullname,
		subject: "Message Contact Me",
		email: req.body.email,
		message: req.body.message,
	});

	// Prepare the mail format to send
	const mailOption = {
		from: newMail.fullname,
		to: "contact@davideagosti.info",
		subject: newMail.subject,
		html:
			"<p>" +
			`name: ${newMail.fullname} <br/> email: ${newMail.email} <br/> message: ${newMail.message} ` +
			"</p>",
	};
	// sendmail by nodemailer
	transporter.sendMail(mailOption, (err, data) => {
		if (err) {
			res.json({
				msg: "fail",
				error: err,
			});
		} else {
			res.json({
				msg: "success",
			});
			// Save Mail
			newMail.save().then(mail => res.json(mail));
		}
	});
};
