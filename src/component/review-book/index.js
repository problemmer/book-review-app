import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const PreviewBook = props => {
  const [showMore, setShowMore] = useState(false)
  const text = "The Monk Who Sold His Ferrari is a self-help book written by Robin Sharma, first published in 1997. The book tells the story of Julian Mantle, a high-powered lawyer who suffers a heart attack and decides to leave his fast-paced life behind in search of enlightenment. Julian's journey takes him to India, where he meets a group of monks who teach him the secrets of a fulfilled life. The book is divided into two parts. The first part follows Julian's journey from his hectic life as a lawyer to his decision to leave it all behind and find peace. The second part consists of the teachings of the monks and the principles of life that Julian learns during his time in India. One of the main themes of the book is the importance of living in the present moment. Julian learns that life is not about accumulating wealth and material possessions, but about enjoying the present moment and living a life of purpose. He also learns the importance of mindfulness and meditation, which allow him to achieve inner peace and clarity. Another theme of the book is the importance of personal growth and development. Julian realizes that true happiness and fulfillment come from within, and that it is important to constantly work on oneself to achieve one's goals and dreams. He learns the power of visualization and positive thinking, which he uses to overcome obstacles and achieve his goals. The Monk Who Sold His Ferrari is an inspiring book that encourages readers to take control of their lives and create the life they want. The book is filled with practical advice and actionable steps that readers can take to achieve their goals and live a life of purpose. The writing style is easy to read and the story is engaging, making it a great choice for anyone looking to improve their life. One of the strengths of the book is the way it combines Eastern and Western philosophies. The teachings of the monks are based on ancient Eastern wisdom, but the book is written in a way that is accessible and relevant to a Western audience. This makes it a unique and valuable resource for anyone interested in self-improvement and personal growth. In conclusion, The Monk Who Sold His Ferrari is a must-read for anyone looking to improve their life and find inner peace. The book is filled with timeless wisdom and practical advice that readers can use to achieve their goals and live a more fulfilling life. Whether you are looking to overcome obstacles, achieve your dreams, or simply find more happiness and contentment in your life, this book is a great place to start."
  const btnMore = "Read More..."
  const btnLess = "Read Less..."

  return (
    <div className='review-book-container'>
        Review
        <div className='detail-book'>
        {showMore? text : text.substring(0, 1500)}
        <button className='btn-more' onClick={() => setShowMore(!showMore)}>{showMore? btnLess : btnMore}</button>
        </div>
    </div>
  )
}

PreviewBook.propTypes = {}

export default PreviewBook