import React from 'react'
import './StateSpaceDetails.css'
import Banner1 from '../assets/images/space-detail1.png'
import Banner2 from '../assets/images/space-detail2.png'
import StarIcon from '../assets/images/rating-star.svg'
import InfoIcon from '../assets/images/info-icon-i.svg'
import RoomImg1 from '../assets/images/room-img-1.png'
import DownArrow from '../assets/images/down-arrow-white.svg'
import NearMeIcon from '../assets/images/near-me-black.png'
import FlexibleWork from '../assets/images/flexible-work-icon.svg'
import Networking from '../assets/images/networking-opportunities-icon.svg'
import Access from '../assets/images/access-premium-icon.svg'
import inspiring from '../assets/images/inspiring-ambiance-icon.svg'
import costEffective from '../assets/images/cost-effection-icon.svg'
import convenient from '../assets/images/convenient-location-icon.png'
import BecomeMember from '../assets/images/become-member.png'
import GreaterThanIcon from '../assets/images/greater-than.svg'
function StateSpaceDetails() {
    return (
        <div className='state-space-detail-section about-section explore-space-section rooms-section'>
            <section className='banner-section'>
                <div className='heading-div'>
                    <div className='colored-heading'>
                        Top Notch Coworking Space:
                    </div>
                    <div className='normal-heading'>
                        in Mansarovar, Jaipur<span className='colored-heading'>.</span>
                    </div>
                </div>
                <div className='outer-div'>
                    <div className='img-outer-div'>
                        <div className='img1-div'>
                            <img src={Banner1} alt='' />
                        </div>
                        <div className='img2-div'>
                            <img src={Banner2} alt='' />
                        </div>
                    </div>
                    <div className='content-div'>
                        <ul style={{ listStyle: 'none' }}>
                            <li>
                                Coworking space is a boon for you whether you are a working professional, freelancer, or digital nomad.
                            </li>
                            <li>
                                <strong>What if you find top-notch coworking space in your own city? </strong>
                            </li>
                            <li>
                                Yes, you heard it right
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='explore-us-section'>
                <div className='heading-div'>
                    <div className='heading'>
                        <span className='colored-text'>Explore and Reserve </span>a workspace in Mansarovar
                    </div>
                    <div className='text'>
                        Explore tailored, adaptable work environments crafted to suit your needs at every step.
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
                </div>

                <div className='tabs-outer-div'>
                    <div className='tab-btn-outer-div'>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="metro-tab" data-bs-toggle="tab" data-bs-target="#metro-tab-pane" type="button" role="tab" aria-controls="metro-tab-pane" aria-selected="true">Open Desks</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="conference-tab" data-bs-toggle="tab" data-bs-target="#conference-tab-pane" type="button" role="tab" aria-controls="conference-tab-pane" aria-selected="false">Conference Rooms</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="private-tab" data-bs-toggle="tab" data-bs-target="#private-tab-pane" type="button" role="tab" aria-controls="private-tab-pane" aria-selected="false">Private Cabins</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="meeting-tab" data-bs-toggle="tab" data-bs-target="#meeting-tab-pane" type="button" role="tab" aria-controls="meeting-tab-pane" aria-selected="false" >Meeting Rooms</button>
                            </li>

                        </ul>
                        <div className='view-all-div'>
                            <button>
                                View All
                            </button>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="metro-tab-pane" role="tabpanel" aria-labelledby="metro-tab" tabindex="0">
                            <div className='card-outer-div'>
                                <div className='cardsss'>
                                    <div className='img-div'>
                                        {/* <img src={RoomImg1} alt='' /> */}
                                        <div id="roomSlider1" class="carousel slide">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#roomSlider1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#roomSlider1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#roomSlider1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#roomSlider1" data-bs-slide-to="3" aria-label="Slide 3"></button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src={RoomImg1} class="d-block w-100" alt="..." />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src={RoomImg1} class="d-block w-100" alt="..." />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src={RoomImg1} class="d-block w-100" alt="..." />
                                                </div>
                                                <div class="carousel-item">
                                                    <img src={RoomImg1} class="d-block w-100" alt="..." />
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#roomSlider1" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#roomSlider1" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='content-div'>
                                        <div className='first-row'>
                                            <div className='name'>
                                                3ASpace Suite
                                            </div>
                                            <div className='info'>
                                                Open Desks <img src={InfoIcon} alt='' />
                                            </div>
                                        </div>
                                        <div className='second-row'>
                                            <div className='location'>
                                                Chennai, India
                                            </div>
                                            <div className='distance'>
                                                320 kilometers away
                                            </div>
                                        </div>
                                        <div className='third-row'>
                                            <div className='rates'>₹3,500 <span>per month</span></div>
                                            <div className='rating'><img src={StarIcon} alt='' /> 4.8</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardsss'>
                                    <div className='img-div'>
                                        <img src={RoomImg1} alt='' />
                                    </div>
                                    <div className='content-div'>
                                        <div className='first-row'>
                                            <div className='name'>
                                                3ASpace Suite
                                            </div>
                                            <div className='info'>
                                                Open Desks <img src={InfoIcon} alt='' />
                                            </div>
                                        </div>
                                        <div className='second-row'>
                                            <div className='location'>
                                                Chennai, India
                                            </div>
                                            <div className='distance'>
                                                320 kilometers away
                                            </div>
                                        </div>
                                        <div className='third-row'>
                                            <div className='rates'>₹3,500 <span>per month</span></div>
                                            <div className='rating'><img src={StarIcon} alt='' /> 4.8</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardsss'>
                                    <div className='img-div'>
                                        <img src={RoomImg1} alt='' />
                                    </div>
                                    <div className='content-div'>
                                        <div className='first-row'>
                                            <div className='name'>
                                                3ASpace Suite
                                            </div>
                                            <div className='info'>
                                                Open Desks <img src={InfoIcon} alt='' />
                                            </div>
                                        </div>
                                        <div className='second-row'>
                                            <div className='location'>
                                                Chennai, India
                                            </div>
                                            <div className='distance'>
                                                320 kilometers away
                                            </div>
                                        </div>
                                        <div className='third-row'>
                                            <div className='rates'>₹3,500 <span>per month</span></div>
                                            <div className='rating'><img src={StarIcon} alt='' /> 4.8</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardsss'>
                                    <div className='img-div'>
                                        <img src={RoomImg1} alt='' />
                                    </div>
                                    <div className='content-div'>
                                        <div className='first-row'>
                                            <div className='name'>
                                                3ASpace Suite
                                            </div>
                                            <div className='info'>
                                                Open Desks <img src={InfoIcon} alt='' />
                                            </div>
                                        </div>
                                        <div className='second-row'>
                                            <div className='location'>
                                                Chennai, India
                                            </div>
                                            <div className='distance'>
                                                320 kilometers away
                                            </div>
                                        </div>
                                        <div className='third-row'>
                                            <div className='rates'>₹3,500 <span>per month</span></div>
                                            <div className='rating'><img src={StarIcon} alt='' /> 4.8</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardsss'>
                                    <div className='img-div'>
                                        <img src={RoomImg1} alt='' />
                                    </div>
                                    <div className='content-div'>
                                        <div className='first-row'>
                                            <div className='name'>
                                                3ASpace Suite
                                            </div>
                                            <div className='info'>
                                                Open Desks <img src={InfoIcon} alt='' />
                                            </div>
                                        </div>
                                        <div className='second-row'>
                                            <div className='location'>
                                                Chennai, India
                                            </div>
                                            <div className='distance'>
                                                320 kilometers away
                                            </div>
                                        </div>
                                        <div className='third-row'>
                                            <div className='rates'>₹3,500 <span>per month</span></div>
                                            <div className='rating'><img src={StarIcon} alt='' /> 4.8</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='cardsss'>
                                    <div className='img-div'>
                                        <img src={RoomImg1} alt='' />
                                    </div>
                                    <div className='content-div'>
                                        <div className='first-row'>
                                            <div className='name'>
                                                3ASpace Suite
                                            </div>
                                            <div className='info'>
                                                Open Desks <img src={InfoIcon} alt='' />
                                            </div>
                                        </div>
                                        <div className='second-row'>
                                            <div className='location'>
                                                Chennai, India
                                            </div>
                                            <div className='distance'>
                                                320 kilometers away
                                            </div>
                                        </div>
                                        <div className='third-row'>
                                            <div className='rates'>₹3,500 <span>per month</span></div>
                                            <div className='rating'><img src={StarIcon} alt='' /> 4.8</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="tab-pane fade" id="conference-tab-pane" role="tabpanel" aria-labelledby="conference-tab" tabindex="0">.conference..</div>
                        <div class="tab-pane fade" id="private-tab-pane" role="tabpanel" aria-labelledby="private-tab" tabindex="0">.private.</div>
                        <div class="tab-pane fade" id="meeting-tab-pane" role="tabpanel" aria-labelledby="meeting-tab" tabindex="0">.meeting..</div>
                    </div>
                </div>


            </section>

            {/* Become member section */}

            <section className='partner-section'>
                <div className='outer-div'>
                    <div className='img-div'>
                        <img src={BecomeMember} alt='img here' />
                    </div>
                    <div className='content-div'>
                        <div className='colored-heading'>
                            BECOME A MEMBER.
                        </div>
                        <div className='heading-text'>
                            GET TO AVAIL OUR FACILITIES!
                        </div>
                        <div className='desc'>
                            Empowering individual landlords to transform vacant properties into thriving coworking spaces.
                            <br /><br />
                            Benefit from expert guidance and execution, aligning with Suits Coworking Space standards for operational excellence.
                        </div>
                        <div className='btn-outer'>
                            <button className='colored-btn'>View Membership Plan <img src={GreaterThanIcon} alt='' /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What we do section */}
            <section className='what-we-do-section'>
                <div className='heading-div'>
                    <div className='headings'>
                        Benefits of Working at Coworking Space<br />
                        in <span className='colored-text'>Mansarovar, Jaipur</span>
                    </div>
                    <div className='desc'>
                        As a working professional, a coworking space in Mansarover can bestow on you many things.
                    </div>
                </div>

                <div className='cards-outer-div'>
                    <div className='first-row-card-div'>
                        <div className='card-inner light-card'>
                            <div className='icon-div'>
                                <img src={FlexibleWork} alt='' />
                            </div>
                            <div className='heading-divs'>
                                Flexible Work Environment
                            </div>
                            <div className='desc'>
                                No matter what you need, you can adapt your workspace to meet your needs.
                            </div>
                        </div>
                        <div className='card-inner dark-card'>
                            <div className='icon-div'>
                                <img src={Networking} alt='' />
                            </div>
                            <div className='heading-divs'>
                                Networking Opportunities
                            </div>
                            <div className='desc'>
                                Coworking aims to bring professionals from various industries together.
                            </div>
                        </div>
                        <div className='card-inner light-card'>
                            <div className='icon-div'>
                                <img src={Access} alt='' />
                            </div>
                            <div className='heading-divs'>
                                Access to Premium Amenities
                            </div>
                            <div className='desc'>
                                Include high-speed internet, meeting rooms, printing services, and more.
                            </div>
                        </div>
                    </div>
                    <div className='first-row-card-div'>
                        <div className='card-inner dark-card'>
                            <div className='icon-div'>
                                <img src={inspiring} alt='' />
                            </div>
                            <div className='heading-divs'>
                                Inspiring<br />
                                Ambiance
                            </div>
                            <div className='desc'>
                                The modern, appealing work environment of these spaces fosters better work efficiency.
                            </div>
                        </div>
                        <div className='card-inner light-card'>
                            <div className='icon-div'>
                                <img src={costEffective} alt='' />
                            </div>
                            <div className='heading-divs'>
                                Cost-Effective Solutions
                            </div>
                            <div className='desc'>
                                Aims to save your expenses, including rent, maintenance, and other office utilities.
                            </div>
                        </div>
                        <div className='card-inner dark-card'>
                            <div className='icon-div'>
                                <img src={convenient} alt='' />
                            </div>
                            <div className='heading-divs'>
                                Convenient<br />
                                Location
                            </div>
                            <div className='desc'>
                                You will get access to nearby amenities and potential clients or collaborators in your location.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StateSpaceDetails