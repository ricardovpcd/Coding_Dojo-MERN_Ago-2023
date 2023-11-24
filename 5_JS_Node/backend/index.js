import express from "express";
import cors from "cors";
import * as authorRoutes from "./routes/authorRoutes.js";
import * as bookRoutes from "./routes/bookRoutes.js";
import * as userRoutes from "./routes/userRoutes.js";
import * as movieRoutes from "./routes/movieRoutes.js";
import "./config/mongodb.js";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSMongoose from "@adminjs/mongoose";
import Author from "./models/authorModel.js";
import Book from "./models/bookModel.js";

import path from "path";

const app = express();
app.use(cors());

app.use(express.json());

app.use(authorRoutes.router);
app.use(bookRoutes.router);
app.use(userRoutes.router);
app.use(movieRoutes.router);

AdminJS.registerAdapter(AdminJSMongoose)
const adminJs = new AdminJS({
    resources: [Author, Book],
    rootPath: '/admin',
});

const router = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, router);

const __dirname = path.resolve();
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(8080);