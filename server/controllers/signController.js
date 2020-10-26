const validator = require("validator");
const User = require("../models/user");
const sendMailToUser = require("./sendMail");

const VALIDATE_RIGHT = "RIGHT",
  VALIDATE_WRONG = "WRONG";

// utilities functions
const validateMail = (usermail) => {
  return validator.isEmail(usermail) ? VALIDATE_RIGHT : "Enter a valid mail.";
};

const validatePassword = (password, passwordConfirm) => {
  var validationMsg;

  if (!validator.isLength(password, { min: 5, max: 20 })) {
    validationMsg = "Password length must be between 5 and 20.";
  } else if (
    validator.isLength(password, { min: 5, max: 20 }) &&
    passwordConfirm !== null &&
    password !== passwordConfirm
  ) {
    validationMsg = "Passwords don't match.";
  } else {
    validationMsg = VALIDATE_RIGHT;
  }

  return validationMsg;
};

const dataFormSanitized = (mail, pswd, pswdConf) => {
  return {
    usermail: validator.ltrim(validator.escape(mail)),
    password: validator.ltrim(validator.escape(pswd)),
    passwordConfirm:
      pswdConf === null ? null : validator.ltrim(validator.escape(pswdConf)),
  };
};

const signValidation = (formSanitized) => {
  const validateStatus =
    validateMail(formSanitized.usermail) ===
    validatePassword(formSanitized.password, formSanitized.passwordConfirm)
      ? VALIDATE_RIGHT
      : VALIDATE_WRONG;

  return {
    type: "validation",
    usermail: formSanitized.usermail,
    usermailmsg: validateMail(formSanitized.usermail),
    password: validatePassword(
      formSanitized.password,
      formSanitized.passwordConfirm
    ),
    status: validateStatus,
  };
};

/**
 *
 * @param {bool} mailStatus
 * @param {bool/null} pswdStatus
 * @param {} status
 */
// If user mail already existed so mailStatus = true
const userRegistrationStatus = (usermail, mailStatus, pswdStatus, status) => {
  return {
    type: "registration",
    usermail: usermail,
    usermailmsg:
      mailStatus == true
        ? "usermail is already exited. Go to signin"
        : "usermail is in registration.",
    password: pswdStatus,
    status: status,
  };
};
/// SIGN UP CONTROLLERS

// (POST) check validation on sign up page
exports.signup_validation_post = (req, res, next) => {
  res.send(
    signValidation(
      req.body.usermail,
      req.body.password,
      req.body.passwordConfirm
    )
  );
};

// (POST) create user in database on sign up page
exports.signup_create_user_post = (req, res, next) => {
  const formSanitized = dataFormSanitized(
    req.body.usermail,
    req.body.password,
    req.body.passwordConfirm
  );

  const signupValidation = signValidation(formSanitized);

  if (signupValidation.status === VALIDATE_WRONG) {
    res.send(signupValidation);
    return;
  }

  const newUser = new User({
    usermail: formSanitized.usermail,
    password: formSanitized.password,
  });

  User.findOne({ usermail: newUser.usermail }).exec((err, found_user) => {
    if (err) {
      return next(err);
    }

    if (found_user) {
      res.send(
        userRegistrationStatus(
          formSanitized.usermail,
          true,
          null,
          VALIDATE_WRONG
        )
      );
      return;
    } else {
      newUser.save((err) => {
        if (err) {
          next(err);
        }

        res.send(
          userRegistrationStatus(
            formSanitized.usermail,
            false,
            null,
            VALIDATE_RIGHT
          )
        );
        return;
      });
    }
  });
};

// Check if usermail exist or not or if it is the mail owner who try to registred
exports.check_mail_registration_is_available = (req, res, next) => {
  let num = 123456;

  var returnMessage;
  
  /* User.findOneAndUpdate({usermail: req.body.usermail}, {confirmation_code: num}, (err, found_user) => {
    if(err)  
  }) */

  sendMailToUser(
    req.body.usermail,
    "Email confirmation to todo app user.",
    num
  );

  res.send({
    type: "mail confirmation",
    usermail: req.body.usermail,
    usermailmsg: "",
    password: null,
    code: num,
    status: "PENDING",
  });
};

/// SIGN IN CONTROLLERS

// (POST) check validation on sign in page
exports.signin_validation_post = (req, res, next) => {
  res.send(signValidation(req.body.usermail, req.body.password, null));
};

// (GET) get user data
exports.signin_get_user_get = (req, res, next) => {
  res.send({
    value: `Your're in signin/getUser. req.originalUrl: ${req.originalUrl}`,
    status: "OK",
  });
};
