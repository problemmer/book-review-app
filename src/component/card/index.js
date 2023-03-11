import React from 'react'
import './styles.css'
import book4 from '../../assets/image/jpg/book-4.jpg'
import { FaStar } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";


const Card = (props) => {
  return (
    <div>
        <div className='card-wrapper'>
            <div className='dots'>
                <BsThreeDotsVertical size={15}/>
            </div>
            <img className='book' src={book4} alt="" />
            <div className='info-book'>
                <p className='title-book'>{props.title}</p>
                <div className='horizontal-line'/>
                <div className='price-rating-book'>
                    <p className='price-book'>{props.price}</p>
                    <p className='rating-book'>{props.rating} <FaStar/> </p>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

Card.defaultProps ={
    title: 'title',
    price: '2$',
    rating: '5'
}

export default Card