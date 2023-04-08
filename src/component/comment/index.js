import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import CommentCl from '../coment-cl'
import ava from "../../assets/image/png/ava.png";
import { BsThreeDotsVertical } from "react-icons/bs";

function NewComment(props) {
  return (
    <div>
      <div className="line" />
      <div className="ava-comment">
        <div className="avatar">
          <img className="ava" src={ava} alt="avatar" />
        </div>
        <div className="name-comment">
          <p className="name">olaf</p>
          <textarea placeholder='Comment here...' name="postContent" className='input'/>
        </div>
        <div className="submit-btn">
          <button type='submit' className='inputBtn'>Submit</button>
        </div>
      </div>
    </div>
  );
}

function Comment(props) {
  const [showInput, setShowInput] = useState(false)

  return (
    <div className='comments-container'>
      <div className='comments-content'>
        <p className='comment-title'>Comments</p>
        <p className='comment-total'>6 komentar</p>
        <div className='comments'> 
          <CommentCl/>
          <CommentCl/>
          <CommentCl/>
          <CommentCl/>
          <CommentCl/>
          <CommentCl/>
          {showInput? NewComment() : ""}
        </div>
        <div className='button-comment-container'>
          <button className='button-comment' onClick={()=> setShowInput(!showInput)}>
              {showInput? "Cancel" : "Comment"}
          </button>
        </div>
        
      </div>
    </div>
  )
}

Comment.propTypes = {}

export default Comment
