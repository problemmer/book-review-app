import React from 'react'
import BookList from '../../component/book-list'
import Footer from '../../component/footer'
import LandingPage from '../../component/landing-page'
import Navbar from '../../component/navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <LandingPage/>
        <BookList/>
        <Footer/>
    </div>
  )
}

export default Home