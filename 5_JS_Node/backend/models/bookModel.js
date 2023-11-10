import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    yearPublished: { type: Number, required: true },
    idAuthor: { type: mongoose.Types.ObjectId, ref: "authors" }
});

const Book = mongoose.model("books", BookSchema);
export default Book;