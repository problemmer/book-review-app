import React from 'react'
import './styles.css'
import book2 from '../../assets/image/png/book-2.png'

function LandingPage() {
  return (
    <div className='landing-page-container'>
        <div className='landing-page-content'>
            <div className='text'>
                <div className='title'>Read amazing insights of wonderful books here!</div>
                <div className='info'>The most comprehensive book reviews with thousands of books from various genres that will help you find the best books to read.</div>
                <div className='search'>
                    <input className='input-search' placeholder='Search for book name, author, etc.'/>
                    <button className='button-search'>
                        Search
                    </button>
                </div>
            </div>
            <div className='image'>
                <img className='book-2' src={book2} alt="Book"/>
                <div className='text-book'>
                    <p className='book-2-title'>The Blue Hour</p>
                    <p className='book-2-author'>Vicki Righettini</p>
                </div>
                
            </div>
        </div>
    
    </div>
  )
}

export default LandingPage