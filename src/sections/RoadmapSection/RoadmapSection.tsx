import React from 'react'
import "./RoadmapSection.scss"
import check from "../../app/assets/images/check.svg"

const RoadmapSection = () => {
  return (
    <section className='roadmap'>
        <h2 className='titles'>Roadmap</h2>
        <p className='texts'>Our roadmap is subject to change based on a variety of influential factors, <br />be sure to check our Telegram and Twitter regularly to stay up to date.</p>
        <div className='roadmap__items'>
            <div className='roadmap__items__item'>
                <h4 className='titles'>Phase 1</h4>
                <p><img src={check} alt="" /><span>Initial product strategy meeting</span></p>
                <p><img src={check} alt="" /><span>Website deployment</span></p>
                <p><img src={check} alt="" /><span>Social media & community setups</span></p>
                <p><img src={check} alt="" /><span>Phase 1 marketing package pre-order</span></p>
                <p><img src={check} alt="" /><span>Deployment of our $PEPEDENTE contract</span></p>
            </div>
            <div className='roadmap__items__item'>
                <h4 className='titles'>Phase 2</h4>
                <p><img src={check} alt="" /><span>Initial product strategy meeting</span></p>
                <p><img src={check} alt="" /><span>Website deployment</span></p>
                <p><img src={check} alt="" /><span>Social media & community setups</span></p>
                <p><img src={check} alt="" /><span>Phase 1 marketing package pre-order</span></p>
                <p><img src={check} alt="" /><span>Deployment of our $ChadGame contract</span></p>
            </div>
            <div className='roadmap__items__item'>
                <h4 className='titles'>Phase 3</h4>
                <p><img src={check} alt="" /><span>Initial product strategy meeting</span></p>
                <p><img src={check} alt="" /><span>Website deployment</span></p>
                <p><img src={check} alt="" /><span>Social media & community setups</span></p>
                <p><img src={check} alt="" /><span>Phase 1 marketing package pre-order</span></p>
                <p><img src={check} alt="" /><span>Deployment of our $PEPEDENTE contract</span></p>
            </div>
        </div>
    </section>
  )
}

export default RoadmapSection