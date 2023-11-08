const Joi = require("joi");
const uuid = require("uuid");

const BookManagementService = require("../services/bookManagementService");

class bookManagementController {
  constructor() {
    this.bookMangementService = new BookManagementService();
  }

  addNewBook = async (req, res) => {
    try {
      console.log("Inside bookMangementController, Method : addNewBook");
      const schema = Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        summary: Joi.string().required(),
      });

      //Validating the request parameters
      const validationResult = schema.validate(req.body);

      if (validationResult.error) {
        return res
          .status(400)
          .json({ message: validationResult.error.details[0].message });
      }

      let params = {
        bookId: uuid.v4(),
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
      };

      const addNewBookResponse = await this.bookMangementService.addNewBook(
        params
      );

      console.log("Leaving from bookManagementController , Method:addNewBook");
      return res.json(addNewBookResponse);
    } catch (error) {
      console.log("Error in bookManagementController,Method:addNewBook", error);
      return res.json({ error: error.message });
    }
  };

  listBooks = async (req, res) => {
    try {
      console.log("Inside bookManagemenetController, Method:listBooks");
      const filter = {};
      const textSearchFields = ["title", "author", "summary"];

      if (req.query.q) {
        const searchValue = req.query.q;
        filter.$text = { $search: searchValue };
      } else {
        textSearchFields.forEach((field) => {
          if (req.query[field]) {
            filter[field] = { $regex: req.query[field], $options: "i" };
          }
        });
      }
      const pageNumber = req.query.pageNumber;
      const recordsPerPage = req.query.recordsPerPage;

      const listBooksResponse = await this.bookMangementService.listBooks(
        filter,
        pageNumber,
        recordsPerPage
      );
      console.log("Leaving from bookManagementController ,Method: listBooks");
      return res.json(listBooksResponse);
    } catch (error) {
      console.log("Error in bookManagementController,Method:addNewBook", error);
      return res.json({ error: error.message });
    }
  };

  listBooksById = async (req, res) => {
    try {
      console.log("Inside bookManagementController , Method:listBooksById");
      let bookId = req.params.bookId;
      const listBooksById = await this.bookMangementService.listBooksById(bookId);
      console.log("Leaving from bookManagementController, Method:listBooksById");
      return res.json(listBooksById);
    } catch (error) {
      console.log(
        "Error in bookManagementController,Method:listBooksById",
        error
      );
      return res.json({ error: error.message });
    }
  };

  updateBookDetails = async (req, res) => {
    try {
      console.log("Inside bookManagementController , Method:updateBookDetails");
      const schema = Joi.object({
        bookId: Joi.string().required(),
        title: Joi.string().empty("").optional(),
        author: Joi.string().empty("").optional(),
        summary: Joi.string().empty("").optional(),
      });

      //Validating the request parameters
      const validationResult = schema.validate(req.body);

      if (validationResult.error) {
        return res
          .status(400)
          .json({ message: validationResult.error.details[0].message });
      }

      let filter = {};
      filter.title = req.body.title;
      filter.author = req.body.author;
      filter.summary = req.body.summary;

      const updateResponse = await this.bookMangementService.updateBookDetails(
        req.body.bookId,
        filter
      );
      console.log(
        "Leaving from bookManagementController, Method:updateBookDetails"
      );
      return res.json(updateResponse);
    } catch (error) {
      console.log(
        "Error in bookManagementController,Method:updateBookDetails",
        error
      );
      return res.json({ error: error.message });
    }
  };

  deleteBook = async (req, res) => {
    try {
      console.log("Inside bookManagementController , Method:deleteBook");
      if(!req.query.bookId){
        return res.json({message:"book Id is a required field"})
      }
      let bookId = req.query.bookId.split(",");

      const deleteBookResponse = await this.bookMangementService.deleteBook(bookId)
      console.log("Leaving from bookManagementController, Method:deleteBook")
      return res.json(deleteBookResponse);
    } catch (error) {
      console.log("Error in bookManagementController,Method:deleteBook", error);
      return res.json({ error: error.message });
    }
  };
}

module.exports = bookManagementController;
