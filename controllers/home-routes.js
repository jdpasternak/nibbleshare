const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

const router = require("express").Router();

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "created_at"],
    include: {
      model: User,
      attributes: ["username"],
    },
  }).then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  });
});

// GET /post/:id
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["comment_text", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbPostData) => {
      res.render(
        "post",
        dbPostData.get({ plain: true, loggedIn: req.session.loggedIn })
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /post/edit/:id
router.get("/post/edit/:id", (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
  }).then((dbPostData) => {
    res.render("edit-post", dbPostData.get({ plain: true }));
  });
});

// GET /dashobard
router.get("/dashboard", withAuth, (req, res) => {
  // const user_id = req.session.user_id;
  const user_id = 1;
  Post.findAll({
    where: {
      // id: req.session.user_id
      user_id: user_id,
    },
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Comment,
        attributes: ["comment_text", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbPostData) => {
      console.log(dbPostData);
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /login
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
