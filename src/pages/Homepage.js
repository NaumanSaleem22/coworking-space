import React from 'react'
import './Homepage.css'
import NearMeIcon from '../assets/images/near-me-btn.svg'
import AddIcon from '../assets/images/Add-Symbol.svg'
import GoToIcon from '../assets/images/go-to-icon.svg'
import BookingIcon from '../assets/images/booking.svg'
import HandMadeIcon from '../assets/images/Handmade.svg'
import MembershipIcon from '../assets/images/membership.svg'
import LocationIcon from '../assets/images/location.svg'
import SupportIcon from '../assets/images/support.svg'
import PartnerIcon from '../assets/images/partner.svg'
import OpenDesk from '../assets/images/open-desk-img.png'
import MeetingRoom from '../assets/images/meeting-room.png'
import privateCabin from '../assets/images/private-cabin.png'
import ConferenceRoom from '../assets/images/conference-room-img.png'
import ListTick from '../assets/images/list-tick.svg'
import PartnerWithUs from "../assets/images/partner-with-us-section-img.png"
import ExploreSelect from "../assets/images/explore-and-select-slider.svg"
import availability from "../assets/images/reservation.svg"
import Reservation from "../assets/images/availability.svg"
import rightboxarrow from "../assets/images/right-arrow-box.svg"
import leftboxarrow from "../assets/images/left-arrow-box.svg"
import greaterThanIconWhite from '../assets/images/greater-than.svg'
import greaterThanIconBlack from '../assets/images/greater-than-black.svg'
function Homepage() {
    return (
        <div className='home-section'>
            {/* Banner Section */}
            <section className='banner-section'>
                <div className='search-location-div'>
                    <div className='heading'>
                        Find A <span className='colored-text'>Perfect Workspace</span> That Suits You!
                    </div>
                    <div className='search-div'>
                        <button className='near-me-btn' >
                            <img src={NearMeIcon} alt='icon' />
                        </button>
                        <input className='search-input' type='text' placeholder='Search for a location' />
                        <button className='search-button'>
                            Search
                        </button>
                    </div>
                    <div className='desc'>
                        Popular Searches tailored just for you
                    </div>
                    <div className='tags-outer'>
                        <div className='tag'>
                            Open Desk
                        </div>
                        <div className='tag'>
                            High Speed Internet
                        </div>
                        <div className='tag'>
                            Great Coffee
                        </div>
                        <div className='tag'>
                            Private Cabins
                        </div>
                        <div className='tag'>
                            Great Breakfast
                        </div>
                        <div className='add-icon'>
                            <img src={AddIcon} alt='icon' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='features-section'>
                <div className='heading-content-div'>
                    <div className='heading-div'>
                        <span className='colored-text'>Co</span>work <span className='colored-text'>.</span> <span className='colored-text'>Co</span>nnect <span className='colored-text'>.</span> <span className='colored-text'>Co</span>llaborate <span className='colored-text'>.</span>
                    </div>
                    <div className='desc'>
                        Unite, Work, and Thrive: Your Dynamic Hub for Professionals, Freelancers, and Entrepreneurs to Collaborate and Connect!
                    </div>
                </div>
                <div className='cards-row'>
                    <div className='feature-card dark-bg'>
                        <div className='content-div'>
                            <img className='icon-div' src={BookingIcon} alt='Icon' />
                            <div className='heading-div'>
                                <span className='colored-text'>Event</span> Bookings
                            </div>
                            <div className='desc'>
                                From conferences to corporate meetings, reserve a versatile space hassle-free!
                            </div>
                            <button className='go-to-btn'>
                                <img src={GoToIcon} alt='Icon' />
                            </button>
                        </div>
                    </div>

                    <div className='feature-card light-bg'>
                        <div className='content-div'>
                            <img className='icon-div' src={HandMadeIcon} alt='Icon' />
                            <div className='heading-div'>
                                <span className='colored-text'>Handcrafted</span> Solutions
                            </div>
                            <div className='desc'>
                                We select coworking spaces meeting interior and ergonomics standards.
                            </div>
                            <button className='go-to-btn'>
                                <img src={GoToIcon} alt='Icon' />
                            </button>
                        </div>
                    </div>

                    <div className='feature-card dark-bg'>
                        <div className='content-div'>
                            <img className='icon-div' src={MembershipIcon} alt='Icon' />
                            <div className='heading-div'>
                                <span className='colored-text'>Buy</span> a membership
                            </div>
                            <div className='desc'>
                                Take the leap towards productivity with our hassle-free membership plans.
                            </div>
                            <button className='go-to-btn'>
                                <img src={GoToIcon} alt='Icon' />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='cards-row'>
                    <div className='feature-card light-bg'>
                        <div className='content-div'>
                            <img className='icon-div' src={PartnerIcon} alt='Icon' />
                            <div className='heading-div'>
                                Let’s be <span className='colored-text'>Partners</span>
                            </div>
                            <div className='desc'>
                                Turn Your Space Into a Successful Coworking Hub! Partner with Suits Coworking Space!
                            </div>
                            <button className='go-to-btn'>
                                <img src={GoToIcon} alt='Icon' />
                            </button>
                        </div>
                    </div>

                    <div className='feature-card dark-bg'>
                        <div className='content-div'>
                            <img className='icon-div' src={SupportIcon} alt='Icon' />
                            <div className='heading-div'>
                                24/7 <span className='colored-text'>Support</span>
                            </div>
                            <div className='desc'>
                                Round-the-Clock Support When You Need It Most! Immediate assistance at your convenience.
                            </div>
                            <button className='go-to-btn'>
                                <img src={GoToIcon} alt='Icon' />
                            </button>
                        </div>
                    </div>

                    <div className='feature-card light-bg'>
                        <div className='content-div'>
                            <img className='icon-div' src={LocationIcon} alt='Icon' />
                            <div className='heading-div'>
                                Explore <span className='colored-text'>our Locations</span>
                            </div>
                            <div className='desc'>
                                Explore our varied locations for convenient access and find your ideal workspace.
                            </div>
                            <button className='go-to-btn'>
                                <img src={GoToIcon} alt='Icon' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
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
                                Open Desk
                            </div>
                            <div className='desc'>
                                Flexibility Meets Efficiency - Engaging, Adaptable, and Elegantly Designed.
                            </div>
                            <div className='quote'>
                                From INR 2000/month, Per Person
                            </div>
                            <button>
                                Get a Quote <img src={greaterThanIconWhite} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='desk-cards'>
                        <div className='img-div'>
                            <img src={MeetingRoom} alt='img here' />
                        </div>
                        <div className='card-content-div'>
                            <div className='heading'>
                                Meeting Rooms
                            </div>
                            <div className='desc'>
                                Collaborative Spaces – Dynamic, Versatile, and Seamlessly Functional.
                            </div>
                            <div className='quote'>
                                From INR 4000/month, Per Person
                            </div>
                            <button>
                                Get a Quote <img src={greaterThanIconWhite} alt='' />
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
                                Private Cabins
                            </div>
                            <div className='desc'>
                                Your Exclusive Haven – Tailored, Professional, and Exceptionally Designed.
                            </div>
                            <div className='quote'>
                                From INR 3100/month, Per Person
                            </div>
                            <button>
                                Get a Quote <img src={greaterThanIconWhite} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='desk-cards'>
                        <div className='img-div'>
                            <img src={ConferenceRoom} alt='img here' />
                        </div>
                        <div className='card-content-div'>
                            <div className='heading'>
                                Conference Rooms
                            </div>
                            <div className='desc'>
                                Where Ideas Unfold – Professional, Purposeful, and Perfectly Equipped.
                            </div>
                            <div className='quote'>
                                From INR 1500/month, Per Person
                            </div>
                            <button>
                                Get a Quote <img src={greaterThanIconWhite} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='explore-card'>
                        <div className='content-div'>
                            <div className='heading-div'>
                                Looking for a Private Cabin nearest to your location?
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

            {/* Partner with Section */}
            <section className='partner-section'>
                <div className='outer-div'>
                    <div className='img-div'>
                        <img src={PartnerWithUs} alt='img here' />
                    </div>
                    <div className='content-div'>
                        <div className='colored-heading'>
                            PARTNER WITH US
                        </div>
                        <div className='heading-text'>
                            FOR A JOURNEY OF GROWTH AND SUCCESS
                        </div>
                        <div className='desc'>
                            Empowering individual landlords to transform vacant properties into thriving coworking spaces.
                            <br /><br />
                            Benefit from expert guidance and execution, aligning with Suits Coworking Space standards for operational excellence.
                        </div>
                        <div className='btn-outer'>
                            <button className='colored-btn'>Partner with Us <img src={greaterThanIconWhite} alt='' /></button>
                            <button className='hollow-btn'>Book a Consultation <img src={greaterThanIconWhite} alt='' /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3 simple steps section */}
            <section className='three-simple-steps-section'>
                <div className='heading-div'>
                    <span className='colored-text'>Reserve Your Space</span> in 3 Simple Steps
                </div>
                <div className='main-div'>
                    <div id="carouselExampleIndicators" class="carousel slide custom-slider-explore">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item custom-item active">
                                <img src={ExploreSelect} class="d-block custm-img" alt="..." />
                                <div className='content-div'>
                                    <div className='heading-div'>
                                        Explore and Select
                                    </div>
                                    <div className='text'>
                                        Browse through available spaces from Private Cabins, Open Desks, Conference rooms or Meeting rooms. Choose the preferred room, location, amenities, and duration.
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item custom-item">
                                <img src={availability} class="d-block custm-img" alt="..." />
                                <div className='content-div'>
                                    <div className='heading-div'>
                                        Check Availability and Customize
                                    </div>
                                    <div className='text'>
                                        Verify space availability on desired dates and customize your booking. Select additional services, if needed, and review pricing options.
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item custom-item">
                                <img src={Reservation} class="d-block custm-img" alt="..." />
                                <div className='content-div'>
                                    <div className='heading-div'>
                                        Reservation and Confirmation
                                    </div>
                                    <div className='text'>
                                        Complete the booking process by providing necessary details, making payment, and receiving instant confirmation. Access information about the space for a smooth arrival.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <img src={leftboxarrow} alt='img here' />
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <img src={rightboxarrow} alt='img here' />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage