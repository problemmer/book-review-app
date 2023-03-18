const db = require('../models');
const Book = db.book;
const Comment = db.comment;

//create new book
exports.create = (req,res) => {
    if (!req.body.title) {
        return res.status(400).send({
            message: "Input book title first",
        });
    }

    //from user input
    const book = {
        title: req.body.title,
        author: req.body.author,
        about_author : req.body.about_author,
        review : req.body.review,
        price : req.body.price,
        rating : req.body.rating,
        picture : req.body.picture,
    };

    //input to db
    Book.create(book)
    .then((data) => {
        res.json({
            message: "Book created",
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

//get all book
exports.findAll = (req,res) => {
    Book.findAll()
    .then((books) => {
        res.json({
            message: "All books displayed",
            data: books,
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Error occurred",
            data: null,
        });
    });
};

//get book by ID
exports.findOne = (req, res) => {
    Book.findByPk(req.params.id)
    .then((book) => {
        res.json({
            message: "Book displayed",
            data: book,
        });
    })
    .catch((err) => {
        res.status(500).json({
            message: err.message || "Error occured",
            data:null,
        });
    });
}

//update book by ID
exports.update = (req, res) => {
    const id = req.params.id;
    Book.update(req.body, {
        where: { id },
    })
    .then((num) => {
        if (num==1) {
            res.json({
                message:"Book updated",
                data: req.body,
            });
        } else {
            res.json({
                message: `Can't update book with id=${id}`,
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

//delete book by ID
exports.delete = (req, res) => {
    const id = req.params.id;
    Book.destroy({
        where: { id },
    })
    .then((num) => {
        if (num==1) {
            res.json({
                message: "Book deleted",
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

    //get one book with comments
    exports.findOne = (req,res) => {
        const id = req.params.id;
        Book.findOne({
            include : [{
                model: Comment,
                as: 'comment'
            }],
            where: { id : id}
        })
        .then((books) => {
            res.json({
                message: "Comments on this book displayed",
                data: books,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Error occurred",
                data: null,
            });
        });
    };
};
