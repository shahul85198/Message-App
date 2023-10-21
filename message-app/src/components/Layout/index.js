import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Login from '../Auth/Login'

function index({Children}) {
  return (
    <main>
        <Header />
        <Login />
        <section>
            {Children}
        </section>
        <Footer />
    </main>
  )
}

export default index