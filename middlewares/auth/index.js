const { isError } = require("joi");
const { varifyAccessToken } = require("../../utilities");

exports.authenticate = function (req, res, next) {
  
  const {authorization} = req.headers;
  const token = authorization.split(' ')[1];
  if (token == null) {
      return res.status(401).json({
        message: "Unauthorized"
    });
  }

  varifyAccessToken(token, (err, user) => {
    if (err) {
        return res.status(400).json({
            errors: errors,
            message: "Forbidden"
        });
    }

    req.user = user

    next()
  });
}