const { ExclusionConstraintError } = require("sequelize/dist");
const sequelize = require("../../config/connection");
const User = require("../../models/User");
const router = require("express").Router();

// GET /api/users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/users/:id
router.get("/:id", (req, res) => {});

// POST /api/users/
router.post("/", (req, res) => {});

// PUT /api/users/:id
router.put("/:id", (req, res) => {});

// DELETE /api/users/:id
router.delete("/:id", (req, res) => {});

module.exports = router;
