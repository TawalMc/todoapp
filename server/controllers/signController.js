const validator = require("validator");

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

const sign_validation = (mail, pswd, pswdConf) => {
  const formSanitized = dataFormSanitized(mail, pswd, pswdConf);

  const validateStatus =
    validateMail(formSanitized.usermail) ===
    validatePassword(formSanitized.password, formSanitized.passwordConfirm)
      ? VALIDATE_RIGHT
      : VALIDATE_WRONG;

  return {
    type: "validation",
    usermail: validateMail(formSanitized.usermail),
    password: validatePassword(
      formSanitized.password,
      formSanitized.passwordConfirm
    ),
    status: validateStatus,
  };
};

/// SIGN UP CONTROLLERS

// (POST) check validation on sign up page
exports.signup_validation_post = (req, res, next) => {
  res.send(
    sign_validation(
      req.body.usermail,
      req.body.password,
      req.body.passwordConfirm
    )
  );
};

// (POST) create user in database on sign up page
exports.signup_create_user_post = (req, res, next) => {
  const signupValidation = sign_validation(
    req.body.usermail,
    req.body.password,
    req.body.passwordConfirm
  );

  if(signupValidation.status === VALIDATE_WRONG)  {
    res.send(signupValidation);
    return;
  };

  res.send({
    tol: "Blabla",
    tal: "Bloblo"
  })
};

/// SIGN IN CONTROLLERS

// (POST) check validation on sign in page
exports.signin_validation_post = (req, res, next) => {
  res.send(sign_validation(req.body.usermail, req.body.password, null));
};

// (GET) get user data
exports.signin_get_user_get = (req, res, next) => {
  res.send({
    value: `Your're in signin/getUser. req.originalUrl: ${req.originalUrl}`,
    status: "OK",
  });
};
