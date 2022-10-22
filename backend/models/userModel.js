//Create table for user
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true}, //only one email, no duplicate
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false}
},{
    timestamps: true //for date
});

const User = mongoose.model('User', userSchema);
export default User;