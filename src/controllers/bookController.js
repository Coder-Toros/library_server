const db = require('../../db')


class BookController {
    async getBooks(req, res) {
        try {
            const books = await db.query(
                `SELECT *
                FROM books`
                )
                console.log(books);
                res.json(books)
        } catch (error) {
            console.log(error.massege);
        }
    }
}

module.exports = new BookController()