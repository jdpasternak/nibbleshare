const { Post, User, Comment } = require("../models");

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
    res.render("homepage", { posts });
  });
});

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
    .then((dbPostData) => res.render("post", dbPostData.get({ plain: true })))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/post/edit/:id", (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
  }).then((dbPostData) => {
    res.render("edit-post", dbPostData.get({ plain: true }));
  });
});

module.exports = router;