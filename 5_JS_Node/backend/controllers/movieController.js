import Movie from "../models/movieModel.js";
import Review from "../models/reviewModel.js";

const createMovie = async (req, res) => {
    var data = req.body;

    var newMovie = {
        "title": data.title,
        "name": data.name
    };
    var responseMovie = await Movie.create(newMovie);

    var newReview = {
        "name": data.name,
        "rating": data.rating,
        "review": data.review,
        "idMovie": responseMovie._id
    }
    var responseReview = await Review.create(newReview);

    res.status(200).json();
}

const getAllMovies = async (req, res) => {
    var listMovies = await Movie.find().lean();
    for (let i = 0; i < listMovies.length; i++) {
        var listReviews = await Review.find({idMovie: listMovies[i]._id});
        let suma = 0;
        for (let j = 0; j < listReviews.length; j++) {
            suma += listReviews[j].rating;
        }

        var avg = (listReviews.length == 0) ? 0 : suma / listReviews.length;
        listMovies[i].average = avg;
    }

    res.json(listMovies);
}

export {createMovie, getAllMovies};