//const express = require("express");
import express from 'express';
//const productRoute = require("./routes/productRoute");
import * as productRoute from "./routes/productRoute.js";
//const userRoute = require("./routes/userRoute");

const app = express();

app.use(express.json());

//app.use(userRoute);
app.use(productRoute.router);

app.listen(8000);