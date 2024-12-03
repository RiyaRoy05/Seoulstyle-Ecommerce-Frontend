import React from 'react'
import './Offer.css'

function Offer() {
  return (
    <div className="customer-offer">
        <div className="offer-imgs">
            <img className='off-img' src={require('./image 3.svg').default} alt="" />
            <img className='off-img' src={require('./image 4.svg').default} alt="" />
            <div className="offer-content">
                <h1 className="offer-heading">Get 50% Off</h1>
                <p className="offer-para">for all new product purchases
                min. purchase Rp. 350.000</p>
                <a href="/customerallproducts"><button className='offer-btn'>SHOP NOW</button></a>
            </div>
            <img className='off-img2' src={require('./image 5.svg').default} alt="" />
        </div>
    </div>
  )
}

export default Offer