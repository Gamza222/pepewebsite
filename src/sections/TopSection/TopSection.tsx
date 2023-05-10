import React from 'react'
import Logo from "../../app/assets/images/pepelogo.svg"
import Tg from "../../app/assets/images/plane.svg"
import Twitter from "../../app/assets/images/twitter.svg"
import Bg from "../../app/assets/images/topbg.png"
import Dick from "../../app/assets/images/dick.svg"
import "./TopSection.scss"

const TopSection = () => {
  return (
    <>
        <header className='top-section__header'>
            <img src={Bg} alt="" className='top-section__header__bg'/>
            <a href="#" className='logo'>
                <img src={Logo} alt="" />
            </a>
            <nav className='top-section__header__nav'>
                <a className='tg btn'>
                    <img src={Tg} alt="telegram" />
                </a>
                <a className='twitter btn'>
                    <img src={Twitter} alt="telegram" />
                </a>
                <a className='text btn'>
                    Buy Now!
                </a>
            </nav>
        </header>
        <section className='top-section__content'>
            <div className='top-section__content__title'>
                <h3 className='top-section__content__title__white'>Emergency Press</h3>
                <h3 className='top-section__content__title__yellow'>Conference Time!</h3>
            </div>
            <p>Alright folks, listen up! I've got some exciting news for all you crypto crazed,<br/> sports betting degenerates out there! There's a new project in town that's<br /> gonna blow your freakin' minds! </p>
            <img src={Dick} alt="" className='top-section__header__dick'/>
        </section>
    </>
  )
}

export default TopSection