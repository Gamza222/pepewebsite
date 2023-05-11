import React from 'react'
import "./TokenomicsSection.scss"
import bg from "../../app/assets/images/bg-white.png"
import tokenom from "../../app/assets/images/tokenomics.png"
import pepe from "../../app/assets/images/selper.png"
import pepeLogo from "../../app/assets/images/pepelogo.svg"

const TokenomicsSection = () => {
  return (
    <section className='tokenomics'>
        <img src={pepeLogo} alt="logo" className='tokenomics__logo'/>
        <div className='tokenomics__content'>
            <h3 className='titles'>Tokenomics</h3>
            <p className='texts'>Whether you're a die-hard football fan or a basketball fanatic, we’ve got you covered with some of the most accurate and entertaining predictions and analysis out there! And the best part?</p>
            <div className='tokenom'>
                <a href="" className='tokenom-button btn'>Buy Now!</a>
                <img src={tokenom} alt="tokenomics" />
                <p className='texts tokenom__text'>A generous taxation system allows for the sustenance <br /> and security of the Token.</p>
                <div className='tokenom__items'>
                    <div className='tokenom__item'>
                        <h5 className='texts'>Initial Supply</h5>
                        <h5 className='texts'>Token Distribution</h5>
                        <h5 className='texts'>Token Launching</h5>
                    </div>
                    <div className='tokenom__item'>
                        <p className='texts'>1,000,000,000,000,000,000 <br />(18 zeros)</p>
                        <p className='texts'>Liquidity: 99% <br />Dev / Marketing: 1%</p>
                        <p className='texts'>Fairlaunched</p>
                    </div>
                    <div className="tokenom__item3">
                        <div className='tokenom__item2'>
                            <h5 className='texts'>Initial Supply</h5>
                            <p className='texts'>1,000,000,000,000,000,000 <br />(18 zeros)</p>
                        </div>
                        <div className='tokenom__item2'>
                            <h5 className='texts'>Token Distribution</h5>
                            <p className='texts'>Liquidity: 99% <br />Dev / Marketing: 1%</p>
                        </div>
                        <div className='tokenom__item2'>
                            <h5 className='texts'>Token Launching</h5>
                            <p className='texts'>Fairlaunched</p>
                        </div>
                    </div>
                </div>
                <p className='texts tokenom__text'><span>Total Tax: </span> 9% for Buys & Sells</p>
                <p className='texts tokenom__text'><span>Slippage: </span> 11%</p>
            </div>
        </div>
        <img src={pepe} alt="pepe" />
    </section>
  )
}

export default TokenomicsSection