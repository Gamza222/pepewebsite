import React from 'react'
import "./BuySections.scss"
import pizza from "../../app/assets/images/pizza.svg"
import fox from "../../app/assets/images/fox.svg"
import tg from "../../app/assets/images/telegr.svg"
import pony from "../../app/assets/images/pony.svg"
import efir from "../../app/assets/images/efir.svg"
import logo from "../../app/assets/images/pepelogo.svg"
import viva from "../../app/assets/images/viva.svg"

const BuySections = () => {
  return (
    <section className='buy'>
        <img src={pizza} alt="pizza" />
        <h2 className='titles'>How to buy</h2>
        <p className='texts'>Whether you're a die-hard football fan or a basketball fanatic, we’ve got you <br/> covered with some of the most accurate and entertaining predictions and <br/>analysis out there! And the best part?</p>
        <div className='buy__items'>
            <div className='buy__items__item'>
                <img src={fox} alt="fox" />
                <h5 className='titles'>Step1</h5>
                <p className='texts'>Head over to the Uniswap Exchange and swap your ETH for $CHADGAME.</p>
            </div>
            <div className='buy__items__item'>
                <img src={efir} alt="ethereum" />
                <h5 className='titles'>Step2</h5>
                <p className='texts'>Head over to the Uniswap Exchange and swap your ETH for $CHADGAME.</p>
            </div>
            <div className='buy__items__item'>
                <img src={pony} alt="pony" />
                <h5 className='titles'>Step3</h5>
                <p className='texts'>Head over to the Uniswap Exchange and swap your ETH for $CHADGAME.</p>
            </div>
            <div className='buy__items__item'>
                <img src={tg} alt="telegram" />
                <h5 className='titles'>Step4</h5>
                <p className='texts'>Head over to the Uniswap Exchange and swap your ETH for $CHADGAME.</p>
            </div>
        </div>
        <div className='buy__btns'>
            <a href="" className='btn'>Buy now!</a>
            <a href="" className='btn'>Join Telegram</a>
        </div>
        <div className='buy__buttom'>
            <img src={logo} alt="pepe" />
            <img src={viva} alt="viva la pepe" />
        </div>
    </section>
  )
}

export default BuySections