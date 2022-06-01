// external imports
const{check, validationResult} = require("express-validator");

// add Product
const addCartValidators=[
    check("product_id")
        .isLength({ min:1})
        .withMessage("product_id is required")
        .trim(),
    check("quantity")
        .optional().isLength({ min:1})
        .withMessage("quantity is required")
        .trim()        
];

const updateCartValidators=[
    check("product_id")
        .optional()
        .isLength({ min:1})
        .withMessage("product_id is required")
        .trim(),
    check("user_id")
        .optional()
        .isLength({ min:1})
        .withMessage("user_id is required")
        .trim(),
    check("quantity")
        .optional()
        .isLength({ min:1})
        .withMessage("quantity is required")
        .trim(),          
];

const cartValidationHandler = function (req, res, next){
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
  addCartValidators,
  updateCartValidators,
  cartValidationHandler,
};