import React from 'react'
import './BookNow.css'
import callIcon from '../assets/images/call-icon.svg'
import ratingIcon from '../assets/images/5-star-4-filled.svg'

function BookNowCheckoutDone() {
    return (
        <div className='booknow-section'>
            <div className='first-row'>
                <div className='heading-div'>
                    Book Online <span className='colored-text'>.</span>
                </div>
                <div className='parallel-desc'>
                    <div className='desc'>
                        Book now to join our community of innovators and creators in a dynamic workspace designed to inspire productivity and collaboration.
                    </div>
                    <div className='need-help-booking'>
                        <div className='text'>
                            Need help booking?
                        </div>
                        <div className='call-us'>
                            <img src={callIcon} alt='' /> Call Us: 0123456789
                        </div>
                    </div>
                </div>

                <div className='steps-outer'>
                    <div className='steps'>
                        1. START BOOKING
                    </div>
                    <div className='steps'>
                        2. CHOOSE A SPACE
                    </div>
                    <div className='steps active-step'>
                        3. CHECKOUT
                    </div>
                </div>

                <div className='select-form-div'>
                    <div className='thanks-msg-div'>
                        <div className='large-text'>
                            Thank you for booking your coworking space with Suits!
                        </div>
                        <div className='small-text'>
                            You can leave a feedback here to let us know about your booking experience
                        </div>
                        <div className='rating-div'>
                            <img src={ratingIcon} alt='' />
                        </div>
                        <div className='inputfeedback-div'>
                            <input type='text' placeholder='Start writing here...' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookNowCheckoutDone