import React from 'react'
import BlogDetails from './BlogDetails'
import Footer from './Footer'
import Header from './Header'

const BlogItem = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <BlogDetails />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default BlogItem