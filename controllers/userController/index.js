// internal imports
const User = require('../../models').user;

const bcrypt = require("bcrypt");

// get user details
async function getUserDetails(req, res, next) {
  try {
    const user_details = await User.findAll({ 
      where: {
        id: req.user.user.id
      },    
    });
    
    res.status(200).json({
      message: "User details",
      data: user_details
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

// get all users details
async function getUsersDetails(req, res, next) {
  try {
    const users = await User.findAll();
    res.status(200).json({
      message: "User details",
      data: users,
    });
    } catch (err) {
      next(err);
    }
}

// add user
async function registerUser(req, res, next) {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  try{
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      description: req.body.description
    }).then(function (User) {
      if (User) {
        res.status(201).json({
            message: "User was added successfully!",
            data: User,
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

// update user
async function updateUser(request, res, next) {
  try{
    const user_details = await User.findOne({ 
      where: {
        id: request.user.user.id
      },     
    });
    
    if(!user_details){
      response.status(404).json({
        message: 'no such record found'
      });
    }
    
    await User.update({
      name: request.body.name || user_details.name,
      address: request.body.address || user_details.address,
      email: request.body.email || user_details.email,
    },{ 
      where: { id: request.user.user.id }
    }).then(function (User) {
      if (User) {
        res.status(201).json({
            message: "User was updated successfully!",
            data: User,
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

// reset user's password
async function resetPassword(request, res, next) {
  try{
    const user_details = await User.findOne({ 
      where: {
        id: request.user.user.id
      },     
    });
    
    if(!user_details){
      response.status(404).json({
        message: 'no such record found'
      });
    }

    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    
    await User.update({
      password: hashedPassword,
    },{ 
      where: { id: request.user.user.id }
    }).then(function (User) {
      if (User) {
        res.status(200).json({
            message: "User's password was updated successfully!",
            data: User,
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

// remove user
async function removeUser(req, res, next) {

  try{
    await User.destroy({
      where: {
          id: req.user.user.id
      }
    }).then(function (deletedRecord) {
      if(deletedRecord === 1){
          res.status(200).json({message:"Deleted successfully"});          
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

// restore user
async function restoreUser(req, res, next) {

  try{
    await User.restore({
      where: {
          id: req.user.user.id
      }
    }).then(function (restoreRecord) {
      if(restoreRecord === 1){
          res.status(200).json({message:"restore successfully"});          
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

//test
async function employee(req, res, next) {
  res.status(200).json({
    message: "User was added successfully!",
  });
}


module.exports = {
  getUserDetails,
  getUsersDetails,
  registerUser,
  updateUser,
  removeUser,
  restoreUser,
  resetPassword,
  employee,
  
};