import React from 'react'
import offer1 from '../assets/images/offer1.jpg'
import offer2 from '../assets/images/offer2.jpg'
import offer3 from '../assets/images/offer3.jpg'
import offer4 from '../assets/images/offer4.jpg'

const OffersSection = () => {
  return (
    <section id="offers" className="section offers-section">
      <h2 className="section-title">Special Offers</h2>
      <div className="offers-container">
        <div className="offer-card">
          <img src={offer1} alt="Special Offer 1" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src={offer2} alt="Special Offer 2" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src={offer3} alt="Special Offer 3" className="offer-image" />
        </div>
        <div className="offer-card">
          <img src={offer4} alt="Special Offer 4" className="offer-image" />
        </div>
      </div>
    </section>
  )
}

export default OffersSection