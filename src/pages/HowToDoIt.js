import React from 'react'
import GreaterThanIcon from '../assets/images/greater-than.svg'
import BannerImg from '../assets/images/howtodoitbanner.png'
import step1 from '../assets/images/howstep1.png'
import step2 from '../assets/images/howstep2.png'
import step3 from '../assets/images/howstep3.png'
import './HowToDoIt.css'

function HowToDoIt() {
    return (
        <div className='how-to-do-it-section customer-support-section'>
            <section className='banner-section'>
                <div className='outer-div'>
                    <div className='content-div'>
                        <div className='heading-div'>
                            <span className='colored-text'>Create an effective & adaptable </span>workspace environment<span className='colored-text'>.</span>
                        </div>
                        <div className='desc'>
                            Our skilled interior designers will craft a tailored design proposal aligned with Suits standards. Let’s be partners, Join us now!
                        </div>
                        <div className='btn-div'>
                            <button>
                                Hire our Interior Designers <img src={GreaterThanIcon} alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='img-div'>

                        <img src={BannerImg} alt='' />
                    </div>
                </div>
            </section>

            <section className='explore-steps-section'>
                <div className='main-heading'>
                    Explore the 3 Steps to Launch Your Space
                </div>
                <div className='img-content-outer'>
                    <div className='img-div'>
                        <img src={step1} alt='' />
                    </div>
                    <div className='content-div'>
                        <div className='heading-div'>
                            01 Assessment
                        </div>
                        <div className='desc'>
                            Share details about your workspace and requirements. Let us understand your vision to transform your space into a Suits-approved environment.
                        </div>
                    </div>
                </div>
                <div className='img-content-outer content-image-outer'>
                    <div className='img-div'>
                        <img src={step2} alt='' />
                    </div>
                    <div className='content-div'>
                        <div className='heading-div'>
                            02 Design Proposal
                        </div>
                        <div className='desc'>
                            Our skilled interior designers will craft a tailored design proposal aligned with Suits standards. Explore our portfolio of innovative designs and envision your workspace transformation.
                        </div>
                    </div>
                </div>
                <div className='img-content-outer'>
                    <div className='img-div'>
                        <img src={step3} alt='' />
                    </div>
                    <div className='content-div'>
                        <div className='heading-div'>
                            03 Implementation
                        </div>
                        <div className='desc'>
                            Once the design is approved, our team will commence the transformation process. Sit back and watch as your space evolves into an inspiring and functional environment.
                        </div>
                    </div>
                </div>
            </section>

            <section className='lets-be-partner-section'>
                <div className='heading-div'>
                    Start Your Suits-Inspired Transformation Today!
                </div>
                <div className='desc'>
                    Unlock the potential of your workspace today! Join us on this transformative journey toward a Suits-approved environment.
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

export default HowToDoIt