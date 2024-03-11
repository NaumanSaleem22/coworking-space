import React from 'react'
import NearMeIcon from '../assets/images/near-me-btn.svg'
import AddIcon from '../assets/images/Add-Symbol.svg'
import StarIcon from '../assets/images/rating-star.svg'
import InfoIcon from '../assets/images/info-icon-i.svg'
import HeartFIlled from '../assets/images/heart-filled.svg'
import HeartUnfilled from '../assets/images/heart-unfilled.svg'
import RoomImg1 from '../assets/images/room-img-1.png'
import DownArrow from '../assets/images/down-arrow-white.svg'
import './ExploreSpaces.css'
import './Homepage.css'
function ExploreSpaces() {
    return (
        <div className='home-section explore-space-section'>
            <section className='banner-section'>
                <div className='search-location-div'>
                    <div className='heading text-center'>
                        Flexible Workspaces <span className='colored-text'>Designed For You!</span>
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

            <section className='explore-us-section'>
                <div className='heading-div'>
                    <div className='heading'>
                        Explore Us <span className='colored-text'>.</span>
                    </div>
                    <div className='text'>
                        Explore tailored, adaptable work environments crafted to suit your needs at every step.
                    </div>
                </div>

                <div className='tabs-outer-div'>
                    <div className='tab-btn-outer-div'>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="metro-tab" data-bs-toggle="tab" data-bs-target="#metro-tab-pane" type="button" role="tab" aria-controls="metro-tab-pane" aria-selected="true">Metrocities</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="membership-tab" data-bs-toggle="tab" data-bs-target="#membership-tab-pane" type="button" role="tab" aria-controls="membership-tab-pane" aria-selected="false">Membership Flexibility</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="amenities-tab" data-bs-toggle="tab" data-bs-target="#amenities-tab-pane" type="button" role="tab" aria-controls="amenities-tab-pane" aria-selected="false">Amenities</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="price-tab" data-bs-toggle="tab" data-bs-target="#price-tab-pane" type="button" role="tab" aria-controls="price-tab-pane" aria-selected="false" >Price Range</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="coworking-tab" data-bs-toggle="tab" data-bs-target="#coworking-tab-pane" type="button" role="tab" aria-controls="coworking-tab-pane" aria-selected="false">Coworking</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="meeting-tab" data-bs-toggle="tab" data-bs-target="#meeting-tab-pane" type="button" role="tab" aria-controls="meeting-tab-pane" aria-selected="false">Meeting Rooms</button>
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
                        <div class="tab-pane fade" id="membership-tab-pane" role="tabpanel" aria-labelledby="membership-tab" tabindex="0">.Membership..</div>
                        <div class="tab-pane fade" id="amenities-tab-pane" role="tabpanel" aria-labelledby="amenities-tab" tabindex="0">.Amenities.</div>
                        <div class="tab-pane fade" id="coworking-tab-pane" role="tabpanel" aria-labelledby="coworking-tab" tabindex="0">.Coworking..</div>
                        <div class="tab-pane fade" id="price-tab-pane" role="tabpanel" aria-labelledby="price-tab" tabindex="0">.Price Range..</div>
                        <div class="tab-pane fade" id="meeting-tab-pane" role="tabpanel" aria-labelledby="meeting-tab" tabindex="0">.meeting Rooms..</div>
                    </div>
                </div>

                <div className='continue-exploring-div'>
                    <div className='heading-div'>
                        Continue exploring spaces
                    </div>
                    <button>
                        Show more <img src={DownArrow} alt='' />
                    </button>
                </div>
            </section>
        </div>
    )
}

export default ExploreSpaces