import React from 'react';
import './SpaceType.css'
import CallIcon from '../assets/images/call-icon.svg'
import greaterThanIcon from '../assets/images/greater-than.svg'
import calendarIcon from '../assets/images/calendarr.svg'


function AgreementLength() {
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
                        <div className='steps active-step'>
                            3. AGREEMENT LENGTH
                        </div>
                        <div className='steps'>
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
                        <div className='desc'>
                            Choose a longer contract to take advantage of great offers.
                        </div>

                        <div className='length-outer-card'>
                            <div className='length-card'>
                                <div className='card-headd'>
                                    <img src={calendarIcon} alt='' />   Monthly
                                </div>
                                <div className='price'>
                                    INR 8549
                                </div>
                                <div className='month'>
                                    per month
                                </div>
                            </div>
                            <div className='length-card'>
                                <div className='card-headd'>
                                    <img src={calendarIcon} alt='' />   4 Months
                                </div>
                                <div className='price'>
                                    INR 8349
                                </div>
                                <div className='month'>
                                    per month
                                </div>
                            </div>
                            <div className='length-card'>
                                <div className='card-headd'>
                                    <img src={calendarIcon} alt='' />   8 Months
                                </div>
                                <div className='price'>
                                    INR 7999
                                </div>
                                <div className='month'>
                                    per month
                                </div>
                            </div>
                            <div className='length-card'>
                                <div className='card-headd'>
                                    <img src={calendarIcon} alt='' />   1 Year
                                </div>
                                <div className='price'>
                                    INR 7420
                                </div>
                                <div className='month'>
                                    per month
                                </div>
                            </div>
                        </div>
                        <div className='pick-date-div'>
                            <div className='label-div'>
                                Select your start date
                            </div>
                            <div className='input-date'>
                                <input type='date' />
                            </div>
                        </div>
                        <div className='last-link-div mt-4'>
                            <a>
                                &lt; Back to Plan Type
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
                            Continue <img src={greaterThanIcon} alt='' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgreementLength