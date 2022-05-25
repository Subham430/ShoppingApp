// external imports
const{check, validationResult} = require("express-validator");
const createError=require("http-errors");

// const { sequelize } = require("../../config/server"),
//     { user } = sequelize.models;
const User = require("../../models").user;
// add user
const addUserValidators=[
    check("name")
        .isLength({ min:1})
        .withMessage("Name is required")
        .isAlpha("en-US",{ignore: " -" })
        .withMessage("Name must not contain anything other than alphabet")
        .trim(),
    check("email")
        .isEmail()
        .withMessage("Invalid email address")
        .trim()
        .custom(async (value) => {
            try{
                const user=await User.findOne({
                    where: {
                        email: value,
                    }
                });
                if (user){
                    throw createError("Email already is exists!");
                }
            }catch (err){
                throw createError(err.message);
            }         
        }),
    check("password")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,16}$/, "i")
        .withMessage("Password must contains minimum 8 and maximum 16 characters, include one lowercase character, one uppercase character, a number, and a special character."),
    check("address")
        .optional(),
    check("description")
        .optional()
        
];

const addUserValidationHandler = function (req, res, next){
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

module.exports ={
  addUserValidators,
  addUserValidationHandler,
};