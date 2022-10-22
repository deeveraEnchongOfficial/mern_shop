import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductDetails from '../components/ProductDetails'

const Product = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <ProductDetails />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Product