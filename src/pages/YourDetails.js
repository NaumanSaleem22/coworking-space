import React from 'react';
import './SpaceType.css'
import CallIcon from '../assets/images/call-icon.svg'
import greaterThanIcon from '../assets/images/greater-than.svg'
import calendarIcon from '../assets/images/calendarr.svg'



function YourDetails() {
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
                        <div className='steps active-step'>
                            4. YOUR DETAILS
                        </div>
                        <div className='steps'>
                            5. PAYMENT
                        </div>
                    </div>
                    <div className='desc'>
                        Choose a Plan type and register for an membership to enjoy benefits!
                    </div>
                    <div className='agreement-outer'>
                        <div className='heading-div'>
                            Open Desk | Premium | 4 Months
                        </div>
                        <div className='input-outer-div'>
                            <div className='input-div'>
                                <input type="text" placeholder='Full Name*' />
                            </div>
                            <div className='input-div'>
                                <input type="email" placeholder='Email Address*' />
                            </div>
                            <div className='input-div'>
                                <input type="text" placeholder='Phone Number*' />
                            </div>
                            <div className='input-div'>
                                <input type="text" placeholder='Location' />
                            </div>
                            <div className='input-div'>
                                <input type="text" placeholder='Company Name*' />
                            </div>
                        </div>

                        <div className='last-link-div mt-4'>
                            <a>
                                &lt; Back to Agreement Length
                            </a>

                        </div>
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
                    <div className='btn-div'>
                        <button>
                            Proceed to pay <img src={greaterThanIcon} alt='' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourDetails