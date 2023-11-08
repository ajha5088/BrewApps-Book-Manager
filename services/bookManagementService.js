const BookManagementRepo = require("../repositories/bookManagementRepo")
class bookManagementService {
    constructor(){
        this.bookManagementRepo = new BookManagementRepo()
    }

    async addNewBook(params){
        try {
            console.log("Inside bookManagementController, Method:addNewBook")
            await this.bookManagementRepo.addNewBook(params)
            console.log("Leaving from bookManagementController, Method:addNewBook")
            return {message : "Book added successfully" , bookId : params.bookId}
        } catch (error) {
            console.log("Error in service: psService , Method:addNewBook");
            throw new Error(`Failed to add New Book. Something went wrong. ${error}`);
        }
    }

    async listBooks(filter,pageNumber,recordsPerPage){
        try {
            console.log("Inside bookManagemenetService ,Method:listBooks")
            const listBooksResponse = await this.bookManagementRepo.listBooks(filter,pageNumber,recordsPerPage)
            console.log("Leaving from bookManagementService , Method :listBooks")
            return listBooksResponse;
        } catch (error) {
            console.log("Error in service: bookManagementService , Method:listBooks");
            throw new Error(`Failed to list Books. Something went wrong. ${error}`);
        }
    }

    async listBooksById(bookId){
        try {
            console.log("Inside bookManagemenetService ,Method:listBooksById")
            const listBooksResponse = await this.bookManagementRepo.listBooksById(bookId)
            console.log("Leaving from bookManagementService , Method :listBooksById")
            return listBooksResponse;
        } catch (error) {
            console.log("Error in service: bookManagementService , Method:listBooksById");
            throw new Error(`Failed to list Books By Id. Something went wrong. ${error}`);
        }
    }

    async updateBookDetails(bookId,filter){
        try {
            console.log("Inside bookManagemenetService ,Method:updateBookDetails")
            const updateBookDetailsResponse = await this.bookManagementRepo.updateBookDetails(bookId,filter)
            console.log("Leaving from bookManagementService , Method :updateBookDetails")
            return updateBookDetailsResponse;
        } catch (error) {
            console.log("Error in service: bookManagementService , Method:updateBookDetails");
            throw new Error(`Failed to update Book Details. Something went wrong. ${error}`);
        }
    }

    async deleteBook(bookId){
        try {
            console.log("Inside bookManagemenetService ,Method:deleteBook")
            const deleteBookResponse = await this.bookManagementRepo.deleteBook(bookId)
            console.log("Leaving from bookManagementService , Method :deleteBook")
            return deleteBookResponse;
        } catch (error) {
            console.log("Error in service: bookManagementService , Method:deleteBook");
            throw new Error(`Failed to delete Book. Something went wrong. ${error}`);
        }
    }
}

module.exports = bookManagementService;