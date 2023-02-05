import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    /*codUser: {
        type: Number,
        required: true
    },*/

    fullNameColab:{
        type: String,
        required: true,
    },

    nameUser: {
        type: String,
        required: true,
    },

    passUser: {
        type: String,
        required: true,
    },

    accessUser: {
        type: Number,
        required: true,
    }
})

export default mongoose.model('User', userSchema)