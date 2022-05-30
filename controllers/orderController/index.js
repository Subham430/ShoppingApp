// internal imports
const Order = require('../../models').order;

// get Order details
async function getOrderDetails(req, res, next) {
  try {
    const order = await Order.findAll({ 
      where: {
        user_id: req.params.id
      },    
    });
    
    res.status(200).json({
      message: "Product details",
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
      message: "Products details",
      data: orders,
    });
    } catch (err) {
      next(err);
    }
}

// add Order
async function createOrder(req, res, next) {
  try{
    await Order.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    }).then(function (Product) {
      if (Order) {
        res.status(201).json({
            message: "Product was added successfully!",
            data: Order,
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


module.exports = {
  getOrderDetails,
  getOrdersDetails,
  createOrder,
  restoreOrder,
  removeOrder 
};