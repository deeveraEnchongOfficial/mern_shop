//Create table for blog
import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, required: true, default: 'Admin'}
},{
    timestamps: true //for date
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;