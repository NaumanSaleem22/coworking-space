import React from 'react'
import './OpendeskRoom.css'
import './CustomerSupport.css'
import RoomImg1 from '../assets/images/room-img-1.png'
import RoomImg2 from '../assets/images/room-img-2.png'
import RoomImg3 from '../assets/images/room-img-3.png'
import RoomImg4 from '../assets/images/room-img-4.png'
import GreaterThanIcon from '../assets/images/greater-than.svg'
import GreaterThanIconBlack from '../assets/images/greater-than-black.svg'
import GreaterThanColoredIcon from '../assets/images/greater-than-colored.svg'
import AssistanceIcon from '../assets/images/product-assistance.svg'
import BillingIcon from '../assets/images/billing.svg'
import TechnicalIcon from '../assets/images/technical-support.svg'
import ManagementIcon from '../assets/images/account-management.svg'
import FeedbackIcon from '../assets/images/feedback-and-suggestion.svg'
import slide1 from '../assets/images/slide-1.png'
import slide2 from '../assets/images/slide-2.png'
import slide3 from '../assets/images/slide-3.png'
import article1 from '../assets/images/article1.png'
import article2 from '../assets/images/article2.png'
import article3 from '../assets/images/article3.png'
import article4 from '../assets/images/article4.png'
import article5 from '../assets/images/article5.png'
import Slider from "react-slick";

const CustomArrow = ({ onClick, direction }) => {
    return (
        <div className={`custom-arrow ${direction}`} onClick={onClick}>
            {direction === 'prev' ? '<' : '>'}
        </div>
    );
};

function CustomerSupport() {
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 2.9,
        slidesToScroll: 1,
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2.5, // Adjust the number of slides for screens up to 1440 pixels
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Adjust the number of slides for screens up to 1024 pixels
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Adjust the number of slides for screens up to 1024 pixels
                }
            },
            // Add more breakpoints and settings as needed
        ],
    };
    return (
        <div className='customer-support-section rooms-section'>
            <section className='room-banner-section'>
                <div className='outer-div'>
                    <div className='content-div-outer'>
                        <div className='content-div'>
                            <div className='heading'>
                                Customer Support <span className='colored-text'>.</span>
                            </div>
                            <div className='desc'>
                                We're here to assist you every step of the way. Please feel free to reach out to our dedicated support team for prompt assistance with any inquiries or concerns. Your satisfaction is our priority.
                            </div>
                            <div className='btn-outer'>
                                <button className='colored-btn'>Log In to Suits <img src={GreaterThanIcon} alt='' /></button>
                                <button className='hollow-btn'>Need an Assistance <img src={GreaterThanColoredIcon} alt='' /></button>
                            </div>
                            <div className='trusted-preferred'>
                                <div className='heading-trusted'>
                                    Trusted and preferred by
                                </div>
                                <div className='counter-outer'>
                                    <div className='counter'>
                                        <div className='count'>15k+</div>
                                        <div className='desc'>Companies</div>
                                    </div>
                                    <div className='counter'>
                                        <div className='count'>10k+</div>
                                        <div className='desc'>Userbase</div>
                                    </div>
                                    <div className='counter'>
                                        <div className='count'>50+</div>
                                        <div className='desc'>Industry Experts</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='img-outer-div'>
                        <div className='first-row'>
                            <div className='first-column'>
                                <img src={RoomImg1} alt='' />
                            </div>
                            <div className='second-column'>
                                <img src={RoomImg2} alt='' />
                            </div>
                        </div>
                        <div className='second-row'>
                            <div className='first-column'>
                                <img src={RoomImg3} alt='' />
                            </div>
                            <div className='second-column'>
                                <img src={RoomImg4} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='contact-support-section'>
                <div className='heading-div'>
                    <div className='headingss'>
                        Getting Support through us!
                    </div>
                    <div className='textt'>
                        Our customer support is dedicated to assisting you promptly and effectively.
                    </div>
                </div>

                <div className='support-outer-div'>
                    <div className='icon-and-text'>
                        <div className='icon-div'>
                            <img src={AssistanceIcon} alt='' />
                        </div>
                        <div className='text-div'>
                            Product Assistance
                        </div>
                    </div>
                    <div className='icon-and-text'>
                        <div className='icon-div'>
                            <img src={BillingIcon} alt='' />
                        </div>
                        <div className='text-div'>
                            Billing Inquiries
                        </div>
                    </div>
                    <div className='icon-and-text'>
                        <div className='icon-div'>
                            <img src={TechnicalIcon} alt='' />
                        </div>
                        <div className='text-div'>
                            Technical Support
                        </div>
                    </div>
                    <div className='icon-and-text'>
                        <div className='icon-div'>
                            <img src={ManagementIcon} alt='' />
                        </div>
                        <div className='text-div'>
                            Account Management
                        </div>
                    </div>
                    <div className='icon-and-text'>
                        <div className='icon-div'>
                            <img src={FeedbackIcon} alt='' />
                        </div>
                        <div className='text-div'>
                            Feedback and Suggestions
                        </div>
                    </div>
                </div>
            </section>

            <section className='optimized-workstation-slider-section optimized-workstation-slider-section-without-bg'>
                <div className='header-outer'>
                    <div className='heading-div'>
                        Let Our Customers Know,<br />
                        <span className='colored-text'>How We Can Help Them?</span>
                    </div>
                    <div className='desc'>
                        We're here to assist you every step of the way. Please feel free to reach out to our dedicated support team for prompt assistance with any inquiries or concerns. Your satisfaction is our priority.
                    </div>
                </div>
                <div className='slider-div'>
                    <Slider {...settings}>
                        <div className='slider-card'>
                            <img src={slide1} alt='' />
                        </div>
                        <div className='slider-card'>
                            <img src={slide2} alt='' />
                        </div>
                        <div className='slider-card'>
                            <img src={slide3} alt='' />
                        </div>
                        <div className='slider-card'>
                            <img src={slide2} alt='' />
                        </div>
                        <div className='slider-card'>
                            <img src={slide1} alt='' />
                        </div>
                        <div className='slider-card'>
                            <img src={slide3} alt='' />
                        </div>
                    </Slider>
                </div>
            </section>

            <section className='here-to-help-section'>
                <div className='outer-div'>
                    <div className='content-div'>
                        <div className='heading-div'>
                            We are here to help you!
                        </div>
                        <div className='descc'>
                            Please log in to get help with your queries and questions on booking, launching a space, and more.
                        </div>
                    </div>
                    <div className='btn-div'>
                        <button>Log in or sign up</button>
                    </div>
                </div>
            </section>

            <section className='top-articles-section'>
                <div className='heading-div'>
                    <div className='heading'>
                        Top Articles
                    </div>
                    <div className='linkk'>
                        <a href='/#'>Browse our articles to know more <img src={GreaterThanIcon} alt='' /></a>
                    </div>
                </div>

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
                </div>
                <div className='card-outer-div'>
                    <div className='cardss'>
                        <div className='img-div'>
                            <img src={article4} alt='' />
                        </div>
                        <div className='heading'>
                            From Home Office to Suits Coworking Hub: Making the Switch
                        </div>
                    </div>
                    <div className='cardss'>
                        <div className='img-div'>
                            <img src={article5} alt='' />
                        </div>
                        <div className='heading'>
                            How Coworking Spaces are ideal for Entrepreneurs
                        </div>
                    </div>
                    <div className='cardss get-in-touch'>
                        <div className='main-heading'>
                            Get in touch with Suit’s team!
                        </div>
                        <div className='desc'>
                            We’re here for you 24/7. Please feel free to contact us anytime. We’ll get back to you as soon as possible.
                        </div>
                        <button>
                            Contact Us <img src={GreaterThanIconBlack} alt='' />
                        </button>
                    </div>
                </div>
            </section>

            <section className='faq-section'>
                <div className='heading-outer'>
                    <div className='heading'>
                        We <span className='colored-text'>Answer Your Questions</span> On Coworking Space
                    </div>
                    <div className='desc'>
                        At Suits coworking space, our team is waiting to answer your queries and provide the best possible solutions. Have a look at the answers to commonly asked questions.
                    </div>
                </div>
                <div className='faq-outer'>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Can I rent fully furnished offices at Suits Coworking Spaces?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Yes, you can rent fully furnished offices at Suits Coworking Spaces. Our furnished office spaces are designed to provide a comfortable and functional environment, equipped with everything you need to kickstart your work.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Can I rent fully furnished offices at Suits Coworking Spaces?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Can I rent fully furnished offices at Suits Coworking Spaces?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Can I rent fully furnished offices at Suits Coworking Spaces?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Can I rent fully furnished offices at Suits Coworking Spaces?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CustomerSupport