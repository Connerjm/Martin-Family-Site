//Imports.
import mongoose from 'mongoose';
const { Schema } = mongoose;

//Defining columns of the user table.
const userSchema = new Schema({
    email: String,
    password: String,
    first_name: String,
    last_name: String
});

//Getting the model from the schema.
const User = mongoose.model("User", userSchema);

//Exporting the model.
module.exports = User;