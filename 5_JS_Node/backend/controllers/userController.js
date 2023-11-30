import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { json } from "express";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const registerUser = async (req, res) => {
    try{
        var userData = req.body;
        userData.password = bcrypt.hashSync(userData.password, 10);
        var result = await User.create(userData);
        res.status(200).json(result);
    }catch(e){
        res.status(400).json({
            "message": e.message
        })
    }
}

const loginUser = async (req, res) => {
    var result = await User.findOne({email: req.body.email});
    if(result == null){
        res.status(400).json();
        return;
    }

    var ressultCompare = bcrypt.compareSync(req.body.password, result.password);
    if(ressultCompare == false){
        res.status(400).json();
        return;
    }

    var myUser = {
        _id: result._id,
        name: result.name,
        email: result.email
    };
    var encodedData = jwt.sign(myUser, "codingdojo");
    res.status(200).json(encodedData);
}

const sendEmail = async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "yyyyyyyyy@gmail.com",
          pass: "xxxxxxxxxxxxxxx"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var mailOptions = {
        from: "yyyyyyyyy@gmail.com",
        to: "yyyyyyyyy@gmail.com",
        subject: "Hola CodingDojo!",
        text: "Este es un correo generado desde backend!",
        html: "<b>hey<b></b>"
    }

    var result = await transporter.sendMail(mailOptions);
    res.json("OK");
}

const uploadFile = (req, res) => {
    console.log(req.file.filename);
    console.log(req.body);

    res.json("uploadFile");
}

export { registerUser, loginUser, sendEmail, uploadFile };