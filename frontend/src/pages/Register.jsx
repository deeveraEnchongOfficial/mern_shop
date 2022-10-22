import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SignUp from '../components/SignUp'

const Register = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <SignUp />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Register