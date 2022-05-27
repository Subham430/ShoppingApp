// internal imports
const Cart = require('../../models').cart;
const User = require('../../models').user;

// get Product details
async function getCartDetails(req, res, next) {
  try {
    const Cart = await Cart.findAll({ 
      where: {
        user_id: req.params.id
      },    
    });
    
    res.status(200).json({
      message: "Cart details",
      data: Cart
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
    const user = await User.findOne({ 
        where: {
          id: req.params.id
        },    
    });
    
    if(!user){
        response.status(404).json({
            message: 'no such user present'
        });
    } 
    await Cart.create({
      product_id: req.body.product_id,
      user_id: req.params.id,
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

// update Product
async function updateCart(request, res, next) {
  try{
    // const product = await Product.findOne({ 
    //   where: {
    //     id: request.body.id
    //   },     
    // });
    
    // if(!product){
    //   response.status(404).json({
    //     message: 'no such record found'
    //   });
    // }

    // if((request.body.password)){
    //   const hashedPassword = await bcrypt.hash(request.body.password, 10);
    //   request.body.password = hashedPassword;
    // }
    
    await Product.update({
      name: request.body.name || user_details.name,
      description: request.body.description || user_details.description,
      price: request.body.price || user_details.price,
    },{ 
      where: { id: request.body.id }
    }).then(function (Product) {
      if (Product) {
        res.status(201).json({
            message: "Product was updated successfully!",
            data: Product,
        });
      } else {
          response.status(400).json({
            message: 'Error in updating the record'
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

// remove Product
async function removeCart(req, res, next) {

  try{
    await Product.destroy({
      where: {
          id: req.params.id
      }
    }).then(function (deletedRecord) {
      if(deletedRecord === 1){
          res.status(200).json({message:"Product Deleted successfully"});          
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

// restore Product
async function restoreCart(req, res, next) {

  try{
    await Product.restore({
      where: {
          id: req.params.id
      }
    }).then(function (restoreRecord) {
      if(restoreRecord === 1){
          res.status(200).json({message:"Product restore successfully"});          
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
  updateCart,
  removeCart,
  restoreCart,  
};