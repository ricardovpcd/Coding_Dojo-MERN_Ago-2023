import express from "express";
import cors from "cors";
import * as authorRoutes from "./routes/authorRoutes.js";
// import createMongoDBCon from "./config/mongodb.js";
import "./config/mongodb.js";

const app = express();
app.use(cors());

//createMongoDBCon();

app.use(express.json());

app.use(authorRoutes.router);

app.listen(8080);