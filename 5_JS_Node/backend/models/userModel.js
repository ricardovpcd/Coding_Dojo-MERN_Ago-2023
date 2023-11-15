import mongoose from "mongoose";
//import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
},
{
    timestamps: true
});

/*UserSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});*/

const User = mongoose.model("users", UserSchema);
export default User;