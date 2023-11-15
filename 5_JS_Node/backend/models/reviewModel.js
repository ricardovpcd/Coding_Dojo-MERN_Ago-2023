import mongoose, { mongo } from "mongoose";

const ReviewSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
    idMovie: { type: mongoose.Types.ObjectId, ref: "movies" }
});

const Review = mongoose.model("reviews", ReviewSchema);
export default Review;