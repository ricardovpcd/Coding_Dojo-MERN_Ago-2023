import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
    name: { type: String, minLength: [3, "El autor debe tener minimo 3 caracteres"], required: true },
    age: { type: Number, min: [18, "El autor debe ser mayor de edad"] },
    isPublished: Boolean,
    books: Number
});

const Author = mongoose.model("authors", AuthorSchema);
export default Author;