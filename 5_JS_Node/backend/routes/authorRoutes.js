import express from 'express';
import * as authorCtlr from '../controllers/authorController.js';
import * as middleware from '../config/middlewareJwt.js';

const router = express.Router();
router.post("/api/author/create", middleware.middleware, authorCtlr.createAuthor);
router.get("/api/author/get", middleware.middleware, authorCtlr.getAuthors);
router.get("/api/author/getOne/:idAuthor", middleware.middleware, authorCtlr.getOneAuthor);
router.delete("/api/author/delete/:idAuthor", middleware.middleware, authorCtlr.deleteAuthor);
router.put("/api/author/update/:idAuthor",middleware.middleware, authorCtlr.updateAuthor);

export {router}