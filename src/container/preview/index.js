import React from 'react'
import './styles.css'
import Footer from '../../component/footer'
import AboutAuthor from '../../component/about-author'
import Navbar from '../../component/navbar'
import ReviewBook from '../../component/review-book'
import Comment from '../../component/comment'

function Preview() {
  return (
    <div>
        <Navbar/>
        <AboutAuthor/>
        <ReviewBook/>
        <Comment/>
        <Footer/>
    </div>
  )
}

export default Preview