import React from 'react'
import './CustomerReview.css'

function CustomerReview() {
    return (
        <div className="customer-review">
            <h1 className="customer-heading">What They Said</h1>
            <div className="reviews-customer">
                <div className="reviewfirst-container">
                    <img className='customer-img' src={require('./review1.svg').default} alt="" />
                    <h3 className="productname">Essence Long Denim</h3>
                    <img className='rating-img' src={require('./rating.svg').default} alt="" />
                    <h4 className="customername">-Lisa-</h4>
                    <p className="review-para">“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”</p>
                </div>
                <div className="reviewfirst-container">
                    <img className='customer-img' src={require('./review2.svg').default} alt="" />
                    <h3 className="productname">Andcable Knit Top</h3>
                    <img className='rating-img' src={require('./rating.svg').default} alt="" />
                    <h4 className="customername">-Celine-</h4>
                    <p className="review-para">“I like knitted materials. I bought this shirt because the design is very pretty and comfortable to wear casually. The material is also neat and good. I love shopping here and I’ll be a frequent customer at this store.”</p>
                </div>
                <div className="reviewfirst-container">
                    <img className='customer-img' src={require('./review3.svg').default} alt="" />
                    <h3 className="productname">Candy Stripe Boxy</h3>
                    <img className='rating-img' src={require('./rating.svg').default} alt="" />
                    <h4 className="customername">-Tiffany-</h4>
                    <p className="review-para">“This shirt is very pretty and nice. The color is cute too. At first I bought it as a present for my friend but I also wanted it so we ended up going out wearing twin clothes haha.”</p>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview