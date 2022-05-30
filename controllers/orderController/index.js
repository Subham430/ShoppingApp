// internal imports
const Order = require('../../models').order;
const OrderProduct = require('../../models').order_product;

// get Order details
async function getOrderDetails(req, res, next) {
  try {
    const order = await Order.findAll({ 
      where: {
        user_id: req.params.id
      },    
    });
    
    res.status(200).json({
      message: "Order details",
      data: order
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

// get Orders details
async function getOrdersDetails(req, res, next) {
  try {
    const orders = await Order.findAll();
    res.status(200).json({
      message: "orders details",
      data: orders,
    });
    } catch (err) {
      next(err);
    }
}

// add Order
async function createOrder(req, res, next) {
  try{
    const order = await Order.create({
      user_id: req.body.user_id,
      grand_total: req.body.grand_total,
      address: req.body.address
    });
    for (let i = 0; i < req.body.products.length; i++) {
      await OrderProduct.create({
        user_id: req.body.user_id,
        product_id: req.body.products[i].product_id,
        quantity: req.body.products[i].quantity,
        price: req.body.products[i].price
      });
    }
    res.status(200).json({
      message: "Order created",
      data: order
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

// remove Order
async function removeOrder(req, res, next) {

  try{
    await Order.destroy({
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

// restore Order
async function restoreOrder(req, res, next) {

  try{
    await Order.restore({
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

async function oderStore(req, res){

}

module.exports = {
  getOrderDetails,
  getOrdersDetails,
  createOrder,
  restoreOrder,
  removeOrder 
};