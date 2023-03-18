const db = require("../models");
const Comment = db.comment;

//create new comment
exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({
      message: "Input Comment first",
    });
  }

  //from user input
  const comment = {
    name: req.body.name,
    comment: req.body.comment,
  };

  //input to db
  Comment.create(comment)
    .then((data) => {
      res.json({
        message: "Comment created",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        messagee: err.message || "Error occured",
        data: null,
      });
    });
};


//get comment by ID
exports.findOne = (req, res) => {
    Comment.findByPk(req.params.id)
    .then((comment) => {
      res.json({
        message: "Book displayed",
        data: comment,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Error occured",
        data: null,
      });
    });
};

//update comment by ID
exports.update = (req, res) => {
  const id = req.params.id;
  Comment.update(req.body, {
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Comment updated",
          data: req.body,
        });
      } else {
        res.json({
          message: `Can't update comment with id=${id}`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Error occurred",
        data: null,
      });
    });
};

//delete comment by ID
exports.delete = (req, res) => {
  const id = req.params.id;
  Comment.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Comment deleted",
          data: req.body,
        });
      } else {
        res.json({
          message: `Can't delete book with id=${id}`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Error occurred",
        data: null,
      });
    });
};