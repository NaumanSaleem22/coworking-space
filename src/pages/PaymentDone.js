import React from 'react';
import './SpaceType.css'
import CallIcon from '../assets/images/call-icon.svg'
import greaterThanIcon from '../assets/images/greater-than.svg'
import doneIcon from '../assets/images/done-icon.svg'
function PaymentDone() {
    return (
        <div className='space-section'>
            <div className='content-div'>
                <div>
                    <div className='heading-div'>
                        Buy Membership<span>.</span>
                    </div>
                    <div className='desc-div'>
                        Discover your ideal workspace tailored to your needs.
                        Select from diverse space types, plans,
                        and flexible options for a seamless start
                        to your productive journey.
                    </div>
                </div>
                <div className='phone-div'>
                    <img src={CallIcon} alt='' /> Call Us:0123344567
                </div>
            </div>

            <div className='outer-div'>
                <div className='left-div'>
                    <div className='steps-outer-space'>
                        <div className='steps'>
                            1. SPACE TYPE
                        </div>
                        <div className='steps'>
                            2. PLAN TYPE
                        </div>
                        <div className='steps'>
                            3. AGREEMENT LENGTH
                        </div>
                        <div className='steps'>
                            4. YOUR DETAILS
                        </div>
                        <div className='steps active-step'>
                            5. PAYMENT
                        </div>
                    </div>

                    <div className='successful-payment'>
                        <span className='colored-text'>Your Membership has been booked successfully.</span>
                        <br /><br />
                        Please enjoy your premium benefits!
                    </div>


                </div>
                <div className='right-div'>
                    <div className='heading-div'>
                        Membership Details
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            SPACE TYPE
                        </div>
                        <div className='text-div'>
                            Open Desk
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            PLAN TYPE
                        </div>
                        <div className='text-div'>
                            Premium
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            AGREEMENT LENGTH
                        </div>
                        <div className='text-div'>
                            4 Months
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            START DATE
                        </div>
                        <div className='text-div'>
                            Jan 03, 2023
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            END DATE
                        </div>
                        <div className='text-div'>
                            May 03, 2023
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            MONTHLY COST
                        </div>
                        <div className='text-div'>
                            INR 8549 per month
                        </div>
                    </div>
                    <div className='btn-div done-btn-div'>

                        <img src={doneIcon} alt='' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDone