import React from 'react'
import locationIcon from '../assets/images/location-gray.svg'
import eyeIcon from '../assets/images/eye-icon.svg'
import starIcon from '../assets/images/single-star.svg'
import img1 from '../assets/images/statedetail-1.png'
import img2 from '../assets/images/statedetail-2.png'
import img3 from '../assets/images/statedetail-3.png'
import img4 from '../assets/images/statedetail-4.png'
import img5 from '../assets/images/statedetail-last.png'
import greaterThanIcon from '../assets/images/greater-than.svg'
import greaterThanIconBlack from '../assets/images/greater-than-black.svg'
import tickIcon from '../assets/images/tick-icon.svg'
import Parkingamenity from '../assets/images/parking-amenity.png'
import Elevatoramenity from '../assets/images/elevator-amenity.png'
import Meetingamenity from '../assets/images/meeting-room-amenity.png'
import Airportamenity from '../assets/images/airport-amenity.png'
import Unlimitedamenity from '../assets/images/unlimited-coffee-amenity.png'
import Gymamenity from '../assets/images/gym-fitness-amenity.png'
import HighWifiamenity from '../assets/images/wifi-amenity.png'
import Handamenity from '../assets/images/sanitizer-amenity.png'
import Usbamenity from '../assets/images/on-desk-amenity.png'
import AIrConditionamenity from '../assets/images/air-conditioning-amenity.png'
import Powerbankamenity from '../assets/images/powerbank-amenity.png'
import stationaryamenity from '../assets/images/on-desk-stationary-amenity.png'
import Printingamenity from '../assets/images/printing-amenity.png'
import scanneramenity from '../assets/images/scanner-amenity.png'
import libraryamenity from '../assets/images/library-amenity.png'
import secureamenity from '../assets/images/secure-amenity.png'
import softamenity from '../assets/images/soft-amenity.png'
import extraamenity from '../assets/images/extra-amenity.png'
import exclusiveamenity from '../assets/images/exclusive-amenity.png'
import mapLocation from '../assets/images/map-location.png'
import singleStar from '../assets/images/single-star.svg'
import neha from '../assets/images/neha.png'
import mohan from '../assets/images/mohan.png'
import madhan from '../assets/images/madhan.png'
import chris from '../assets/images/chris.png'
import ratingStars from '../assets/images/5-star-4-filled.svg'
import downArrow from '../assets/images/down-arrow-white.svg'
import MeetingRoom from '../assets/images/meeting-room.png'
import privateCabin from '../assets/images/private-cabin.png'
import ConferenceRoom from '../assets/images/conference-room-img.png'
import ListTick from '../assets/images/list-tick.svg'
import OpenDesk from '../assets/images/open-desk-img.png'
import Workspace1 from '../assets/images/workspace-1.png'
import Workspace2 from '../assets/images/workspace-2.png'
import Workspace3 from '../assets/images/workspace-3.png'
import './SpaceDetails.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
function SpaceDetails() {
    return (
        <div className='space-details-section'>
            <section className='banner-section'>
                <div className='first-row'>
                    <div className='left-col'>
                        <div className='heading-div'>
                            3ASpace Suite<span className='colored-text'>.</span>
                        </div>
                        <div className='location-text'>
                            <img src={locationIcon} alt='' />123, 3ASpace Suite, XYZ Avenue, Near Airport, Meenambakkam, Chennai.
                        </div>
                    </div>
                    <div className='right-col'>
                        <button className='review-btn'>
                            <img src={starIcon} alt='' />    4.5 <span className='gray-text'>| 52 Reviews</span>
                        </button>
                        <button className='map-btn'>
                            <img src={eyeIcon} alt='' /> View on map
                        </button>
                    </div>
                </div>

                <div className='img-outermost-div'>
                    <div className='left-img-col'>
                        <img src={img1} alt='' />
                    </div>
                    <div className='right-img-col'>
                        <div className='inner-left'>
                            <div className='first-col'>
                                <img src={img2} alt='' />
                            </div>
                            <div className='second-col'>
                                <img src={img3} alt='' />
                            </div>
                        </div>
                        <div className='inner-right'>
                            <div className='first-col'>
                                <img src={img4} alt='' />
                            </div>
                            <div className='second-col'>
                                <img src={img5} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='collaborative-section'>
                <div className='outer-div'>
                    <div className='content-div'>
                        <div className='heading-div'>
                            <span className='colored-text'> A collaborative Workspace</span> for Professionals
                        </div>
                        <div className='desc'>
                            Welcome to our vibrant coworking space ideally designed for collaborative work environments. Our building boasts modern infrastructure tailored for fostering creativity and productivity. With flexible workstations, high-speed internet, state-of-the-art meeting rooms, and inviting communal areas, it's the perfect hub for innovation and networking.
                        </div>
                        <div className='showmore'>
                            <a href='/#'>Show more</a>
                        </div>
                    </div>
                    <div className='timetable-outer'>
                        <div className='heading-div'>
                            <img src={tickIcon} alt='' /> Availability
                        </div>
                        <div className='timetable'>
                            <div className='desc'>
                                <div className='first-div'>Weekday</div>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; 6:00 PM - 10:00 PM
                            </div>
                            <div className='desc'>
                                <div className='first-div'>Saturday</div>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; 6:00 PM - 10:00 PM
                            </div>
                            <div className='desc'>
                                <div className='first-div'>Sunday</div>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; Closed
                            </div>

                            <div className='btn-div'>
                                <button>
                                    Book Now <img src={greaterThanIcon} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='amenities-section'>
                <div className='amenity-outer-card'>
                    <div className='heading-div'>
                        Basic Amenities
                    </div>
                    <div className='amenity-main-outer'>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={Parkingamenity} /> Parking&nbsp;Lot
                            </div>
                            <div className='amenity-div'>
                                <img alt='' src={Elevatoramenity} /> Elevator
                            </div>
                        </div>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={Meetingamenity} /> Meeting&nbsp;Rooms
                            </div>
                            <div className='amenity-div'>
                                <img alt='' src={Airportamenity} />Airport&nbsp;Location
                            </div>
                        </div>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={Unlimitedamenity} /> Unlimited&nbsp;Coffee
                            </div>
                            <div className='amenity-div'>
                                <img alt='' src={Gymamenity} /> Gym/Fitness&nbsp;Rooms
                            </div>
                        </div>

                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={HighWifiamenity} />High&nbsp;Speed&nbsp;Wi-Fi
                            </div>
                            <div className='amenity-div'>
                                <img alt='' src={Handamenity} />Hand&nbsp;Sanitizers
                            </div>
                        </div>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={Usbamenity} />On&nbsp;Desk&nbsp;USB&nbsp;Charging
                            </div>
                            <div className='amenity-div'>
                                <img alt='' src={AIrConditionamenity} />Air&nbsp;Conditioning
                            </div>
                        </div>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={Powerbankamenity} />Power&nbsp;Back-up
                            </div>
                            <div className='amenity-div'>
                                <img alt='' src={stationaryamenity} />On-Desk&nbsp;Stationary
                            </div>
                        </div>
                    </div>
                </div>

                <div className='amenity-outer-card'>
                    <div className='heading-div'>
                        Paid Amenities
                    </div>
                    <div className='amenity-main-outer'>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={Printingamenity} /> Printing&nbsp;Service
                            </div>

                        </div>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={scanneramenity} /> Scanner
                            </div>

                        </div>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={libraryamenity} />Library
                            </div>

                        </div>

                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={secureamenity} />Secure&nbsp;Cabinets
                            </div>

                        </div>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={softamenity} />Soft&nbsp;Drinks
                            </div>

                        </div>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={extraamenity} />Extra&nbsp;Storage
                            </div>

                        </div>
                        <div className='amenity-main'>
                            <div className='amenity-div'>
                                <img alt='' src={exclusiveamenity} />Exclusive&nbsp;Workshops
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='location-section-space'>
                <div className='heading-div'>
                    Location
                </div>
                <div className='outer-div'>
                    <div className='img-div'>
                        <img src={mapLocation} alt='' />
                    </div>
                    <div className='form-div'>
                        <form>
                            <div className='form-heading'>
                                Interested in this spot?
                            </div>
                            <div className='desc'>
                                Connect with a Suit’s expert to book the best room
                            </div>
                            <div className='input-div'>
                                <input type='text' placeholder='Full name*' />
                            </div>
                            <div className='input-div'>
                                <input type='email' placeholder='Email Address*' />
                            </div>
                            <div className='input-div'>
                                <input type='text' placeholder='Company' />
                            </div>
                            <div className='input-div'>
                                <input type='text' placeholder='Location*' />
                            </div>
                            <div className='input-div'>
                                <input type='text' placeholder='How many people need workspace*' />
                            </div>
                            <div className='btn-div'>
                                <button>
                                    Enquire Now <img src={greaterThanIcon} alt='' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className='customer-reviews-section'>
                <div className='outermost-row'>
                    <div className='first-row'>
                        <div className='header-outer'>
                            <div className='heading-div'>
                                Our Customer Reviews
                            </div>
                            <div className='review-div'>
                                <img src={singleStar} alt='' /> 4.5 | 52 <span>reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className='overall-rating-outermost'>
                        <div className='overall-rating-div'>
                            <div className='heading'>
                                Overall Rating
                            </div>
                            <div className='ratings rating-5'>
                                5
                            </div>
                            <div className='ratings rating-4'>
                                4
                            </div>
                            <div className='ratings rating-3'>
                                3
                            </div>
                            <div className='ratings rating-2'>
                                2
                            </div>
                            <div className='ratings rating-1'>
                                1
                            </div>
                        </div>
                        <div className='marks-outer-div'>
                            <div className='mark-single-div'>
                                <div className='mark-desc'>
                                    Cleanliness
                                </div>
                                <div className='ratingg'>
                                    4.7
                                </div>
                            </div>
                            <div className='mark-single-div'>
                                <div className='mark-desc'>
                                    Location
                                </div>
                                <div className='ratingg'>
                                    4.2
                                </div>
                            </div>
                            <div className='mark-single-div'>
                                <div className='mark-desc'>
                                    Communication
                                </div>
                                <div className='ratingg'>
                                    5.0
                                </div>
                            </div>
                            <div className='mark-single-div'>
                                <div className='mark-desc'>
                                    Satisfaction
                                </div>
                                <div className='ratingg'>
                                    4.8
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reviews-outermost'>
                        <div className='reviews-outer-div'>
                            <div className='review-div'>
                                <div className='icon-img-div'>
                                    <img src={neha} alt='' />
                                </div>
                                <div className='details'>
                                    <div className='name-and-rating'>
                                        <div className='name'>
                                            Neha
                                        </div>
                                        <div className='rating'>
                                            <img src={ratingStars} alt='' />
                                        </div>
                                    </div>
                                    <div className='location'>
                                        New Delhi, India
                                    </div>
                                    <div className='quote-div'>
                                        Exceptional coworking space! The environment is vibrant, inspiring, and conducive to productivity. The amenities provided are top-notch, and the community fostered here is welcoming and supportive.
                                    </div>
                                </div>
                            </div>

                            <div className='review-div'>
                                <div className='icon-img-div'>
                                    <img src={mohan} alt='' />
                                </div>
                                <div className='details'>
                                    <div className='name-and-rating'>
                                        <div className='name'>
                                            Mohan
                                        </div>
                                        <div className='rating'>
                                            <img src={ratingStars} alt='' />
                                        </div>
                                    </div>
                                    <div className='location'>
                                        India
                                    </div>
                                    <div className='quote-div'>
                                        The flexible options for various workspace needs make it an ideal choice for professionals seeking a collaborative and dynamic work setting.
                                    </div>
                                </div>
                            </div>


                            <div className='review-div'>
                                <div className='icon-img-div'>
                                    <img src={madhan} alt='' />
                                </div>
                                <div className='details'>
                                    <div className='name-and-rating'>
                                        <div className='name'>
                                            Madhan
                                        </div>
                                        <div className='rating'>
                                            <img src={ratingStars} alt='' />
                                        </div>
                                    </div>
                                    <div className='location'>
                                        New Delhi, India
                                    </div>
                                    <div className='quote-div'>
                                        Exceptional coworking space! The environment is vibrant, inspiring, and conducive to productivity. The amenities provided are top-notch, and the community fostered here is welcoming and supportive.
                                    </div>
                                </div>
                            </div>


                            <div className='review-div'>
                                <div className='icon-img-div'>
                                    <img src={chris} alt='' />
                                </div>
                                <div className='details'>
                                    <div className='name-and-rating'>
                                        <div className='name'>
                                            chris
                                        </div>
                                        <div className='rating'>
                                            <img src={ratingStars} alt='' />
                                        </div>
                                    </div>
                                    <div className='location'>
                                        New Delhi, India
                                    </div>
                                    <div className='quote-div'>
                                        Exceptional coworking space! The environment is vibrant, inspiring, and conducive to productivity. The amenities provided are top-notch, and the community fostered here is welcoming and supportive.
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='view-more-btn'>
                        <button>
                            View more <img src={downArrow} alt='' />
                        </button>
                    </div>
                </div>
            </section>

            <section className='pricing-section'>
                <div className='heading-content-div'>
                    <div className='heading-div'>
                        Flexible Workspaces designed for you!
                    </div>
                    <div className='desc'>
                        Explore tailored, adaptable work environments crafted to suit your needs at every step.
                    </div>
                </div>
                <div className='cards-outer-div'>
                    <div className='desk-cards'>
                        <div className='img-div'>
                            <img src={OpenDesk} alt='img here' />
                        </div>
                        <div className='card-content-div'>
                            <div className='heading'>
                                3ASpace Suite
                            </div>
                            <div className='desc'>
                                123, 3ASpace Suite, XYZ Avenue, Near Airport, Meenambakkam, Chennai.
                            </div>
                            <div className='quote'>
                                From INR 2000/month, Per Person
                            </div>
                            <button>
                                Get a Quote <img src={greaterThanIcon} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='desk-cards'>
                        <div className='img-div'>
                            <img src={MeetingRoom} alt='img here' />
                        </div>
                        <div className='card-content-div'>
                            <div className='heading'>
                                ABC Building
                            </div>
                            <div className='desc'>
                                123, ABC Building, 1st cross Avenue, Meenambakkam, Chennai.
                            </div>
                            <div className='quote'>
                                From INR 4000/month, Per Person
                            </div>
                            <button>
                                Get a Quote <img src={greaterThanIcon} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='assistance-card'>
                        <div className='content-div'>
                            <div className='heading-div'>
                                Need Assistance?
                            </div>
                            <div className='desc'>
                                We’re here to help! Our dedicated support team is just a click away for immediate personalized assistance.
                            </div>
                            <div className='list-div'>
                                <div className='list-inner'>
                                    <div className='icon-div'>
                                        <img src={ListTick} alt='icon' />
                                    </div>
                                    <div className='txt'>
                                        24/7 Availability
                                    </div>
                                </div>
                                <div className='list-inner'>
                                    <div className='icon-div'>
                                        <img src={ListTick} alt='icon' />
                                    </div>
                                    <div className='txt'>
                                        Dedicated Team
                                    </div>
                                </div>
                                <div className='list-inner'>
                                    <div className='icon-div'>
                                        <img src={ListTick} alt='icon' />
                                    </div>
                                    <div className='txt'>
                                        Expert Guidance
                                    </div>
                                </div>
                                <div className='list-inner'>
                                    <div className='icon-div'>
                                        <img src={ListTick} alt='icon' />
                                    </div>
                                    <div className='txt'>
                                        Prompt Responses
                                    </div>
                                </div>
                            </div>
                            <div className='btn-div'>
                                <button>
                                    Book a Consultation <img src={greaterThanIconBlack} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cards-outer-div'>
                    <div className='desk-cards'>
                        <div className='img-div'>
                            <img src={privateCabin} alt='img here' />
                        </div>
                        <div className='card-content-div'>
                            <div className='heading'>
                                Coffee Theme
                            </div>
                            <div className='desc'>
                                28, Coffee Theme, New Avenue, Near Airport, Gujarat.
                            </div>
                            <div className='quote'>
                                From INR 3100/month, Per Person
                            </div>
                            <button>
                                Get a Quote <img src={greaterThanIcon} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='desk-cards'>
                        <div className='img-div'>
                            <img src={ConferenceRoom} alt='img here' />
                        </div>
                        <div className='card-content-div'>
                            <div className='heading'>
                                New Work Cafe
                            </div>
                            <div className='desc'>
                                28, New Work Cafe, Old Avenue, XYZ Street, Mumbai.
                            </div>
                            <div className='quote'>
                                From INR 1500/month, Per Person
                            </div>
                            <button>
                                Get a Quote <img src={greaterThanIcon} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='explore-card'>
                        <div className='content-div'>
                            <div className='heading-div'>
                                Your flexible working space is just a click away!
                            </div>
                            <div className='btn-div'>
                                <button>
                                    Explore all <img src={greaterThanIconBlack} alt='' />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='workspace-nearby-slider-section'>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3.3}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        375: {
                            // width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            // width: 768,
                            slidesPerView: 2,
                        }, 1024: {
                            // width: 768,
                            slidesPerView: 3.3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='slider-card-nearby'>
                            <div className='img-div'>
                                <img src={Workspace1} alt='' />
                                <div className='distance-div'>
                                    +3.5 km
                                </div>
                            </div>
                            <div className='content-div'>
                                <div className='heading-div'>
                                    Work Tower
                                </div>
                                <div className='desc'>
                                    From INR 2000/month, Per Person
                                </div>
                                <div className='btn-div'>
                                    <button>
                                        Take a look <img src={greaterThanIcon} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='slider-card-nearby'>
                            <div className='img-div'>
                                <img src={Workspace1} alt='' />      <div className='distance-div'>
                                    +1.5 km
                                </div>
                            </div>
                            <div className='content-div'>
                                <div className='heading-div'>
                                    Lettuce Leaf
                                </div>
                                <div className='desc'>
                                    From INR 2000/month, Per Person
                                </div>
                                <div className='btn-div'>
                                    <button>
                                        Take a look <img src={greaterThanIcon} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-card-nearby'>
                            <div className='img-div'>
                                <img src={Workspace1} alt='' />
                                <div className='distance-div'>
                                    +2.5 km
                                </div>
                            </div>
                            <div className='content-div'>
                                <div className='heading-div'>
                                    Express Venue
                                </div>
                                <div className='desc'>
                                    From INR 4000/month, Per Person
                                </div>
                                <div className='btn-div'>
                                    <button>
                                        Take a look <img src={greaterThanIcon} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-card-nearby'>
                            <div className='img-div'>
                                <img src={Workspace1} alt='' />
                                <div className='distance-div'>
                                    +3.5 km
                                </div>
                            </div>
                            <div className='content-div'>
                                <div className='heading-div'>
                                    Work Tower
                                </div>
                                <div className='desc'>
                                    From INR 2000/month, Per Person
                                </div>
                                <div className='btn-div'>
                                    <button>
                                        Take a look <img src={greaterThanIcon} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-card-nearby'>
                            <div className='img-div'>
                                <img src={Workspace1} alt='' />
                                <div className='distance-div'>
                                    +3.5 km
                                </div>
                            </div>
                            <div className='content-div'>
                                <div className='heading-div'>
                                    Work Tower
                                </div>
                                <div className='desc'>
                                    From INR 1500/month, Per Person
                                </div>
                                <div className='btn-div'>
                                    <button>
                                        Take a look <img src={greaterThanIcon} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slider-card-nearby'>
                            <div className='img-div'>
                                <img src={Workspace1} alt='' />

                            </div>
                            <div className='content-div'>
                                <div className='heading-div'>
                                    Express Venue
                                </div>
                                <div className='desc'>
                                    From INR 4000/month, Per Person
                                </div>
                                <div className='btn-div'>
                                    <button>
                                        Take a look <img src={greaterThanIcon} alt='' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </section>
        </div>
    )
}

export default SpaceDetails