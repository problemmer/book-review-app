import React from 'react'
import './styles.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='about-us'>
            About Us
            <div className='content'>
                <p>Discord</p>
                <p>Problemmer</p>
                <p>Employee</p>
            </div>
            
        </div>
        <div className='help'>
            Help
            <div className='content'>
                <p>Legal Notice</p>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>CGV</p>
            </div>
        </div>
        <div className='payment'>
            Secure Payment
            <div className='content'>
                <p>Platform encrypted</p>
                <p>by Problemmer ORS</p>
                <p>(SAAS)</p>
            </div>
            
        </div>
        <div className='network'>
            Social network
            <div className='content'>
                <p>Instagram</p>
                <p>Discord</p>
                <p>Github</p>
                <p>Figma</p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer