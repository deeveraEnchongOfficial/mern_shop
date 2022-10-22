import React from 'react'
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard';
import Products from './Products';
import Users from './Users';
import Posts from './Posts';
import Login from './Login';

const Home = () => {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <div className='h-container'>
        <div className="h-row">
          <TopBar />
        </div>
        <div className="h-row">
          <div className="h-mcol">
            <SideBar />
          </div>
          <div className="h-mcol">
            
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/products' element={<Products />} />
                <Route path='/users' element={<Users />} />
                <Route path='/posts' element={<Posts />} />
              </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Home