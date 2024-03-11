import React from 'react'
import './OpendeskRoom.css'
import RoomImg1 from '../assets/images/room-img-1.png'
import RoomImg2 from '../assets/images/room-img-2.png'
import RoomImg3 from '../assets/images/room-img-3.png'
import RoomImg4 from '../assets/images/room-img-4.png'
import BecomeMember from '../assets/images/become-member.png'
import GreaterThanIcon from '../assets/images/greater-than.svg'
import GreaterThanBlackIcon from '../assets/images/greater-than-black.svg'
import GreaterThanColoredIcon from '../assets/images/greater-than-colored.svg'
import OpenDesk from '../assets/images/open-desk-img.png'
import MeetingRoom from '../assets/images/meeting-room.png'
import privateCabin from '../assets/images/private-cabin.png'
import ConferenceRoom from '../assets/images/conference-room-img.png'
import ListTick from '../assets/images/list-tick.svg'
import FlexibleWork from '../assets/images/flexible-work-icon.svg'
import Networking from '../assets/images/networking-opportunities-icon.svg'
import Access from '../assets/images/access-premium-icon.svg'
import inspiring from '../assets/images/inspiring-ambiance-icon.svg'
import costEffective from '../assets/images/cost-effection-icon.svg'
import convenient from '../assets/images/convenient-location-icon.png'
import step1Img from '../assets/images/step-1-img.png'
import step2Img from '../assets/images/step-2-img.png'
import step3Img from '../assets/images/step-3-img.png'
import slide1 from '../assets/images/slide-1.png'
import slide2 from '../assets/images/slide-2.png'
import slide3 from '../assets/images/slide-3.png'
import Slider from "react-slick";

const CustomArrow = ({ onClick, direction }) => {
    return (
        <div className={`custom-arrow ${direction}`} onClick={onClick}>
            {direction === 'prev' ? '<' : '>'}
        </div>
    );
};


function OpendeskRoom() {
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
        <div className='rooms-section'>
            {/* banner section */}
            <section className='room-banner-section'>
                <div className='outer-div'>
                    <div className='content-div-outer'>
                        <div className='content-div'>
                            <div className='heading'>
                                Open Desk <span className='colored-text'>.</span>
                            </div>
                            <div className='desc'>
                                Welcome to our vibrant open desk area! Designed for dynamic professionals, freelancers, and entrepreneurs, our space offers an ideal environment to thrive, whether you prefer a quiet corner for focused work or seek an atmosphere buzzing with creativity.
                            </div>
                            <div className='btn-outer'>
                                <button className='colored-btn'>Get a Quote <img src={GreaterThanIcon} alt='' /></button>
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

            {/* find desk banner */}
            <section className='find-perfect-desk-section'>
                <div className='content-div'>
                    <div className='heading-div'>
                        Find your perfect dedicated Desk
                    </div>
                    <div className='desc'>
                        Our Ergonomic Desks in a Co-working Environment are meticulously crafted to elevate your work experience.
                    </div>
                    <div className='btn-div'>
                        <button>
                            Search in your nearest Location <img src={GreaterThanIcon} alt='' />
                        </button>
                    </div>
                </div>
            </section>

            {/* you may like section */}
            <section className='pricing-section'>
                <div className='heading-content-div'>
                    <div className='heading-div'>
                        <span className='colored-text'>Popular Open desk </span>you may like!
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
                                Get a Quote <img src={GreaterThanIcon} alt='' />
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
                                Get a Quote <img src={GreaterThanIcon} alt='' />
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
                                    Book a Consultation <img src={GreaterThanBlackIcon} alt='' />
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
                                Get a Quote <img src={GreaterThanIcon} alt='' />
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
                                Get a Quote <img src={GreaterThanIcon} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='explore-card'>
                        <div className='content-div'>
                            <div className='heading-div'>
                                Looking for a Open desk area nearest to your location?
                            </div>
                            <div className='btn-div'>
                                <button>
                                    Explore all <img src={GreaterThanBlackIcon} alt='' />
                                </button>
                            </div>
                        </div>
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
                        What we do to serve your best
                    </div>
                    <div className='desc'>
                        Our services encompass a wide range of offerings to meet your needs
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

            {/* Optimized workstation slider */}
            <section className='optimized-workstation-slider-section'>
                <div className='header-outer'>
                    <div className='heading-div'>
                        Optimized Workstations
                        for <span className='colored-text'>High Productivity</span> in a Collaborative Environment
                    </div>
                    <div className='desc'>
                        Our Ergonomic Desks in a Co-working Environment are meticulously crafted to elevate your work experience.
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


            {/* Book in 3 steps */}
            <section className='book-steps-section'>
                <div className='heading-div'>
                    Book an open desk in 3 easy steps
                </div>
                <div className='outer-steps-div'>
                    <div className='step-card-inner'>
                        <div className='count-div'>
                            01
                        </div>
                        <div className='img-div'>
                            <img src={step1Img} alt='' />
                        </div>
                        <div className='content-div'>
                            <div className='heading'>
                                Explore
                            </div>
                            <div className='text'>
                                Browse for open desk & Choose the preferred room, location, amenities, and duration.
                            </div>
                        </div>
                    </div>
                    <div className='step-card-inner'>
                        <div className='count-div colored-count'>
                            02
                        </div>
                        <div className='img-div'>
                            <img src={step2Img} alt='' />
                        </div>
                        <div className='content-div colored-content-div'>
                            <div className='heading'>
                                Customize
                            </div>
                            <div className='text'>
                                Verify space availability on desired dates and customize your booking & review pricing options.
                            </div>
                        </div>
                    </div>
                    <div className='step-card-inner'>
                        <div className='count-div'>
                            03
                        </div>
                        <div className='img-div'>
                            <img src={step3Img} alt='' />
                        </div>
                        <div className='content-div'>
                            <div className='heading'>
                                Reservation
                            </div>
                            <div className='text'>
                                Complete the booking process by providing necessary details, making payment, and receiving instant confirmation.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OpendeskRoom