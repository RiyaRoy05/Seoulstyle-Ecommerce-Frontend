import React from 'react'
import CustomerHeader from './CustomerHeader'
import CustomerHomeContent from './CustomerHomeContent'
import SeasonCollections from './SeasonCollections'
import CustomerBestSellers from './CustomerBestSellers'
import Offer from './Offer'
import CustomerReview from './CustomerReview'
import CustomerFooter from './CustomerFooter'

function Customer() {
  return (
    <div>
        <CustomerHeader/>
        <CustomerHomeContent/>
        <SeasonCollections/>
        <CustomerBestSellers/>
        <Offer/>
        <CustomerReview/>
        <CustomerFooter/>
    </div>
  )
}

export default Customer