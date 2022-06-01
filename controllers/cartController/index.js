// internal imports
const Cart = require('../../models').cart;
const Product = require('../../models').product;

// get Cart details
async function getCartDetails(req, res, next) {
  try {
    const cart = await Cart.findAll({ 
      where: {
        user_id: req.user.user.id
      },
      include:[{
        model:Product
      }]    
    });
    
    res.status(200).json({
      message: "Cart details",
      data: cart
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
          error: err
        },
      },
    });
  }
}

// get Carts details
async function getCartsDetails(req, res, next) {
  try {
    const Carts = await Cart.findAll();
    res.status(200).json({
      message: "Carts details",
      data: Carts,
    });
    } catch (err) {
        res.status(500).json({
            errors: {
              common: {
                msg: "Unknown error occured!",
                error: err
              },
            },
        });
    }
}

// add Product
async function createCart(req, res, next) {
  try{
    const product = await Product.findOne({ 
        where: {
          id: req.body.product_id
        },    
    });
    
    if(!product){
        response.status(404).json({
            message: 'no such product present'
        });
    } 
    await Cart.create({
      product_id: req.body.product_id,
      user_id: req.user.user.id,
      quantity: req.body.quantity
    }).then(function (Cart) {
      if (Cart) {
        res.status(201).json({
            message: "Cart was added successfully!",
            data: Cart,
        });
      } else {
          response.status(400).json({
            message: 'Error in insert new record'
          });
      }
    });  
  } catch (err) {
      res.status(500).json({
        errors: {
          common: {
            msg: "Unknown error occured!",
            error: err
          },
        },
      });
  }
}

// remove Cart
async function removeCart(req, res, next) {

  try{
    await Cart.destroy({
      where: {
          id: req.params.id
      }
    }).then(function (deletedRecord) {
      if(deletedRecord === 1){
          res.status(200).json({message:"Cart Deleted successfully"});          
      }
      else
      {
          res.status(404).json({message:"record not found"})
      }
    }).catch(function (error){
      res.status(500).json(error);
    });
  }catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
          error: err
        },
      },
    });
  }
}

// restore Cart
async function restoreCart(req, res, next) {

  try{
    await Cart.restore({
      where: {
          id: req.params.id
      }
    }).then(function (restoreRecord) {
      if(restoreRecord === 1){
          res.status(200).json({message:"Cart restore successfully"});          
      }
      else
      {
          res.status(404).json({message:"record not found"})
      }
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!",
          error: err
        },
      },
    });
  }
}


module.exports = {
  getCartDetails,
  getCartsDetails,
  createCart,
  removeCart,
  restoreCart,  
};