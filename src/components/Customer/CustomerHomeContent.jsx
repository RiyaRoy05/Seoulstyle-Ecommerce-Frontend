import React from 'react'
import './CustomerHomeContent.css'

function CustomerHomeContent() {
    return (
        <div className="cu-homecontent">
            <div className="cudes">
                <img className='model1' src={require('./image 21.svg').default} alt="" />
                <img className='model2' src={require('./image 7.svg').default} alt="" />
                <div className="cu-homehead">
                    <h2>SeoulStyle</h2>
                    <h3>서울스타일</h3>
                    <div className='line'></div>
                    <p>make your everyday look prettier
                        with SeoulStyle Korean Made</p>
                </div>
                <img className='model3' src={require('./image 20.svg').default} alt="" />
                <img className='model4' src={require('./image 10.svg').default} alt="" />
            </div>
        </div>
    )
}

export default CustomerHomeContent