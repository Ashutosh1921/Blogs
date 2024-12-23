import mongoose from "mongoose";
import { type } from "os";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})
// now creating a collection for the users
const User = mongoose.model("Users", userSchema);

module.exports = User;