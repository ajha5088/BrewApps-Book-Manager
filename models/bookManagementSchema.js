const mongoose = require("mongoose");

const bookManagementSchema = new mongoose.Schema({
    bookId: { type: String, required:true ,unique: true },
    title : {type: String , required : true , unique:true},
    author : {type : String ,required :true },
    summary : {type :String , required : true}
})


module.exports = mongoose.model("bookManagement", bookManagementSchema)