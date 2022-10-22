import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import AllUser from './AllUser';

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    
    // for pagination
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 5;
    const pagesVisited = pageNumber * usersPerPage;

    const pageCount = Math.ceil(users.length / usersPerPage);

    

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }

    useEffect(() => {

        const fetchData = async() => {
            const resultUser = await axios.get('/api/users/all');
            // i want the latest Users to show

            const resultUserData = resultUser.data;

            const sortResultUserData = resultUserData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));

            console.log(sortResultUserData);
            setUsers(sortResultUserData);
        }

        fetchData();

    }, []);

  return (
    <div className='ab-container'>
        <div className="ab-row">
            <h2 className="ab-title">All Users</h2>
        </div>
        <div className="ab-row">
            <div className="ab-col">
                <div className="ab-blogDiv">
                    {
                        users.length === 0 ? (
                            <h3 className='no-data'>There are currently no users!</h3>
                        ) : (
                            <>
                                <div className="ab-blogs">
                                    {
                                        users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => (
                                            <AllUser key={user._id} user={user}/>
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

export default AllUsers