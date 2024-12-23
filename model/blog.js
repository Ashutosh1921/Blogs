import mongoose from "mongoose";
import User from "./user";
const blogSchema = mongoose.Schema({
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    genre: [
        {
            topic: { type: String },
            rating: { type: Number },
        }
    ]
})