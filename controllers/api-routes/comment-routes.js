const sequelize = require("../../config/connection");
const Comment = require("../../models/User");
const router = require("express").Router();

// GET /api/comments
router.get("/", (req, res) => {});

// GET /api/comments/:id
router.get("/:id", (req, res) => {});

// POST /api/comments/
router.post("/", (req, res) => {});

// PUT /api/comments/:id
router.put("/:id", (req, res) => {});

// DELETE /api/comments/:id
router.delete("/:id", (req, res) => {});

module.exports = router;
