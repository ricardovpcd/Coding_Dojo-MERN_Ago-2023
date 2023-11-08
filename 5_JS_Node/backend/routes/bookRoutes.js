import express from "express";
import * as bookCtrl from "../controllers/bookController.js";

const router = express.Router();
router.post("/api/book/create", bookCtrl.createBook);
router.get("/api/book/get", bookCtrl.getBooks);
router.delete("/api/book/delete/:idBook", bookCtrl.deleteBook);
router.get("/api/book/getByAuthor/:idAuthor", bookCtrl.getBooksByAuthorId);

export {router};