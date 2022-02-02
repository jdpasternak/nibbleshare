const sequelize = require("../../config/connection");
const Post = require("../../models/User");
const router = require("express").Router();

// GET /api/posts
router.get("/", (req, res) => {});

// GET /api/posts/:id
router.get("/:id", (req, res) => {});

// POST /api/posts/
router.post("/", (req, res) => {});

// PUT /api/posts/:id
router.put("/:id", (req, res) => {});

// DELETE /api/posts/:id
router.delete("/:id", (req, res) => {});

module.exports = router;
