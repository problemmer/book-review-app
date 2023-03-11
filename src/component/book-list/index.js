import React from 'react'
import Card from '../card'
import './styles.css'
import { FaPlusCircle } from 'react-icons/fa';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function BookList() {
  return (
    <div className='booklist-container'>
        Best books to read
        <div className="add-book">
          Add Book
          <FaPlusCircle className='icon-plus'/>
        </div>
        <div className='card-list'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className="pagination_rounded">
          <ul>
              <li>
                  <a href="#" className="prev">
                    <BsArrowLeft/>
                    {/* <i className="fa fa-angle-left" aria-hidden="true"></i>  */}
                  </a>
              </li>
              <li><a href="#">1</a></li>
              <li className="hidden-xs"><a href="#">2</a></li>
              <li className="hidden-xs"><a href="#">3</a></li>
              <li className="hidden-xs"><a href="#">4</a></li>
              <li className="hidden-xs"><a href="#">5</a></li>
              <li className="visible-xs"><a href="#">...</a></li>
              <li><a href="#">6</a></li>
              <li>
                <a href="#" className="next"> 
                <BsArrowRight/>
                {/* <i className="fa fa-angle-right" aria-hidden="true"></i> */}
                </a>
              </li>
          </ul>
        </div>

    </div>
  )
}

export default BookList