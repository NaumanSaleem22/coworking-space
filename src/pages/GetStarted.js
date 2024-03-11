import React from 'react'
import getStartedBanner from "../assets/images/get-started-banner.png"
import greaterThanIconWhite from '../assets/images/greater-than.svg'
import greaterThanIconOrange from '../assets/images/greater-than-colored.svg'
import getStartedimg1 from '../assets/images/get-started-img1.png'
import Benefit1 from '../assets/images/benefit-1.svg'
import Benefit2 from '../assets/images/benefit2.svg'
import Benefit3 from '../assets/images/benefit3.svg'
import Benefit4 from '../assets/images/benefit4.svg'
import Versatile1 from '../assets/images/versatile1.png'
import Versatile2 from '../assets/images/versatile2.png'
import bene1 from '../assets/images/card-bene-1.png'
import bene2 from '../assets/images/card-bene-2.png'
import bene3 from '../assets/images/card-bene-3.png'
import GreaterThanIcon from '../assets/images/greater-than.svg'
import './GetStarted.css'

function GetStarted() {
    return (
        <div className='getStarted-section how-to-do-it-section  customer-support-section'>
            <section className='get-startedbanner-section'>
                <div className='outer-div'>
                    <div className='img-div'>
                        <img src={getStartedBanner} alt='img here' />
                    </div>
                    <div className='content-div'>

                        <div className='heading-text'>
                            Transform your workspace into a <span className='colored-heading'>thriving hub with us
                            </span>
                        </div>
                        <div className='desc'>
                            Whether you're a property owner or landlord seeking to elevate your space to Suits standards or an interior designer looking to collaborate, let's embark on this journey together.
                        </div>
                        <div className='bottom-desc'>
                            Ready to elevate your workspace to the next level?
                        </div>
                        <div className='btn-outer'>
                            <button className='colored-btn'>Partner with Us <img src={greaterThanIconWhite} alt='' /></button>
                            <button className='hollow-btn'>Book a Consultation <img src={greaterThanIconOrange} alt='' /></button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='why-choose-section'>
                <div className='outer-div'>
                    <div className='content-div'>
                        <div className='heading-div'>
                            Why Choose<span className='colored-text'> Suits for Your Workspace?</span>
                        </div>
                        <div className='desc'>
                            <p>
                                At Suits, we understand the importance of a
                                well-designed workspace. By joining forces with us,
                                you gain access to our expert interior designers who
                                specialize in crafting spaces tailored to the Suits
                                standards.
                            </p>
                            <p>
                                We blend functionality with aesthetics to create environments
                                that inspire productivity and innovation.
                            </p>
                        </div>
                    </div>
                    <div className='img-div'>
                        <img src={getStartedimg1} alt='' />
                    </div>
                </div>
            </section>

            <section className='benefits-section'>
                <div className='heading-div'>
                    Benefits of Partnering with Suits
                </div>
                <div className='outer-card-div'>
                    <div className='benefit-card'>
                        <div className='icon-div'>
                            <img src={Benefit1} alt='' />
                        </div>
                        <div className='desc'>
                            Access to top-tier interior designers with
                            expertise in Suits standards.
                        </div>
                    </div>
                    <div className='benefit-card'>
                        <div className='icon-div'>
                            <img src={Benefit2} alt='' />
                        </div>
                        <div className='desc'>
                            Customized design proposals tailored to suit your workspace needs.
                        </div>
                    </div>
                    <div className='benefit-card'>
                        <div className='icon-div'>
                            <img src={Benefit3} alt='' />
                        </div>
                        <div className='desc'>
                            Elevate your space to attract premium clients and maximize your ROI.
                        </div>
                    </div>
                    <div className='benefit-card'>
                        <div className='icon-div'>
                            <img src={Benefit4} alt='' />
                        </div>
                        <div className='desc'>
                            Seamless implementation and guidance throughout the transformation process.
                        </div>
                    </div>
                </div>
            </section>

            <section className='versatile-section'>
                <div className='heading-div'>
                    Establish a thriving and versatile workspace setting
                </div>
                <div className='outer-div'>
                    <div className='img-div'>
                        <img src={Versatile1} alt='' />
                    </div>
                    <div className='content-div'>
                        <div className='heading-div'>
                            Building Owners
                        </div>
                        <div className='descc'>
                            <p>
                                No matter the scale of your property, whether it's a single floor or multiple buildings, we can assist in swiftly enhancing your income potential.
                            </p>
                            <p>
                                Experience immediate advantages in sales, marketing, design, and quick occupancy, avoiding extended vacant periods, alongside a multitude of additional perks.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='outer-div snd-outer'>

                    <div className='content-div'>
                        <div className='heading-div'>
                            Workspace Collaborators
                        </div>
                        <div className='descc'>
                            <p>
                                The company seeks collaboration with entrepreneurs and franchise investors interested in expanding within the flexible workspace industry.

                            </p>
                            <p>

                                Suits provides support and resources for those aiming to seize commercial opportunities and drive growth in this rapidly evolving sector.
                            </p>
                        </div>
                    </div>
                    <div className='img-div'>
                        <img src={Versatile2} alt='' />
                    </div>
                </div>
            </section>

            <section className='join-us-section'>
                <div className='content-div'>
                    <div className='heading-div'>
                        Want to join with us as Suit’s Interior Designer?<br />
                        <span className='colored-text'>Learn what we need from you.</span>
                    </div>
                    <ul>
                        <li>
                            Seeking to be agile in transforming spaces?
                        </li>
                        <li>
                            With over 5 years of experience in the interior design industry?
                        </li>
                        <li>
                            Do you lead a passionate team of interior designers and site supervisors?
                        </li>
                    </ul>
                </div>
                <div className='outer-div'>
                    <div className='descc'>
                        If this sounds like you, let's connect and get started on transforming coworking spaces together.
                    </div>
                    <div className='btn-div'>
                        <button>
                            I'm Interested <img src={greaterThanIconWhite} alt='' />
                        </button>
                    </div>
                </div>

            </section>

            <section className='benefits-interior-section'>
                <div className='heading-div'>
                    Benefits you get as our Interior Designers!
                </div>
                <div className='outer-div'>
                    <div className='card-beni'>
                        <div className='icon-div'>
                            <img src={bene1} alt='' />
                        </div>
                        <div className='desc'>
                            Ensure prompt payments & secure financial support as you expand your business.
                        </div>
                    </div>
                    <div className='card-beni'>
                        <div className='icon-div'>
                            <img src={bene2} alt='' />
                        </div>
                        <div className='desc'>
                            Receive a steady stream of leads each month, ensuring dependable business predictability.
                        </div>
                    </div>
                    <div className='card-beni'>
                        <div className='icon-div'>
                            <img src={bene3} alt='' />
                        </div>
                        <div className='desc'>
                            Gain exclusive access to specialized tools, enabling seamless quoting, and efficient project management.
                        </div>
                    </div>
                </div>
            </section>

            <section className='lets-be-partner-section get-started-bg'>
                <div className='heading-div'>
                    Start Your Suits-Inspired Transformation Today!
                </div>
                <div className='desc'>
                    Unlock the potential of your workspace today! Join us on this transformative journey toward <br /> a Suits-approved environment.
                </div>
                <div className='btn-div'>
                    <button>
                        Let's be partners <img src={GreaterThanIcon} alt='' />
                    </button>
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

export default GetStarted