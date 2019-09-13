const jwt = require("jsonwebtoken");
const config = require("config");

//next is called to move on
module.exports = function(req, res, next) {
  //get token from header
  const token = req.header("x-auth-token");

  //check if does not exist
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
    //do not forget to call next, otherwise it would hang...
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
