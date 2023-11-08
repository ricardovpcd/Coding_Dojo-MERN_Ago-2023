import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: String,
    yearPublished: Number,
    idAuthor: { type: mongoose.Types.ObjectId, ref: "authors" }
});

const Book = mongoose.model("books", BookSchema);
export default Book;