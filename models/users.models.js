import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Phone:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true,
        default:Date.now()
    }
},{    timestamps:true
})
export const User = mongoose.model('User',userSchema);