import React from 'react'
import BlogLists from '../components/BlogLists'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Blog = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <BlogLists />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Blog