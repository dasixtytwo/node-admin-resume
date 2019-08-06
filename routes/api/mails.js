const express = require('express')
const router = express.Router();

// Multer package configuration
const multer = require('multer');
// Controller
const MailController = require('../../controllers/mailsController');

// Uploader multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './client/build/upload/files');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`)
  },
});
// File filter for authorize just some file
const fileFilter = (req, file, cb) => {
  // reject file
  if (!file.originalname.match(/\.(pdf)$/)) {
    return cb(new Error('Only pdf files are allowed!'));
  }
  cb(null, true);
}
// File limits
const limits = {
  // one file for request
  fieldNameSize: 200 * 1024,
  filesize: 200 * 1024  // 204.8kb max size
}
// Upload file
const upload = multer({
  storage: storage,
  limits: limits,
  fileFilter: fileFilter
});

// @route  POST mails/send contact me
// @desc   Send mail route
// @access Public
router.post('/sendcontact', MailController.send_contact_mail)

// @route  POST mails/send hire me
// @desc   Send mail route
// @access Public
router.post('/sendhire', upload.single('attach'), MailController.send_hire_mail)

module.exports = router;