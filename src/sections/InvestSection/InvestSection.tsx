import React from 'react'
import "./InvestSection.scss"
import bg from "../../app/assets/images/bg2.png"
import pepe from "../../app/assets/images/fucks.svg"
import mic from "../../app/assets/images/mic.svg"

const InvestSection = () => {
  return (
    <section className='invest-section'>
        <div className='invest-section__top'>
            <img src={pepe} alt="pepe" />
            <div className='invest-section__top__text'>
                <h3 className='titles'>What should you invest in <span>El Pepedente?</span></h3>
                <p className='texts'>Whether you're a die-hard football fan or a basketball fanatic, we’ve got you covered with some of the most accurate and entertaining predictions and analysis out there! And the best part? By buying $ELPEPE you get free access to this group, you'll get exclusive access to our top picks and insights, giving you a serious edge over the competition!</p>
                <a className="btn" href="">Buy now!</a>
            </div>
        </div>
        <div className='invest-section__mid'>
            <h3>One Buy Everbody <br /> Knows <span>The Rules</span></h3>
            <div className='mics'>
                <div className="mics__mic">
                    <img src={mic} alt="" />
                    <h4 className='titles'>El Pepedente’s SportsBook (USA)</h4>
                    <p className='texts'>Whether you're a die-hard football fan or a basketball fanatic, we’ve got you covered with some of the most accurate and entertaining predictions and analysis out there! And the best part? By buying $ELPEPE you get free access to this group, you'll get exclusive access to our top picks and insights, giving you a serious edge over the competition!</p>
                    <h5>So if you wanna stay ahead of the game and crush your bets, then you need to buy $ELPEPE!</h5>
                </div>
                <div className="mics__mic">
                    <img src={mic} alt="" />
                    <h4 className='titles'>El Pepedente’s SportsBook (USA)</h4>
                    <p className='texts'>Whether you're a die-hard football fan or a basketball fanatic, we’ve got you covered with some of the most accurate and entertaining predictions and analysis out there! And the best part? By buying $ELPEPE you get free access to this group, you'll get exclusive access to our top picks and insights, giving you a serious edge over the competition!</p>
                    <h5>So if you wanna stay ahead of the game and crush your bets, then you need to buy $ELPEPE!</h5>
                </div>
            </div>
            <a className='btn' href="">Buy now!</a>
        </div>
    </section>
  )
}

export default InvestSection