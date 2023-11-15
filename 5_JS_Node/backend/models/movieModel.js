import mongoose from "mongoose";

const MovieSchema  = new mongoose.Schema({
    title: String,
    name: String
});

const Movie = mongoose.model("movies", MovieSchema);
export default Movie;