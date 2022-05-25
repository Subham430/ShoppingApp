const { check, validationResult } = require("express-validator");

const doLoginValidators = [
  check("email")
    .normalizeEmail()
    .isEmail()
    .withMessage("email is required"),
    check("password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,16}$/, "i")
    .withMessage("Password must contains minimum 8 and maximum 16 characters, include one lowercase character, one uppercase character, a number, and a special character."),
];

const doLoginValidationHandler = function (req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()){
    next();
  }else{
    // response the enrors
    res.status(500).json({
        errors: errors,
    });
  }
};

module.exports = {
  doLoginValidators,
  doLoginValidationHandler,
};
