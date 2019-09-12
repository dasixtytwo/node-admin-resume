const express = require("express");
const router = express.Router();

const passport = require("passport");

// Multer package configuration
const multer = require("multer");
// Controller
const MailController = require("../../controllers/mailsController");

// Uploader multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/build/upload/files");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});
// File filter for authorize just some file
const fileFilter = (req, file, cb) => {
  // reject file
  if (!file.originalname.match(/\.(pdf)$/)) {
    return cb(new Error("Only pdf files are allowed!"));
  }
  cb(null, true);
};
// File limits
const limits = {
  // one file for request
  fieldNameSize: 200 * 1024,
  filesize: 200 * 1024 // 204.8kb max size
};
// Upload file
const upload = multer({
  storage: storage,
  limits: limits,
  fileFilter: fileFilter
});

// @route  POST mails/send contact me
// @desc   Send mail route
// @access Public
router.post("/sendcontact", MailController.send_contact_mail);

// @route   GET api/v2/mails
// @desc    Get all mails
// @access  Public
router.get(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  MailController.all_mail
);

// @route   GET api/v2/mails/mail/:id
// @desc    Get mail by id
// @access  Public
router.get(
  "/mail/:id",
  passport.authenticate("jwt", {
    session: false
  }),
  MailController.mail_by_id
);

// @route   DELETE api/v2/posts/comment/:id/:comment_id
// @desc    Remove comment from post
// @access  Private
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", {
    session: false
  }),
  MailController.delete_mail
);

module.exports = router;
