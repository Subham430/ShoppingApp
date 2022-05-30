// internal imports
const Product = require('../../models').product;

// get Product details
async function getProductDetails(req, res, next) {
  try {
    const product = await Product.findOne({ 
      where: {
        id: req.params.id
      },    
    });
    
    res.status(200).json({
      message: "Product details",
      data: product
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

// get Products details
async function getProductsDetails(req, res, next) {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      message: "Products details",
      data: products,
    });
    } catch (err) {
      next(err);
    }
}

// add Product
async function createProduct(req, res, next) {
  try{
    await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description
    }).then(function (Product) {
      if (Product) {
        res.status(201).json({
            message: "Product was added successfully!",
            data: Product,
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
async function updateProduct(request, res, next) {
  try{
    const product = await Product.findOne({ 
      where: {
        id: request.params.id
      },     
    });
    
    if(!product){
      response.status(404).json({
        message: 'no such record found'
      });
    }
    
    await Product.update({
      name: request.body.name || product.name,
      description: request.body.description || product.description,
      price: request.body.price || product.price,
    },{ 
      where: { id: request.params.id }
    }).then(function (Product) {
      if (Product) {
        res.status(200).json({
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
async function removeProduct(req, res, next) {

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
async function restoreProduct(req, res, next) {

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
  getProductDetails,
  getProductsDetails,
  createProduct,
  updateProduct,
  removeProduct,
  restoreProduct,  
};