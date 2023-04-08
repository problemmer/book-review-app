import React from 'react'
import './styles.css'
import book4 from '../../assets/image/jpg/book-4.jpg'
import { FaStar } from 'react-icons/fa';
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Card = (props) => {

    let navigate = useNavigate();

    function handleClickPreview() {
        navigate('/preview')
    }

    return (
        <div>
            <div className='card-wrapper'>
                <div className='dots'>
                    <details class="dropdown">
                    <summary role="button">
                    <BsThreeDotsVertical size={15}/>
                    </summary>
                    <ul>
                    <li className='dropdown-li'><a href="#">Update</a></li>
                    <li className='dropdown-li'><a href="#">Delete</a></li>
                </ul>
                </details>
                </div>
                <div onClick={handleClickPreview}>
                    <img className='book' src={book4} alt="" />
                    <div className='info-book'>
                        <p className='title-book'>{props.title}</p>
                        <div className='horizontal-line'/>
                        <div className='price-rating'>
                            <p className='price-book'>{props.price}</p>
                            <p className='rating-book'>{props.rating} <span><FaStar/></span> </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.defaultProps ={
    title: 'title',
    price: '$2',
    rating: '5'
}

export default Card