import express from "express";
import cors from "cors";
import * as authorRoutes from "./routes/authorRoutes.js";
import * as bookRoutes from "./routes/bookRoutes.js";
import * as userRoutes from "./routes/userRoutes.js";
// import createMongoDBCon from "./config/mongodb.js";
import "./config/mongodb.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use(authorRoutes.router);
app.use(bookRoutes.router);
app.use(userRoutes.router);

app.listen(8080);