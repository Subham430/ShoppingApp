// external imports
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../../utilities");

// internal imports
const User = require("../../models").user;

// login here
async function login(req, res, next) {
   try{
    const user_details = await User.findOne({ 
      where: {
        email: req.body.email
      },     
    });

    if(!user_details){
      return res.status(400).json({
        message:'Invalid Email or Password.'});
    }

    const validPassword = await bcrypt.compare(req.body.password, user_details.password);
    if (!validPassword) {
      return res.status(400).json({
        message:'Invalid Email or Password.'});
    }
    user_details.password = undefined;
    const access_token = generateAccessToken({user:user_details});

    res.status(200).json({
      message:"Login successful",
      user: user_details,
      access_token: access_token,
    });

   }catch(err){
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured!123",
          error: err
        },
      },
    });
  }
}

module.exports = {
    login,
};