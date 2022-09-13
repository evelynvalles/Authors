const AuthorController = require('../controllers/authors.controller');

module.exports = app => {
    app.get('/api/author', AuthorController.allAuthors);
    app.get('/api/author/:id', AuthorController.getOneAuthor);
    app.post('/api/author', AuthorController.createAuthor);
    app.put('/api/author/update/:id', AuthorController.updateAuthor);
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor);
}