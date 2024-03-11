import React from 'react'
import callIcon from '../assets/images/call-icon.svg'
import FilterIcon from '../assets/images/filter-icon.svg'
import refreshIcon from '../assets/images/refresh-icon.svg'
import MapImg from '../assets/images/map-img.png'
import RoomImg from '../assets/images/room-img-1.png'
import GreaterThanIcon from '../assets/images/greater-than.svg'
import StarIcon from '../assets/images/rating-star.svg'
import PhoneIcon from '../assets/images/call-icon.svg'
import DownArrowIcon from '../assets/images/down-arrow-white.svg'
import './BookNow.css'

function BookNowStart() {
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
                    <div className='steps active-step'>
                        1. START BOOKING
                    </div>
                    <div className='steps'>
                        2. CHOOSE A SPACE
                    </div>
                    <div className='steps'>
                        3. CHECKOUT
                    </div>
                </div>

                <div className='select-form-div'>
                    <div className='text'>
                        Select your preferred date, duration, and amenities to reserve your spot in our vibrant coworking environment.
                    </div>
                    <div className='form-div'>
                        <form>
                            <div className='parallel-form'>
                                <div className='input-div'>
                                    <select>
                                        <option>
                                            Select a space type
                                        </option>
                                        <option>
                                            Select a space type
                                        </option>
                                        <option>
                                            Select a space type
                                        </option>
                                    </select>
                                </div>
                                <div className='input-div'>
                                    <select>
                                        <option>
                                            Date [from]*
                                        </option>
                                        <option>
                                            Date [from]*
                                        </option>
                                        <option>
                                            Date [from]*
                                        </option>
                                    </select>
                                </div>
                                <div className='input-div'>
                                    <select>
                                        <option>
                                            Date [Until]*
                                        </option>
                                        <option>
                                            Date [Until]*
                                        </option>
                                        <option>
                                            Date [Until]*
                                        </option>
                                    </select>
                                </div>
                                <div className='input-div'>
                                    <select>
                                        <option>
                                            Time from / to*
                                        </option>
                                        <option>
                                            Time from / to*
                                        </option>
                                        <option>
                                            Time from / to*
                                        </option>
                                    </select>
                                </div>

                                <div className='input-div'>
                                    <select>
                                        <option>
                                            No of people
                                        </option>
                                        <option>
                                            No of people
                                        </option>
                                        <option>
                                            No of people
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className='search-div'>
                                <input type='text' placeholder='Location*' />
                                <div className='btn-outer'>
                                    <button className='location-btn'>
                                        Use my Location
                                    </button>
                                    <button className='search-btn'>
                                        Search <img src={refreshIcon} alt='' />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>



            </div>
            <div className='search-result-outer'>
                <div className='text-outer'>
                    <div className='text'>
                        <span className='large-text'>5 Private Cabins</span> found within 30 mile(s) of your search
                    </div>
                    <div className='filter-btn-div'>
                        <button>
                            <img className='mx-2' src={FilterIcon} alt='' />    Filter
                        </button>
                    </div>
                </div>

            </div>
            <div className='cards-and-map-div'>
                <div className='cards-col'>
                    <div className='room-card'>
                        <div className='img-div'>
                            <img src={RoomImg} alt='' />
                        </div>
                        <div className='content-div'>
                            <div className='first-roww'>
                                <div className='name'>
                                    3ASpace Suite
                                </div>
                                <div className='rating'>
                                    <img src={StarIcon} alt='' /> 4.8
                                </div>
                            </div>
                            <div className='second-row'>
                                <div className='location'>
                                    405, Tagore Rd, Kamla Market, Ajmeri Gate, New Delhi, Delhi, 110002
                                </div>
                                <div className='price'>
                                    <div className='rates'>
                                        INR 3,500<span className='permonth'> / Month</span>
                                    </div>
                                </div>
                            </div>
                            <div className='btn-div'>
                                <button>Book this space now <img src={GreaterThanIcon} alt='' /></button>
                            </div>
                            <div className='third-row'>
                                <div className='learn'>
                                    Learn About Us
                                </div>
                                <div className='call-div'>
                                    <img src={callIcon} alt='' />Call Us: 2342345789
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='room-card'>
                        <div className='img-div'>
                            <img src={RoomImg} alt='' />
                        </div>
                        <div className='content-div'>
                            <div className='first-roww'>
                                <div className='name'>
                                    Work Cafe
                                </div>
                                <div className='rating'>
                                    <img src={StarIcon} alt='' /> 4.8
                                </div>
                            </div>
                            <div className='second-row'>
                                <div className='location'>
                                    405, Tagore Rd, Kamla Market, Ajmeri Gate, New Delhi, Delhi, 110002
                                </div>
                                <div className='price'>
                                    <div className='rates'>
                                        INR 3,500<span className='permonth'> / Month</span>
                                    </div>
                                </div>
                            </div>
                            <div className='btn-div disable-btn'>
                                <button>UNAVAILABLE FOR BOOKING ONLINE  </button>
                            </div>
                            <div className='third-row'>
                                <div className='learn'>
                                    Learn About Us
                                </div>
                                <div className='call-div'>
                                    <img src={callIcon} alt='' />Call Us: 2342345789
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='map-col'>
                    <img src={MapImg} alt='' />
                </div>
            </div>

            <div className='show-more-btn'>
                <button>
                    Show more <img src={DownArrowIcon} alt='' />
                </button>
            </div>
        </div>
    )
}

export default BookNowStart