const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");

const authenticate = async (req, res, next) => {
  const { username, password } = req.headers;

  try {
    const user = await Users.findBy({ username }).first();

    if (user && bcrypt.compareSync(password, user.password)) {
      next(); // pressing the button to let the request continue
    } else {
      res.status(401).json({ message: "You shall not pass!!" });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = authenticate;
