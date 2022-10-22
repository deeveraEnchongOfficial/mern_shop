import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogListItem from './BlogListItem'
import ReactPaginate from 'react-paginate';

const BlogLists = () => {

    const [blogs, setBlogs] = useState([]);
    
    // for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const blogsPerPage = 6;
    const pagesVisited = pageNumber * blogsPerPage;

    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

    useEffect(() => {

        const fetchData = async() => {
            const resultBlog = await axios.get('/api/blogs/all');
            // i want the latest blogs to show

            const resultBlogData = resultBlog.data;

            const sortResultBlogData = resultBlogData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

            console.log(sortResultBlogData);
            setBlogs(sortResultBlogData);
        }

        fetchData();

    }, []);

  return (
    <div id='blog' className='hb-container'>
        <div className="hb-row">
            <h2 className="f-title">Our Blog</h2>
        </div>
        <div className="hb-row">
            <div className="hb-col">
                <div className="hb-blogDiv">
                    {
                        blogs.length === 0 ? (
                            <h3 className='no-data'>There are currently no blogs!</h3>
                        ) : (
                            <>
                                <div className="hb-blogs">
                                    {
                                        blogs.slice(pagesVisited, pagesVisited + blogsPerPage).map((blog) => (
                                            <BlogListItem key={blog._id} blog={blog} />
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

export default BlogLists