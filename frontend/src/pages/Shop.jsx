import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ShopMainPart from '../components/ShopMainPart'

const Shop = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <ShopMainPart />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Shop