const express = require("express");
const router = express.Router();

const BookManagementController = require('./controllers/bookManagementController');

const bookManagementController = new BookManagementController()

function routes(router) {
    router.post("/addNewBook", bookManagementController.addNewBook)
    router.get("/listBooks" , bookManagementController.listBooks)
    router.get("/listBookById/:bookId" ,bookManagementController.listBooksById)
    router.put("/updateBookDetails" ,bookManagementController.updateBookDetails)
    router.delete("/deleteBookDetails" ,bookManagementController.deleteBook)
}

routes(router)

module.exports = router;