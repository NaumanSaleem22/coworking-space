import React from 'react'
import BackArrow from '../assets/images/back-arrow-btn.svg'
import './Location.css'
function LocationStates() {
    return (
        <div className='location-section'>
            <div className='content-div'>
                <div className='back-btn'>
                    <button>
                        <img src={BackArrow} alt='' />Countries
                    </button>
                </div>
                <div className='heading-div'>
                    <span className='colored-text'>India  </span>.
                </div>
            </div>

            <div className='card-outer-div'>
                <div className='card-location state-card'>
                    <div className='content'>
                        Uttar Pradesh
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Maharashtra
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Bihar
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        West Bengal
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Tamil Nadu
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Rajasthan
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Karnataka
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Gujarat
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Odisha
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Telangana
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Kerala
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Jharkhand
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Punjab
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Chhattisgarh
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Haryana
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Uttarakhand
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Madhya Pradesh
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Andhra Pradesh
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Assam
                    </div>
                </div>
                <div className='card-location state-card'>
                    <div className='content'>
                        Himachal Pradesh
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationStates