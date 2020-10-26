const express = require("express");
const router = express.Router();

// Require our controllers
const sign_controller = require("../controllers/signController");

/// SIGN UP ROUTES ///

// POST request to check server-side validation on Sign Up page.
router.post("/signup/validation", sign_controller.signup_validation_post);

// POST request for crating user account in DB.
router.post("/signup/createUser", sign_controller.signup_create_user_post);

// POST request to validate user mail
router.post("/signup/validateMail", sign_controller.check_mail_registration_is_available);


/// SIGN IN ROUTES ///

// POST request to check server-side validation on sign in page. 
router.post("/signin/validation", sign_controller.signin_validation_post);

// GET request to get user data
router.get("/signin/getUser", sign_controller.signin_get_user_get);

module.exports = router;