import React from 'react'
import BookList from '../../component/book-list'
import Footer from '../../component/footer'
import LandingPage from '../../component/landing-page'
import Navbar from '../../component/navbar'
import './styles.css'

function About() {
  return (
    <div>
        <Navbar/>
        <div className='about-content'>
          <div className='about-title'>About Us</div>

          <div className='about-subtitle'>A global book review app in the culture</div>
          After generating your fancy text symbols, you can copy and paste the "fonts" to most websites and text processors. You could use it to generate a fancy Agario name (yep, weird text in agario is probably generated using a fancy text converter similar to this), to generate a creative-looking instagram, facebook, tumblr, or twitter post, for showing up n00bs on Steam, or just for sending messages full of beautiful text to your buddies.
          The only exception is if your paste destination has a font which doesn't support some unicode characters. For example, you'll might find that some websites don't use a unicode font, or if they do, the font doesn't have all the characters required. In that case, you'll see a generic "box" in which was created when the browser tries to create a fancy letter. This doesn't mean there's an error with this translator, it just means the website's font doesn't support that character.

          <div className='about-subtitle'>We’re different than the rest</div>
          If there's anything that I can do to improve this online fancy generator thing (e.g. by adding other font styles that you've found), then please let me know in the suggestions box! If you've some found new beautiful fonts that can be copy-pasted and that aren't in this generator, please share them below as well. Thanks!

        </div>
        <Footer/>
    </div>
  )
}

export default About