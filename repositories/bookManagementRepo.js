const BookManagementSchema = require("../models/bookManagementSchema")

class bookManagementRepo{
    constructor(){
        this.bookManagementSchema = BookManagementSchema
    }

    async addNewBook(params){
        await this.bookManagementSchema.insertMany(params)
    }

    async listBooks(filter,pageNumber,recordsPerPage){
        let skipAmount = (pageNumber - 1)*recordsPerPage
        let pipeline = [{ $match: filter } , {$project : {bookId:1,title:1,author:1}}];
    
        if (recordsPerPage) {
          pipeline.push({ $skip: skipAmount }, { $limit: recordsPerPage });
        }

        return await this.bookManagementSchema.aggregate([pipeline]);
    }

    async listBooksById(bookId){
        let pipeline = [{ $match: {bookId:bookId} } , {$project : {bookId:1,title:1,author:1,summary:1}}];
        return await this.bookManagementSchema.aggregate([pipeline]);
    }

    async updateBookDetails(bookId,filter){
        return await this.bookManagementSchema.updateMany({ bookId: bookId }, { $set: filter })
    }

    async deleteBook(bookId){
        return await this.bookManagementSchema.deleteMany({ bookId: { $in: bookId } })
    }

}

module.exports = bookManagementRepo;