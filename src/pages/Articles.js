import React from 'react'
import './Article.css'
import NearMeIcon from '../assets/images/near-me-black.png'
import article1 from '../assets/images/article1.png'
import article2 from '../assets/images/article2.png'
import article3 from '../assets/images/article3.png'
import article4 from '../assets/images/article4.png'
import article5 from '../assets/images/article5.png'
import article6 from '../assets/images/article6.png'
import article7 from '../assets/images/article7.png'
import article8 from '../assets/images/article8.png'
import article9 from '../assets/images/article9.png'
import article10 from '../assets/images/article10.png'
import article11 from '../assets/images/article11.png'
import downArrow from '../assets/images/down-arrow-white.svg'
import aboutBanner from '../assets/images/about-banner.png'
import Slider from "react-slick";
function Articles() {
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

    };
    return (
        <div className='article-section state-space-detail-section explore-space-section customer-support-section'>
            <section className='article-banner-section'>
                <div className='slider-outer'>
                    <Slider {...settings}>
                        <div className='slider'>
                            <div className='heading'>
                                From Home Office to Suits Coworking Hub: Making the Switch
                            </div>
                            <div className='text'>
                                Working from home has its advantages, but it's not always the ideal solution for everyone...
                            </div>
                            <div className='date'>
                                SEPT 26, 2023 <span>Read more...</span>
                            </div>
                        </div>
                        <div className='slider'>
                            <div className='heading'>
                                From Home Office to Suits Coworking Hub: Making the Switch
                            </div>
                            <div className='text'>
                                Working from home has its advantages, but it's not always the ideal solution for everyone...
                            </div>
                            <div className='date'>
                                SEPT 26, 2023 <span>Read more...</span>
                            </div>
                        </div>
                        <div className='slider'>
                            <div className='heading'>
                                From Home Office to Suits Coworking Hub: Making the Switch
                            </div>
                            <div className='text'>
                                Working from home has its advantages, but it's not always the ideal solution for everyone...
                            </div>
                            <div className='date'>
                                SEPT 26, 2023 <span>Read more...</span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>

            <section className='explore-us-section'>
                <div className='heading-div'>
                    <div className='heading'>
                        <span className='colored-text'>Browse our articles </span>to learn about Suits Coworking Space
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
                                <button class="nav-link active" id="about-tab" data-bs-toggle="tab" data-bs-target="#about-tab-pane" type="button" role="tab" aria-controls="about-tab-pane" aria-selected="true">About Suits</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="startups-tab" data-bs-toggle="tab" data-bs-target="#startups-tab-pane" type="button" role="tab" aria-controls="startups-tab-pane" aria-selected="false">Startups</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="coworking-tab" data-bs-toggle="tab" data-bs-target="#coworking-tab-pane" type="button" role="tab" aria-controls="coworking-tab-pane" aria-selected="false">Coworking Culture</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="work-tab" data-bs-toggle="tab" data-bs-target="#work-tab-pane" type="button" role="tab" aria-controls="work-tab-pane" aria-selected="false" >Work Productivity</button>
                            </li>

                        </ul>
                        <div className='view-all-div'>
                            <button>
                                View All
                            </button>
                        </div>
                    </div>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="about-tab-pane" role="tabpanel" aria-labelledby="about-tab" tabindex="0">
                            <section className='top-articles-section p-0'>
                                <div className='card-outer-div'>
                                    <div className='cardss'>
                                        <div className='img-div'>
                                            <img src={article1} alt='' />
                                        </div>
                                        <div className='heading'>
                                            Breaking Boundaries: The Rise of Coworking Culture
                                        </div>
                                    </div>
                                    <div className='cardss'>
                                        <div className='img-div'>
                                            <img src={article2} alt='' />
                                        </div>
                                        <div className='heading'>
                                            Reason why you choose dedicated workspace for startup
                                        </div>
                                    </div>
                                    <div className='cardss'>
                                        <div className='img-div'>
                                            <img src={article3} alt='' />
                                        </div>
                                        <div className='heading'>
                                            Work Smart, Work Together: The Coworking Connection
                                        </div>
                                    </div>


                                    <div className='cardss'>
                                        <div className='img-div'>
                                            <img src={article5} alt='' />
                                        </div>
                                        <div className='heading'>
                                            From Home Office to Suits Coworking Hub: Making the Switch
                                        </div>
                                    </div>
                                    <div className='cardss'>
                                        <div className='img-div'>
                                            <img src={article8} alt='' />
                                        </div>
                                        <div className='heading'>
                                            How Coworking Spaces are ideal for Entrepreneurs
                                        </div>
                                    </div>
                                    <div className='cardss'>
                                        <div className='img-div'>
                                            <img src={article6} alt='' />
                                        </div>
                                        <div className='heading'>
                                            Eco-Efficient Home Renovations Platform
                                        </div>
                                    </div>
                                    <div className='cardss'>
                                        <div className='img-div'>
                                            <img src={article7} alt='' />
                                        </div>
                                        <div className='heading'>
                                            The Science of Startup Growth: Data-Driven Strategies
                                        </div>
                                    </div>
                                    <div className='cardss'>
                                        <div className='img-div'>
                                            <img src={article10} alt='' />
                                        </div>
                                        <div className='heading'>
                                            Is Your Organization Ready for Corporate Innovation?
                                        </div>
                                    </div>
                                    <div className='cardss'>
                                        <div className='img-div'>
                                            <img src={article11} alt='' />
                                        </div>
                                        <div className='heading'>
                                            Why do employers and organizers need to think about COVID-19?
                                        </div>
                                    </div>

                                </div>
                            </section>


                        </div>
                        <div class="tab-pane fade" id="startups-tab-pane" role="tabpanel" aria-labelledby="startups-tab" tabindex="0">.startup..</div>
                        <div class="tab-pane fade" id="coworking-tab-pane" role="tabpanel" aria-labelledby="coworking-tab" tabindex="0">.coworking.</div>
                        <div class="tab-pane fade" id="work-tab-pane" role="tabpanel" aria-labelledby="work-tab" tabindex="0">.work..</div>
                    </div>
                </div>

                <div className='article-show-more-btn'>
                    <button>
                        Show more <img src={downArrow} alt='' />
                    </button>
                </div>

            </section>

        </div>
    )
}

export default Articles