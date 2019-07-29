const bcrypt = require("bcryptjs");

const router = require("express").Router();
const Users = require("../data/models");

router.post("/register", async (req, res) => {
  let user = req.body;

  try {
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;
    const saved = await Users.add(user);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findBy({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.username = user.username;
      res.status(200).json({ message: `Welcome ${user.username}!` });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(200).json({
          message: "Bye Felisha..."
        });
      }
    });
  } else {
    res.status(200).json({
      message: "Okay. Bye Felisha"
    })
  }
});

module.exports = router;
