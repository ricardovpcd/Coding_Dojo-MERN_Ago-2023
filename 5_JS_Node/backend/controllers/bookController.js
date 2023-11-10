import Book from "../models/bookModel.js";

const createBook = async (req, res) => {
    try{
        var bookData = req.body;
        var response = await Book.create(bookData);
        res.status(200).json(response);
    }catch(e){
        res.status(400).json({
            "message": e.message
        });
    }
}

const getBooks = async (req, res) => {
    var listBooks = await Book.find();
    res.status(200).json(listBooks);
}

const deleteBook = async (req, res) => {
    var id = req.params.idBook;
    await Book.findByIdAndDelete(id);
    res.status(200).json();
}

const getBooksByAuthorId = async (req, res) => {
    var author = req.params.idAuthor;
    var listBooks = await Book.find({ idAuthor: author });
    res.status(200).json(listBooks);
}

export {createBook, getBooks, deleteBook, getBooksByAuthorId};