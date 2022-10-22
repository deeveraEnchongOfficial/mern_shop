import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SignIn from '../components/SignIn'

const Login = () => {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <main className='main'>
        <SignIn />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default Login