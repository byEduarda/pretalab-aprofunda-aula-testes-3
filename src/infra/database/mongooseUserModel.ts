import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, require: true},
    login: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    created_At: {type: Date, default: Date.now},
})