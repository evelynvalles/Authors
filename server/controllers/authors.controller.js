const { Author } = require("../models/authors.model")

// create
module.exports.createAuthor = (req, res) => {
    const {name}  = req.body;
    Author.create( {name} )
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

// all authors
module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json(err))
}

// get one
module.exports.getOneAuthor = (req, res) => {
    const paramsId = req.params.id;
    Author.findOne({ _id: paramsId })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

// update
module.exports.updateAuthor = (req, res) => {
    const paramsId = req.params.id;
    const updatedAuthor = req.body;
    Author.findOneAndUpdate(
        {_id: paramsId},
        updatedAuthor,
        {new: true, runValidators: true}
    )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// delete
module.exports.deleteAuthor = (req, res) => {
    const paramsId = req.params.id;
    Author.findOneAndDelete({_id: paramsId})
    .then(deletedAuthor => res.json(deletedAuthor))
    .catch(err => res.status(400).json(err))
}
