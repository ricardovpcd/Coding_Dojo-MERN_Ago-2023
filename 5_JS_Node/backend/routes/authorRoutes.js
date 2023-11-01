import express from 'express';
import * as authorCtlr from '../controllers/authorController.js';

const router = express.Router();
router.post("/api/author/create", authorCtlr.createAuthor);
router.get("/api/author/get", authorCtlr.getAuthors);
router.get("/api/author/getOne/:idAuthor", authorCtlr.getOneAuthor);
router.delete("/api/author/delete/:idAuthor", authorCtlr.deleteAuthor);
router.put("/api/author/update/:idAuthor", authorCtlr.updateAuthor);

export {router}