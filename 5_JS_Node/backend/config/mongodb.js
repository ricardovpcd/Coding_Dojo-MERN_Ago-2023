import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/directory")
.then(() => console.log("Conexion correcta"))
.catch((e) => console.log(e));

/*const createMongoDBCon = () => {
    mongoose.connect("mongodb://localhost:27017/directory")
    .then(() => console.log("Conexion correcta"))
    .catch((e) => console.log(e));
}*/

//export default createMongoDBCon;