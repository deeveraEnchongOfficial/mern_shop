import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MyAccount from '../components/MyAccount'

const Account = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <MyAccount />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Account