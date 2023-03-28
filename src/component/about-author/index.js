import React from 'react'
import './styles.css'
import { FaStar } from 'react-icons/fa';
import book3 from '../../assets/image/jpg/book-3.jpg'

const AboutAuthor = (props) =>  {
  return (
    <div className='about-author-page-container'>
        <div className='about-author-page-content'>
            <div className='text'>
                <div className='title'>About the Author</div>
                <div className='info'>Robin Sharma is a Canadian writer, best known for his The Monk Who Sold His Ferrari book series. Sharma worked as a litigation lawyer until age 25, when he self-published MegaLiving, a book on stress management and spirituality.</div>
                <div className='price-rating-book'>
                    <p className='price-book'>{props.price}</p>
                    <p className='rating-book'>{props.rating} <FaStar/> </p>
                </div>
            </div>
            <div className='image'>
                <img className='book-author' src={book3} alt="Book"/>
                <div className='text-book'>
                    <p className='book-author-title'>The Blue Hour</p>
                    <p className='book-author-author'>Vicki Righettini</p>
                </div>
                
            </div>
        </div>
    
    </div>
  )
}

AboutAuthor.defaultProps ={
    title: 'title',
    price: '2$',
    rating: '5'
}

export default AboutAuthor