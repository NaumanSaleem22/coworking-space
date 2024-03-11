import React from 'react'
import BackArrow from '../assets/images/back-arrow-btn.svg'
function LocationStateSpecific() {
    return (
        <div className='location-section'>
            <div className='content-div'>
                <div className='back-btn'>
                    <button>
                        <img src={BackArrow} alt='' />Countries
                    </button>
                </div>
                <div className='heading-div'>
                    <span className='colored-text'>Gujarat  </span>.
                </div>
                <div className='text'>
                    Find the Hub Located nearest to the location that suits you!
                </div>
            </div>

            <div className='card-outer-div'>
                <div className='card-location state-specific-card'>
                    <div className='content-div'>
                        <div className='heading'>Mansarover</div>
                        <div className='textt'>
                            Located Centrally within Mansarovar Colony, JaipurAt 34/06, Kiran Path
                        </div>
                        <div className='btn-div'>
                            <button>
                                Know more
                            </button>
                        </div>
                    </div>
                </div>
                <div className='card-location state-specific-card'>
                    <div className='content-div'>
                        <div className='heading'>C-Scheme</div>
                        <div className='textt'>
                            Located at the Central Business District of JaipurAt 14, Yudishthir Marg
                        </div>
                        <div className='btn-div'>
                            <button>
                                Know more
                            </button>
                        </div>
                    </div>
                </div>
                <div className='card-location state-specific-card'>
                    <div className='content-div'>
                        <div className='heading'>Vaishali Nagar</div>
                        <div className='textt'>
                            Located at the Main Business Street of Amrapali MargAt D-235, Vaishali Nagar
                        </div>
                        <div className='btn-div'>
                            <button>
                                Know more
                            </button>
                        </div>
                    </div>
                </div>
                <div className='card-location state-specific-card'>
                    <div className='content-div'>
                        <div className='heading'>Gandhi Path</div>
                        <div className='textt'>
                            Premium Hub Located at the Heart of Vaishali NagarAt 80, Gandhi Path
                        </div>
                        <div className='btn-div'>
                            <button>
                                Know more
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LocationStateSpecific