//Create table for category
import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    value: {type: String, required: true},
    label: {type: String, required: true},
},{
    timestamps: true //for date
});

const Category = mongoose.model('Category', categorySchema);
export default Category;