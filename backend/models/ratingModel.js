//Create table for rating
import mongoose from 'mongoose'

const ratingSchema = new mongoose.Schema({
    value: {type: String, required: true},
    label: {type: String, required: true},
},{
    timestamps: true //for date
});

const Rating = mongoose.model('Rating', ratingSchema);
export default Rating;