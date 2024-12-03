import React from 'react'
import './SeasonCollections.css'

function SeasonCollections() {
    return (
        <div>
            <h2 className='season-head'>Season Collections</h2>
            <div className="seasonimgs">
                <div className="first">
                    <img className='season-imgs' src={require('./Frame 4.svg').default} alt="" />
                    <h2 className='season-heading-img'>SPRING</h2>
                </div>
                <div className="second">
                    <img className='season-imgs' src={require('./Frame 5.svg').default} alt="" />
                    <h2 className='season-heading-img'>SUMMER</h2>
                </div>
                <div className="third">
                    <img className='season-imgs' src={require('./Frame 6.svg').default} alt="" />
                    <h2 className='season-heading-img'>WINTER</h2>
                </div>
            </div>
        </div>
    )
}

export default SeasonCollections