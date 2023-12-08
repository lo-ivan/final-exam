const router = require('express').Router();
let Book = require('../models/booklist.model');

router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/').post(async (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  const pages = req.body.pages;
  const newBook = await new Book({
    title,
    author,
    description,
    pages
  });
  newBook
    .save()
    .then(() => res.json('added/saved book'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').post(async (req, res) => {
  await  Book.findById(req.params.id)
    .then((bookToEdit) => {
        bookToEdit.title = req.body.title;
        bookToEdit.author = req.body.author;
        bookToEdit.description = req.body.description;
        bookToEdit.pages = req.body.pages;
        bookToEdit
            .save()
            .then(() => res.json('updated book'))
            .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete(async (req, res) => {
  await Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('deleted book'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;