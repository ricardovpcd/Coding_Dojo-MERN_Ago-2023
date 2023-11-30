import express from "express";
import * as userCtrl from "../controllers/userController.js";
import multer from "multer";
import path from "path";

var storage = multer.diskStorage({
    destination: "public/",
    filename: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + Date.now() + ext)
    }
})

var upload = multer({ storage: storage })

const router = express.Router();
router.post("/api/user/register", userCtrl.registerUser);
router.post("/api/user/login", userCtrl.loginUser);
router.post("/api/user/send-email", userCtrl.sendEmail);
router.post("/api/user/upload-file", upload.single("profile-image"), userCtrl.uploadFile);

export {router};