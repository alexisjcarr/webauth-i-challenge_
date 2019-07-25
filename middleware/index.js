const bcrypt = require("bcryptjs");
const Users = require("../data/models");

const authenticate = async (req, res, next) => {
  const { username, password } = req.headers;

  try {
    const user = await Users.findBy({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      next();
    } else {
      res.status(401).json({ message: "You shall not pass!!" });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = authenticate;
