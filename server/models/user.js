import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = Schema({
    username: {
        type: String,
        required: true

    },

    password: {
        type: String,
        required: true
    }
})

export default mongoose.model("Users", userSchema);