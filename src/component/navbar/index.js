import React from 'react'
import './styles.css'
import logo from '../../assets/image/svg/book-review-logo.svg'
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  function handleClickHome() {
    navigate('/home')
  }

  function handleClickAbout() {
    navigate('/about')
  }
  
  return (
    <div className='navbar-container'>
        <img className='logo-book-preview' onClick={handleClickHome} src={logo} alt="Logo"/>
        <div className='navbar-content'>
            {/* <div className='content'>Home</div>
            <div className='content'>Books</div>
            <div className='content'>Review</div> */}
            <div className='content' onClick={handleClickAbout}>About</div>
        </div>
        {/* <div className='logo-burger'>
            <FaStream size={20}/>
        </div> */}
        
    </div>
  )
}

export default Navbar