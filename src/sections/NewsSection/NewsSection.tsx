import React from 'react'
import "./NewsSection.scss"
import pic1 from "../../app/assets/images/pic1.png"

const NewsSection = () => {
  return (
    <>
        <section className='news-section'>
            <div className='news-section__text'>
                <h2>Exciting news</h2>
                <p>Whether you're a die-hard football fan or a basketball fanatic, we’ve got you covered with some of the most accurate and entertaining predictions and analysis out there! And the best part? By buying $ELPEPE you get free access to this group, you'll get exclusive access to our top picks and insights, giving you a serious edge over the competition!</p>
                <a className='btn'>Buy now!</a>
            </div>
            <img src={pic1} alt="" />
        </section>
    </>
  )
}

export default NewsSection