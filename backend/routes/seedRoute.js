//for seed al datas from data.js
import express from 'express'
import data from '../data.js';
import Blog from '../models/blogModel.js';
import Category from '../models/categoryModel.js';
import Product from '../models/productModel.js';
import Rating from '../models/ratingModel.js';
import Subcategory from '../models/subcategoryModel.js';
import User from '../models/userModel.js';


const seedRouter = express.Router();

seedRouter.get('/', async(req, res) => {

    //seed for users
    await User.remove({});
    const createdUser = await User.insertMany(data.users);

    //seed for products
    await Product.remove({});
    const createdProduct = await Product.insertMany(data.products);

    //seed for blogs
    await Blog.remove({});
    const createdBlog = await Blog.insertMany(data.blogs);

    //seed for category
    await Category.remove({});
    const createdCategory = await Category.insertMany(data.category);

    //seed for subcategory
    await Subcategory.remove({});
    const createdSubcategory = await Subcategory.insertMany(data.subcategory);

    //seed for rating
    await Rating.remove({});
    const createdRating = await Rating.insertMany(data.rating);

    res.send({createdUser, createdBlog, createdProduct, createdCategory, createdSubcategory, createdRating});
});

export default seedRouter;