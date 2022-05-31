// external imports
const{check, validationResult} = require("express-validator");

// add orderProduct
const addOrderProductValidators=[
    check("grand_total")
        .optional()
        .isLength({ min:1})
        .withMessage("grand_total is required")
        .trim(),
    check("address")
        .optional()
        .isLength({ min:1})
        .withMessage("address is required")
        .trim()        
];


const orderValidationHandler = function (req, res, next){
    const errors = validationResult(req);
    if (errors.isEmpty()){
        next();
        
    }else{
        // response the enrors
        res.status(400).json({
            errors: errors,
        });
    }
};

module.exports ={
  addOrderProductValidators,
  orderValidationHandler,
};