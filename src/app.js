const express = require("express")
//=======================================
const BookController = require('./controllers/bookController');


const app = express();
app.use(express.json())

app.get('./books', BookController.getBooks);
app.get('./books/:id', () => {});
app.post('./books', () => {});
app.put('./books/:id', () => {});
app.delete('./books/:id', () => {});


module.exports = app;