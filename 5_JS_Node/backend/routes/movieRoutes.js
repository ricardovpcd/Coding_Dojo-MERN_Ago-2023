import express from "express";
import * as movieCtrl from "../controllers/movieController.js";

const router = express.Router();
router.post("/movie/create", movieCtrl.createMovie);
router.get("/movie/getAll", movieCtrl.getAllMovies);

export {router};