import React from 'react'
import './styles.css'
import logo from '../../assets/image/png/logo-olaf.png'
import { FaStream } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='navbar-container'>
        <img className='logo-book-preview' src={logo} alt="Logo"/>
        <div className='navbar-content'>
            <div className='content'>Home</div>
            <div className='content'>Books</div>
            <div className='content'>Review</div>
            <div className='content'>About</div>
        </div>
        <div className='logo-burger'>
            <FaStream size={20}/>
        </div>
        
    </div>
  )
}

export default Navbar