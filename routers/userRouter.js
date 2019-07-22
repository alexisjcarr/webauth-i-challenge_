const router = require("express").Router();
const Users = require("../data/models");
const authenticate = require("../middleware");

router.get("/", authenticate, async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
