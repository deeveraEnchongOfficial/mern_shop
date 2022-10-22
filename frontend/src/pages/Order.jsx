import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MyOrder from '../components/MyOrder'

const Order = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <MyOrder/>
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Order