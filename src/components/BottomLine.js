import React from 'react'
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import linkedin from '../assets/images/linkedin.svg'
import instagram from '../assets/images/instagram.svg'
import './BottomLine.css'
function BottomLine() {
    return (
        <div className='bottomline-section'>
            <div className='outer-div'>
                <div className='first-div'>
                    <div className='icon-div'>
                        <a href='#/'>
                            <img src={facebook} alt='icon' />
                        </a>
                    </div>
                    <div className='icon-div'>
                        <a href='#/'>
                            <img src={linkedin} alt='icon' />
                        </a>
                    </div>
                    <div className='icon-div'>
                        <a href='#/'>
                            <img src={twitter} alt='icon' />
                        </a>
                    </div>
                    <div className='icon-div'>
                        <a href='#/'>
                            <img src={instagram} alt='icon' />
                        </a>
                    </div>
                </div>
                <div className='second-div'>
                    <div className='texts'>
                        © All Rights Reserved
                    </div>
                    <div className='texts'>
                        Suits Coworking Spaces ®
                    </div>
                    <div className='texts'>
                        Terms & Conditions - Privacy Policy - Refund Policy - Pricing - Partner Zone - Plans
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomLine