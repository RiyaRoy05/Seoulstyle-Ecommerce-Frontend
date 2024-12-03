import React from 'react'
import './CustomerFooter.css'

function CustomerFooter() {
    return (
        <div className="allfooter">
        <div className="customerfooter">
            <div className="mainfooterconstainer">
                <div className="firtfootercontainer">
                    <h1 className="customerfooter-heading">Get more benefits
                        by Sign Up & Join
                        SeoulStyle Community!</h1>
                </div>
                <div className="footerline"></div>
                <div className="secondfootercontainer">
                    <div className="footerinputs">
                    <input type="text" placeholder='                                      Full Name' />
                    <input type="text" placeholder='                                      Email Address' />
                    <input type="text" placeholder='                                      Password' />
                    </div>
                    <div class="checkbox-container">
                        <input type="checkbox" id="customCheckbox" class="checkbox-input" />
                        <label for="customCheckbox" class="checkbox-label">I agree to all the Terms and Privacy Policy</label>
                    </div>
                    <button className='footerbtn'>SIGN UP</button>
                    <div className="footerlinersection">
                        <div className="sam">
                        <div className="firstline"></div>
                        <h5>or</h5>
                        <div className="secondtline"></div>
                        </div>
                        </div>
                        <div className="logos">
                        <button className='g-btn'><img className='google' src={require('./google.svg').default} alt="" />SIGN UP WITH GOOGLE</button>
                        <button className='fb-btn'><img className='fb' src={require('./fb.svg').default} alt="" />SIGN UP WITH FACEBBOK</button>
                        </div>
                </div>
            </div>
            </div>
            <div className="lastfooter">
                <p className="lastfcontent">&copy; 2024 SeoulStyle. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default CustomerFooter