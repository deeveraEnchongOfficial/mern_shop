import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ShopFilter from './ShopFilter'
import ShopProducts from './ShopProducts'
import Search from './filterPartials/Search'
import Empty from './Empty';

const ShopMainPart = () => {

    const [products, setProducts] = useState([]); //default is empty, no products
    const [category, setCategory] = useState([]); //default is empty, no category
    const [rating, setRating] = useState([]);   //default is empty, no rating
    const [subCategory, setSubCategory] = useState([]);    //default is empty, no subcategory
    const [selectedPrice, setSelectedPrice] = useState([0, 1000]); //range from 0 - 1000

    const [list, setList] = useState(products) //get all products when fetch products

    const [inputSearch, setInputSearch] = useState(''); //for search is empty default
    const [resultsFound, setResultsFound] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState();
    const [selectedRating, setSelectedRating] = useState();


    //value when i click on button -> catItem
    const filterResult = (catItem) => {
        setSelectedCategory(catItem);
    }

    //value when i click on button -> starItem
    const filterResultRatings = (starItem) => {
        setSelectedRating(starItem);
    }

    //value when i click on checkbox -> id
    const handleChangeChecked = (id) => {
        const subcategoryList = subCategory;
        const changeCheckedSubcategory = subcategoryList.map((item) => item._id === id ? { ...item, checked: !item.checked } : item);
        setSubCategory(changeCheckedSubcategory);
    }

    // change value for price
    const handleChangePrice = (value) => {
        setSelectedPrice(value);
    }

    useEffect(() => {
        
        //FIltering Products
        const applyFilters = () => {
            let updateProductList = products;

            //Category Filters
            if (selectedCategory) {
                updateProductList = updateProductList.filter((item) => item.category === selectedCategory);
            }

            // SubCategory Filters
            const subcategoryChecked = subCategory.filter((item) => item.checked).map((item) => item.label);
            //console.log(subcategoryChecked);
            if (subcategoryChecked.length) {
                updateProductList = updateProductList.filter((item) => subcategoryChecked.includes(item.subcategory));
            }

            //Rating Filters
            if (selectedRating) {
                updateProductList = updateProductList.filter((item) => item.star === selectedRating);
            }

            // Price Filter
            const minPrice = selectedPrice[0]; //0 is index
            const maxPrice = selectedPrice[1]; //1 is index

            updateProductList = updateProductList.filter((item) => item.price >= minPrice && item.price <= maxPrice);
    
            // Search Filter
            if (inputSearch) {
              updateProductList = updateProductList.filter((item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1);
            }
      
            setList(updateProductList);
      
            !updateProductList.length ? setResultsFound(false) : setResultsFound(true);
        }
        applyFilters();
    }, [inputSearch, products, selectedCategory, selectedRating, subCategory, selectedPrice]);
  


    useEffect(() => {

        //fetch all products from db
        const fetchData = async() => {
            const resultProducts = await axios.get('/api/products/all');

            const resultProductsData = resultProducts.data;

            //show first latest products
            const sortResultProductsData = resultProductsData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

            console.log(sortResultProductsData);
            setProducts(sortResultProductsData);

            //fetch all category
            const resultCategory = await axios.get('/api/category/all');
            console.log(resultCategory.data);
            setCategory(resultCategory.data);

            //fetch all ratings
            const resultRating= await axios.get('/api/rating/all');
            console.log(resultRating.data);
            setRating(resultRating.data);

            //fetch all subcategory
            const resultSubCategory = await axios.get('/api/subcategory/all');
            console.log(resultSubCategory.data);

            const resultSubCategoryData = resultSubCategory.data;

            setSubCategory(resultSubCategoryData);
        }

        fetchData();

    }, []);

  return (
    <div className='s-container'>
        <div className="s-row">
            <h2 className="s-title">Shop</h2>
        </div>
        <div className="s-row">
            <div className="s-col">
                <h4 className="s-filters">Filters</h4>
                <div className='f-group'>
                    <span className="f-groupTitle">Search</span>
                    <Search value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)} />
                </div>
                <div className="s-filterGroups">
                    <ShopFilter filterResult={filterResult} category={category} filterResultRatings={filterResultRatings} rating={rating} subCategory={subCategory} changeChecked={handleChangeChecked} selectedPrice={selectedPrice} changePrice={handleChangePrice}/>
                </div>
            </div>
            <div className="s-col">
                {resultsFound ? (<ShopProducts list={list} />) : (<Empty />)}
            </div>
        </div>
    </div>
  )
}

export default ShopMainPart