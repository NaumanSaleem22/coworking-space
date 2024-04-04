import React from 'react'
import './OpendeskRoom.css'
import RoomImg1 from '../assets/images/room-img-1.png'
import RoomImg2 from '../assets/images/room-img-2.png'
import RoomImg3 from '../assets/images/room-img-3.png'
import RoomImg4 from '../assets/images/room-img-4.png'
import GreaterThanIcon from '../assets/images/greater-than.svg'
import step1Img from '../assets/images/step-1-img.png'
import step2Img from '../assets/images/step-2-img.png'
import step3Img from '../assets/images/step-3-img.png'
import slide1 from '../assets/images/slide-1.png'
import slide2 from '../assets/images/slide-2.png'
import slide3 from '../assets/images/slide-3.png'
import Printing from '../assets/images/printing-service.svg'
import scanner from '../assets/images/scanner.svg'
import library from '../assets/images/library.svg'
import securecabinets from '../assets/images/secure-cabinets.svg'
import softdrinks from '../assets/images/soft-drinks.svg'
import extraStorage from '../assets/images/extra-storage.svg'
import exclusiveWorkshops from '../assets/images/exclusive-workspace.svg'
import tickIcon from '../assets/images/tick-icon.svg'
import Slider from "react-slick";

const CustomArrow = ({ onClick, direction }) => {
    return (
        <div className={`custom-arrow ${direction}`} onClick={onClick}>
            {direction === 'prev' ? '<' : '>'}
        </div>
    );
};


function Membership() {
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
                <div className='outer-div membership-outer-div'>
                    <div className='content-div-outer membership-content-div-outer-bg'>
                        <div className='content-div'>
                            <div className='heading'>
                                Membership <span className='colored-text'>.</span>
                            </div>
                            <div className='desc'>
                                Welcome to Suits Coworking Space, where innovation meets collaboration. Discover a diverse range of membership plans meticulously designed to suit your unique work style and elevate your professional journey.
                            </div>
                            <div className='btn-outer'>
                                <button className='colored-btn'>Buy Now <img src={GreaterThanIcon} alt='' /></button>
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

            {/* Membership premium amenities */}
            <section className='membership-amenities-section'>
                <div className='heading-div'>
                    Membership Premium Amenities
                </div>
                <div className='textt'>
                    Experience the convenience, flexibility, and support our space offers.
                </div>
                <hr className='hr-line' />
                <div className='amenities-outer'>
                    <div className='amenity-div'>
                        <img src={Printing} alt='' /> Printing Service
                    </div>
                    <div className='amenity-div'>
                        <img src={scanner} alt='' /> Scanner
                    </div>
                    <div className='amenity-div'>
                        <img src={library} alt='' /> library
                    </div>
                    <div className='amenity-div'>
                        <img src={securecabinets} alt='' /> Secure Cabinets
                    </div>
                    <div className='amenity-div'>
                        <img src={softdrinks} alt='' /> Soft Drinks
                    </div>
                    <div className='amenity-div'>
                        <img src={extraStorage} alt='' /> Extra Storage
                    </div>
                    <div className='amenity-div'>
                        <img src={exclusiveWorkshops} alt='' /> Exclusive Workshops
                    </div>

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
                        <div className='membership-content-div'>
                            <div className='heading'>
                                xDesk Membership | INR 6000+GST / Month
                            </div>
                            <div className='text'>
                                Whether you're a freelancer or a professional seeking a personal desk, the xDesk Membership is a fantastic starting point.
                            </div>
                            <div className='list-outer'>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Personal Desk
                                </div>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Printer/ Scanner
                                </div>
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
                        <div className='membership-content-div'>
                            <div className='heading'>
                                3xDesk Membership | INR 6000+GST / Month
                            </div>
                            <div className='text'>
                                Whether you're a freelancer or a professional seeking a personal desk, the xDesk Membership is a fantastic starting point.
                            </div>
                            <div className='list-outer'>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Personal Desk
                                </div>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Printer/ Scanner
                                </div>
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
                        <div className='membership-content-div'>
                            <div className='heading'>
                                5xDesk Membership | INR 6000+GST / Month
                            </div>
                            <div className='text'>
                                Whether you're a freelancer or a professional seeking a personal desk, the xDesk Membership is a fantastic starting point.
                            </div>
                            <div className='list-outer'>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Personal Desk
                                </div>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Printer/ Scanner
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='outer-steps-div'>
                    <div className='step-card-inner'>
                        <div className='count-div'>
                            04
                        </div>
                        <div className='img-div'>
                            <img src={step1Img} alt='' />
                        </div>
                        <div className='membership-content-div'>
                            <div className='heading'>
                                xDesk Membership | INR 6000+GST / Month
                            </div>
                            <div className='text'>
                                Whether you're a freelancer or a professional seeking a personal desk, the xDesk Membership is a fantastic starting point.
                            </div>
                            <div className='list-outer'>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Personal Desk
                                </div>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Printer/ Scanner
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='step-card-inner'>
                        <div className='count-div colored-count'>
                            05
                        </div>
                        <div className='img-div'>
                            <img src={step2Img} alt='' />
                        </div>
                        <div className='membership-content-div'>
                            <div className='heading'>
                                xDesk Membership | INR 6000+GST / Month
                            </div>
                            <div className='text'>
                                Whether you're a freelancer or a professional seeking a personal desk, the xDesk Membership is a fantastic starting point.
                            </div>
                            <div className='list-outer'>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Personal Desk
                                </div>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Printer/ Scanner
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='step-card-inner'>
                        <div className='count-div'>
                            06
                        </div>
                        <div className='img-div'>
                            <img src={step3Img} alt='' />
                        </div>
                        <div className='membership-content-div'>
                            <div className='heading'>
                                xDesk Membership | INR 6000+GST / Month
                            </div>
                            <div className='text'>
                                Whether you're a freelancer or a professional seeking a personal desk, the xDesk Membership is a fantastic starting point.
                            </div>
                            <div className='list-outer'>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Personal Desk
                                </div>
                                <div className='list-div'>
                                    <img src={tickIcon} alt='' /> Printer/ Scanner
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Optimized workstation slider */}
            <section className='optimized-workstation-slider-section membership-slider-section'>
                <div className='header-outer'>
                    <div className='heading-div'>
                        Optimized Workstations
                        for <span className='colored-text'>High Productivity</span> in a Collaborative Environment
                    </div>
                    <div className='desc'>
                        Our Ergonomic Desks in a Co-working Environment are meticulously crafted to elevate your work experience.
                    </div>
                </div>
                <div className='slider-div membership-slider'>
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
                <div className='ready-to-elevate'>
                    <div className='heading-div'>
                        Ready to elevate your work experience?
                    </div>
                    <div className='text-div'>
                        Enjoy access to high-speed internet, modern meeting rooms equipped with state-of-the-art technology, and 24/7 secure access to our inspiring workspace. Elevate your work experience with complimentary refreshments, wellness areas, and concierge services that simplify your day.
                    </div>
                    <div className='btn-div'>
                        <button> Apply for a membership <img src={GreaterThanIcon} alt='' /></button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Membership