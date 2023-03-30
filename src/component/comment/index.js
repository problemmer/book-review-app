import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import CommentCl from '../coment-cl'

function Comment(props) {
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
        </div>
        <div className='button-comment-container'>
          <button className='button-comment'>
              Comment
          </button>
        </div>
        
      </div>
    </div>
  )
}

Comment.propTypes = {}

export default Comment
