// external imports
const{check, validationResult} = require("express-validator");
const createError=require("http-errors");

//internal imports
const Product = require("../../models").product;

// add Product
const addProductValidators=[
    check("name")
        .isLength({ min:1})
        .withMessage("Name is required")
        .isAlpha("en-US",{ignore: " -" })
        .withMessage("Name must not contain anything other than alphabet")
        .trim(),
    check("price")
        .optional(),
    check("description")
        .optional()
        .isLength({ min:1})
        .withMessage("Description must not emplty")
        .trim()
        
];

const updateProductValidators=[
    check("name")
        .optional()
        .isLength({ min:1})
        .withMessage("Name is required")
        .trim(),
    check("description")
        .optional()
        .isAlpha("en-US",{ignore: " -" })
        .withMessage("Description must not contain anything other than alphabet")
        .trim(),
    check("price")
        .optional(),          
];

const productValidationHandler = function (req, res, next){
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
  addProductValidators,
  updateProductValidators,
  productValidationHandler,
};