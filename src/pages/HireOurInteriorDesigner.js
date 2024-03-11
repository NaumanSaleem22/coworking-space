import React from 'react'
import './TalkOurExpert.css'
import CallIcon from '../assets/images/call-icon.svg'

function HireOurInteriorDesigner() {
    return (
        <div className='talkexpert-section'>
            <div className='heading-div'>
                Hire our <span className='colored-text'>Interior Designers.</span>
            </div>
            <div className='outer-div'>
                <div className='form-div'>
                    <form>
                        <div className='input-div'>
                            <input type='text' placeholder='Full name*' />
                        </div>
                        <div className='input-div'>
                            <input type='email' placeholder='Email Address*' />
                        </div>
                        <div className='input-div'>
                            <input type='text' placeholder='Phone Number*' />
                        </div>
                        <div className='input-div'>
                            <input type='text' placeholder='Property Name' />
                        </div>
                        <div className='input-div spacer'>
                            <input type='text' placeholder='Tell us more here...' />
                        </div>
                        <div className='checkbox-div'>
                            <input type='checkbox' /> <label>Send WhatsApp Updates</label>
                        </div>
                        <div className='submit-div'>
                            <input type='submit' value="Enquire Now >" />
                        </div>
                    </form>
                    <div className='privacy-text'>
                        * By selecting this, you acknowledge and agree to our privacy policy.<a href='/#'> [Privacy Policy]</a>
                    </div>
                </div>
                <div className='content-div'>
                    <div className='heading-div'>
                        Please feel free to reach out to our dedicated support team anytime!
                    </div>
                    <div className='desc'>
                        Questions about plans, pricing, or availability? Just call our expert.
                    </div>
                    <div className='call-div'>
                        <div className='icon'>
                            <img src={CallIcon} alt='' />
                        </div>
                        <div className='text'>
                            Call Us: 0123456789
                        </div>
                    </div>
                    <div className='heading-div'>
                        Find an answer fast
                    </div>
                    <div className='desc'>
                        Check out our comprehensive <a href='/#'>Customer Support & FAQ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HireOurInteriorDesigner