//Create table for subcategory
import mongoose from 'mongoose'

const subcategorySchema = new mongoose.Schema({
    checked: {type: Boolean, required: true},
    label: {type: String, required: true},
},{
    timestamps: true //for date
});

const Subcategory = mongoose.model('Subcategory', subcategorySchema);
export default Subcategory;