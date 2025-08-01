const jwt = require("jsonwebtoken");
//JWT_SECRET code
const JWT_SECRET = "MitulIsAHandsomeBoy";

const fetchuser = (req, res, next) => {
  //getting the user form the JWT token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
