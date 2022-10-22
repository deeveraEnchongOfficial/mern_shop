import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import WishList from '../components/WishList'

const Wish = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <WishList />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Wish