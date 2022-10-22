import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import AllProduct from './AllProduct';

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    
    // for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 5;
    const pagesVisited = pageNumber * productsPerPage;

    const pageCount = Math.ceil(products.length / productsPerPage);

    

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

    useEffect(() => {

        const fetchData = async() => {
            const resultProduct = await axios.get('/api/products/all');
            // i want the latest products to show

            const resultProductData = resultProduct.data;

            const sortResultProductData = resultProductData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

            console.log(sortResultProductData);
            setProducts(sortResultProductData);
        }

        fetchData();

    }, []);

  return (
    <div className='ab-container'>
        <div className="ab-row">
            <h2 className="ab-title">All Products</h2>
        </div>
        <div className="ab-row">
            <div className="ab-col">
                <div className="ab-blogDiv">
                    {
                        products.length === 0 ? (
                            <h3 className='no-data'>There are currently no products!</h3>
                        ) : (
                            <>
                                <div className="ab-blogs">
                                    {
                                        products.slice(pagesVisited, pagesVisited + productsPerPage).map((product) => (
                                            <AllProduct key={product._id} product={product}/>
                                        ))
                                    }
                                </div>
                                <ReactPaginate className='filter-pagination' 
                                    previousLabel={"Prev"}
                                    nextLabel={"Next"}
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}
                                    pageClassName={"pagi-item"}
                                    pageLinkClassName={"pagi-link"}
                                    activeClassName={"pagi-active"}
                                    activeLinkClassName={"pagi-active-link"}
                                    previousClassName={"pagi-item"}
                                    previousLinkClassName={"pagi-link"}
                                    nextClassName={"pagi-item"}
                                    nextLinkClassName={"pagi-link"}
                                    breakClassName={"pagi-item"}
                                    breakLinkClassName={"pagi-link"}
                                    disabledClassName={"disabledPagi"}
                                />
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts