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

router.get("/post/new", withAuth, (req, res) => {
  res.render("new-post", { loggedIn: req.session.loggedIn });
});

// GET /post/:id
router.get("/post/:id", withAuth, (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "created_at", "user_id"],
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
      const post = dbPostData.get({ plain: true });
      res.render("post", {
        post,
        loggedIn: req.session.loggedIn,
        ownPost: req.session.user_id === post.user_id,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /post/edit/:id
router.get("/post/edit/:id", withAuth, (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
  }).then((dbPostData) => {
    if (req.session.user_id !== dbPostData.user_id) {
      res.redirect(`/post/${id}`);
      return;
    }
    const post = dbPostData.get({ plain: true });
    res.render("edit-post", { post, loggedIn: req.session.loggedIn });
  });
});

// GET /dashobard
router.get("/dashboard", withAuth, (req, res) => {
  // const user_id = req.session.user_id;
  Post.findAll({
    where: {
      user_id: req.session.user_id,
      // user_id: user_id,
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
