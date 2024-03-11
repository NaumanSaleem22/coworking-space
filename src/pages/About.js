import React from 'react'
import AboutBanner1 from '../assets/images/about-1.png'
import AboutBanner2 from '../assets/images/about-2.png'
import greaterThanIcon from '../assets/images/greater-than.svg'
import GreaterThanIconBlack from '../assets/images/greater-than-black.svg'
import AboutImg4 from '../assets/images/about-img-4.png'
import article1 from '../assets/images/article1.png'
import article2 from '../assets/images/article2.png'
import article3 from '../assets/images/article3.png'
import article4 from '../assets/images/article4.png'
import article5 from '../assets/images/article5.png'
import './OpendeskRoom.css'
import './About.css'
function About() {
    return (
        <div className='about-section rooms-section customer-support-section'>
            <section className='banner-section'>
                <div className='heading-div'>
                    <div className='colored-heading'>
                        Empowering Your Success:

                    </div>
                    <div className='normal-heading'>
                        Our Story, Your Workspace Journey <span className='colored-heading'>.</span>
                    </div>
                </div>
                <div className='outer-div'>
                    <div className='img-outer-div'>
                        <div className='img1-div'>
                            <img src={AboutBanner1} alt='' />
                        </div>
                        <div className='img2-div'>
                            <img src={AboutBanner2} alt='' />
                        </div>
                    </div>
                    <div className='content-div'>
                        <ul>
                            <li>
                                Our mission is to create a collaborative environment that nurtures <strong>innovation, fosters creativity, and empowers professionals to thrive.</strong>
                            </li>
                            <li>
                                Founded in 2021, We have evolved from a shared workspace to a <strong>thriving community</strong> of diverse professionals, entrepreneurs, and freelancers.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='numbering-section'>
                <div className='outer-div'>
                    <div className='number-div'>
                        01
                    </div>
                    <div className='heading-div'>
                        <span>Work Your Way:</span> A Flexible Workspace
                    </div>
                    <div className='secondary-heading-div'>
                        Welcome to our versatile workspace designed for your flexibility.
                    </div>
                    <div className='text-div'>
                        Our diverse range of workspace solutions adapts to your unique needs, providing the perfect environment to work efficiently, collaborate seamlessly, and thrive professionally.
                        <br /> <br />
                        Explore our offerings to find the ideal workspace for you
                    </div>
                    <div className='btn-div'>
                        <button>
                            Explore Our Workspace Solutions <img src={greaterThanIcon} alt='' />
                        </button>
                    </div>
                </div>
            </section>
            <section className='numbering-section'>
                <div className='outer-div'>
                    <div className='number-div'>
                        02
                    </div>
                    <div className='heading-div'>
                        <span>Work Your Way:</span> Partner as Landlords
                    </div>
                    <div className='secondary-heading-div'>
                        Partner with us to redefine workspaces of the future.

                    </div>
                    <div className='text-div'>

                        As landlords, collaborating with our dynamic coworking platform opens doors to innovative possibilities. Join hands with us to transform your space into a thriving hub for professionals, entrepreneurs, and creatives.
                        <br /><br />
                        Let's shape the future of work together.
                    </div>
                    <div className='btn-div'>
                        <button>
                            Partner with Our Coworking Platform <img src={greaterThanIcon} alt='' />
                        </button>
                    </div>
                </div>
            </section>

            <section className='parallel-section'>
                <div className='outer-div'>
                    <div className='content-div'>
                        <div className='heading-div'>
                            With Great Interiors,<br />
                            <span className='colored-text'>Comes Better Opportunities !</span>
                        </div>
                        <div className='text-div'>
                            <p>
                                Started with the vision to provide customised workspaces for people engaged
                                in different business. Our workspaces are highly
                                customised to meet the daily needs of your businesses.
                            </p>

                            <p className='colored-text'>
                                At present we are highly motivated to scale our workspaces
                                to meet the demands of professionals such as Chartered
                                Accountants, Lawyers, Doctors, Software Engineers and
                                design exclusive studios for aspiring
                                Architects & Designers.
                            </p>
                            <p>
                                Our goal is to inculcate a trendy cafe look in Office
                                Interiors which helps in boosting your working capacity
                                and improvises your design thinking!
                            </p>
                        </div>

                    </div>
                    <div className='img-div'>
                        <img src={AboutImg4} alt='' />
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
                            Search in your nearest Location <img src={greaterThanIcon} alt='' />
                        </button>
                    </div>
                </div>
            </section>


            <section className='top-articles-section'>
                <div className='heading-div'>
                    <div className='heading'>
                        Top Articles
                    </div>
                    <div className='linkk'>
                        <a href='/#'>Browse our articles to know more <img src={greaterThanIcon} alt='' /></a>
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
                    {/* </div>
                <div className='card-outer-div'> */}
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
        </div>
    )
}

export default About