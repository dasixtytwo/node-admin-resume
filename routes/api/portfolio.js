const express = require("express"); // Fast, unopinionated, minimalist web framework for node.
const router = express.Router(); // Creates a new router object.

const passport = require("passport");
// Multer package configuration
const multer = require("multer");
// Controller
const portfolioControllers = require("../../controllers/portfolioController");

// Path wher Storage file uploaded
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/build/upload/images/projects");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});
// File filter for authorize just some file
const fileFilter = (req, file, cb) => {
  // Reject file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, "Only jpg/png files are allowed!");
  }
};
// Upload file
const upload = multer({
  storage: storage,
  limits: {
    filesize: 1024 * 1024 * 2 // 2MB Max size
  },
  fileFilter: fileFilter
});

// @route  GET api/v2/projects/test
// @desc   Test portfolio route
// @access Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Portfolio Works"
  })
);

// @route   GET api/v2/projects
// @desc    Get all projects
// @access  Public
router.get("/all", portfolioControllers.all_projects);

// @route   GET api/v2/projects/:id
// @desc    Get portfolio by id
// @access  Public
router.get("/project/:id", portfolioControllers.project_by_id);

// @route   POST api/v2/projects
// @desc    Create project
// @access  Private
router.post(
  "/create",
  upload.single("projectImage"),
  passport.authenticate("jwt", {
    session: false
  }),
  portfolioControllers.add_project
);

// @route   GET api/v2/projects/update/:id
// @desc    Update portfolio by id
// @access  Private
router.put(
  "/update/:id",
  upload.single("projectImage"),
  passport.authenticate("jwt", {
    session: false
  }),
  portfolioControllers.update_project
);

// @route   DELETE api/v2/projects/:id
// @desc    Remove project
// @access  Private
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", {
    session: false
  }),
  portfolioControllers.delete_project
);

module.exports = router;
