import React from 'react'
import './BookNow.css'
import callIcon from '../assets/images/call-icon.svg'
import greaterThanIcon from '../assets/images/greater-than.svg'
function BookNowCheckout() {
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
                    <div className='text'>
                        Add extra services if needed and complete the booking process to reserve you space now!
                    </div>

                </div>



            </div>
            <div className='additional-service-outer-div'>
                <div className='outer-div'>
                    <div className='booking-details-div'>
                        <div className='heading-div'>
                            Booking Details
                        </div>
                        <div className='list-outermost-div'>
                            <div className='list-div'>
                                <div className='label-div'>
                                    Space type
                                </div>
                                <div className='text-div'>
                                    Private Cabins
                                </div>
                            </div>
                            <div className='list-div'>
                                <div className='label-div'>
                                    Booking in
                                </div>
                                <div className='text-div'>
                                    3ASpace Suite
                                </div>
                            </div>
                            <div className='list-div'>
                                <div className='label-div'>
                                    Date
                                </div>
                                <div className='text-div'>
                                    03-01-2024 to 03-02-2024
                                </div>
                            </div>
                            <div className='list-div'>
                                <div className='label-div'>
                                    Time
                                </div>
                                <div className='text-div'>
                                    From 8.00 AM to 10.00 PM
                                </div>
                            </div>
                            <div className='list-div'>
                                <div className='label-div'>
                                    Number of people
                                </div>
                                <div className='text-div'>
                                    10
                                </div>
                            </div>
                            <div className='list-div'>
                                <div className='label-div'>
                                    Location
                                </div>
                                <div className='text-div'>
                                    405, Tagore Rd, Kamla Market, Ajmeri Gate, New Delhi, Delhi, 110002
                                </div>
                            </div>

                        </div>
                        <div className='list-div last-list-div'>
                            <div className='label-div'>
                                monthly cost (with GST = ₹1952)
                            </div>
                            <div className='orange-text-div'>
                                INR 36,952
                            </div>
                        </div>
                    </div>
                    <div className='additional-services-div'>
                        <div className='heading-div'>
                            Additional Servicess
                        </div>
                        <div className='list-outermost-div'>
                            <div className='list-outer-div'>
                                <div className='checkbox-outer-div'>
                                    <div className='checkbox-div'>
                                        <input type='checkbox' />
                                    </div>
                                    <div className='text-outer'>
                                        <div className='large-text'>Unlimited Coffee</div>
                                        <div className='normal-text'>INR 50 per person</div>
                                    </div>
                                </div>
                                <div className='people-outer'>
                                    <div className='text'>No of people</div>
                                    <div className='number'>
                                        <input type='text' value='5' />
                                    </div>
                                </div>
                            </div>
                            <div className='list-outer-div'>
                                <div className='checkbox-outer-div'>
                                    <div className='checkbox-div'>
                                        <input type='checkbox' />
                                    </div>
                                    <div className='text-outer'>
                                        <div className='large-text'>Unlimited Coffee</div>
                                        <div className='normal-text'>INR 50 per person</div>
                                    </div>
                                </div>
                                <div className='people-outer'>
                                    <div className='text'>No of people</div>
                                    <div className='number'>
                                        <input type='text' value='5' />
                                    </div>
                                </div>
                            </div>
                            <div className='list-outer-div'>
                                <div className='checkbox-outer-div'>
                                    <div className='checkbox-div'>
                                        <input type='checkbox' />
                                    </div>
                                    <div className='text-outer'>
                                        <div className='large-text'>Printing Service</div>
                                        <div className='normal-text'>INR 30 per person</div>
                                    </div>
                                </div>
                                <div className='people-outer'>
                                    <div className='text'>No of people</div>
                                    <div className='number'>
                                        <input type='text' value='2' />
                                    </div>
                                </div>
                            </div>
                            <div className='list-outer-div'>
                                <div className='checkbox-outer-div'>
                                    <div className='checkbox-div'>
                                        <input type='checkbox' />
                                    </div>
                                    <div className='text-outer'>
                                        <div className='large-text'>Secure Cabinets</div>
                                        <div className='normal-text'>INR 70 per person</div>
                                    </div>
                                </div>
                                <div className='people-outer'>
                                    <div className='text'>No of people</div>
                                    <div className='number'>
                                        <input type='text' value='7' />
                                    </div>
                                </div>
                            </div>
                            <div className='list-outer-div'>
                                <div className='checkbox-outer-div'>
                                    <div className='checkbox-div'>
                                        <input type='checkbox' />
                                    </div>
                                    <div className='text-outer'>
                                        <div className='large-text'>Library</div>
                                        <div className='normal-text'>INR 50 per person</div>
                                    </div>
                                </div>
                                <div className='people-outer'>
                                    <div className='text'>No of people</div>
                                    <div className='number'>
                                        <input type='text' value='' />
                                    </div>
                                </div>
                            </div>
                            <div className='list-outer-div'>
                                <div className='checkbox-outer-div'>
                                    <div className='checkbox-div'>
                                        <input type='checkbox' />
                                    </div>
                                    <div className='text-outer'>
                                        <div className='large-text'>Scanner</div>
                                        <div className='normal-text'>INR 50 per person</div>
                                    </div>
                                </div>
                                <div className='people-outer'>
                                    <div className='text'>No of people</div>
                                    <div className='number'>
                                        <input type='text' value='' />
                                    </div>
                                </div>
                            </div>
                            <div className='list-outer-div'>
                                <div className='checkbox-outer-div'>
                                    <div className='checkbox-div'>
                                        <input type='checkbox' />
                                    </div>
                                    <div className='text-outer'>
                                        <div className='large-text'>Soft Drinks</div>
                                        <div className='normal-text'>INR 50 per person</div>
                                    </div>
                                </div>
                                <div className='people-outer'>
                                    <div className='text'>No of people</div>
                                    <div className='number'>
                                        <input type='text' value='' />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='additional-last-div'>
                            <div className='outer'>
                                <div className='text'>
                                    Unlimited Coffee
                                </div>
                                <div className='price'>
                                    ₹ 250
                                </div>
                            </div>
                            <div className='outer'>
                                <div className='text'>
                                    Printing Service
                                </div>
                                <div className='price'>
                                    ₹ 60
                                </div>
                            </div>
                            <div className='outer'>
                                <div className='text'>
                                    Secure Cabinet
                                </div>
                                <div className='price'>
                                    ₹ 490
                                </div>
                            </div>
                            <div className='last-outer'>
                                <div className='text'>
                                    Additional fee
                                </div>
                                <div className='price'>
                                    ₹ 800
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='last-total-div'>
                    Booking amount : <span>INR 37,752</span>
                </div>
            </div>

            <div className='payment-process-outer-div'>
                <div className='text'>
                    *Please select your desired payment to proceed.
                </div>
                <div className='parallel-div'>
                    <div className='radio-btn-div'>
                        <input type='radio' name='payment' /> <label>Credit | Debit Cards</label>
                    </div>
                    <div className='input-div'>
                        <input type='text' placeholder='Card Number*' />
                    </div>
                </div>
                <div className='parallel-div'>
                    <div className='radio-btn-div'>
                        <input type='radio' name='payment' /> <label>Pay using UPI</label>
                    </div>
                    <div className='input-div'>
                        <input type='text' placeholder='UPI ID**' />
                    </div>
                </div>
                <div className='parallel-div'>
                    <div className='radio-btn-div'>
                        <input type='radio' name='payment' /> <label>Bank Transfer</label>
                    </div>
                    <div className='input-div'>
                        <input type='text' placeholder='Select a Bank*' />
                    </div>
                </div>
                <div className='last-btn-div'>
                    <button>Confirm Payment<img src={greaterThanIcon} alt='' /></button>
                </div>
            </div>
        </div>
    )
}

export default BookNowCheckout