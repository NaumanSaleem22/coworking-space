import React from 'react'
import './Footer.css'
import logo from '../assets/images/Logo.svg'
import googlePlayIcon from '../assets/images/googleplay 1.svg'
import appleStoreIcon from '../assets/images/appstore 1.svg'
function Footer() {
    return (
        <div className='footer-section'>
            <div className='logo-div'>
                <img src={logo} alt='icon' />
            </div>
            <div className='footer-outer'>
                <div className='first-div'>
                    <div className='headers'>
                        Download our App
                    </div>
                    <div className='app-store-outer'>
                        <button>
                            <img src={googlePlayIcon} alt='icon' />
                        </button>
                        <button>
                            <img src={appleStoreIcon} alt='icon' />
                        </button>
                    </div>
                </div>
                <div className='second-div'>
                    <div className='list-div'>
                        <div className='heading-div'>
                            Explore
                        </div>
                        <div className='inner-list'>
                            <div className='listname'>
                                <a href='/#'>Open Desk </a>
                            </div>
                            <div className='listname'>
                                <a href='/#'>Meeting Rooms </a>
                            </div>
                            <div className='listname'>
                                <a href='/#'>Conference Rooms </a>
                            </div>
                            <div className='listname'>
                                <a href='/#'>Private Cabins </a>
                            </div>
                        </div>
                    </div>
                    <div className='list-div'>
                        <div className='heading-div'>
                            About Us
                        </div>
                        <div className='inner-list'>
                            <div className='listname'>
                                <a href='/#'>What we do </a>
                            </div>
                            <div className='listname'>
                                <a href='/#'>Our Location </a>
                            </div>
                            <div className='listname'>
                                <a href='/#'>Articles/ Blogs </a>
                            </div>
                        </div>
                    </div>
                    <div className='list-div'>
                        <div className='heading-div'>
                            Launch Space
                        </div>
                        <div className='inner-list'>
                            <div className='listname'>
                                <a href='/#'>How to do it? </a>
                            </div>
                            <div className='listname'>
                                <a href='/#'>Get started </a>
                            </div>
                            <div className='listname'>
                                <a href='/#'>Hire us now for<br /> interior design </a>
                            </div>
                        </div>
                    </div>
                    <div className='list-div'>
                        <div className='heading-div'>
                            Contact Us
                        </div>
                        <div className='inner-list'>
                            <div className='listname'>
                                <a href='/#'>Email Us </a>
                            </div>
                            <div className='listname'>
                                <a href='/#'>Talk to us </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer