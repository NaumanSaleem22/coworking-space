import React from 'react';
import './Header.css';
import Logo from '../assets/images/Logo.svg'
import CallIcon from '../assets/images/call-icon.svg'
import AccountIcon from '../assets/images/Account.svg'
import ConferenceIcon from '../assets/images/conference-room-icon.svg'
import MeetingRoomIcon from '../assets/images/meeting-room-icon.svg'
import MemberShipIcon from '../assets/images/membership-icon.svg'
import PrivateCabinIcon from '../assets/images/private-cabin-icon.svg'
import OpenDeskIcon from '../assets/images/open-desk-icon.svg'
import CustomerSupportIcon from '../assets/images/customer-support-icon.svg'
import TalkExpertIcon from '../assets/images/talk-expert-icon.svg'
import ExploreSpaceIcon from '../assets/images/explore-space-icon.svg'
import LocationIcon from '../assets/images/location-icon.svg'
import AboutIcon from '../assets/images/about-icon.svg'
import ArticleIcon from '../assets/images/article-icon.svg'
import DownloadAppIcon from '../assets/images/download-app-icon.svg'
import HowToDoIcon from '../assets/images/how-to-do-icon.svg'
import GetStartedIcon from '../assets/images/get-started-icon.svg'
import BookConsultationIcon from '../assets/images/book-consultation-icon.svg'
import { Outlet, Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className='navbar-section'>
                <nav class="navbar navbar-expand-lg custom-navbar">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link class="navbar-brand" to="/">
                                <img src={Logo} alt='logo' />
                            </Link>
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            What we do
                                        </button>
                                        <ul class="dropdown-menu">
                                            <div className='outer-div'>
                                                <div>
                                                    <Link to="/conference-room">
                                                        <li>
                                                            <div className='icon-div'><img src={ConferenceIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/conference-room">Conference Rooms</Link>
                                                        </li>
                                                    </Link>
                                                    <Link to="/meeting-room">
                                                        <li>
                                                            <div className='icon-div'><img src={MeetingRoomIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/meeting-room">Meeting Rooms</Link>
                                                        </li>
                                                    </Link>
                                                    <Link to="/membership">
                                                        <li>
                                                            <div className='icon-div'><img src={MemberShipIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/membership">Membership</Link>
                                                        </li>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/privatecabin-room">
                                                        <li>
                                                            <div className='icon-div'><img src={PrivateCabinIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/privatecabin-room">Private Cabins</Link>
                                                        </li>
                                                    </Link>
                                                    <Link to="/opendesk-room">
                                                        <li>
                                                            <div className='icon-div'><img src={OpenDeskIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/opendesk-room">Open Desk</Link>
                                                        </li>
                                                    </Link>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Discover Us
                                        </button>
                                        <ul class="dropdown-menu">
                                            <div className='outer-div'>
                                                <div>
                                                    <Link to="/explore-spaces">
                                                        <li>
                                                            <div className='icon-div'><img src={ExploreSpaceIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/explore-spaces">Explore Spaces</Link>
                                                        </li>
                                                    </Link>
                                                    <Link to="/locations">
                                                        <li>
                                                            <div className='icon-div'><img src={LocationIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/locations">Our locations</Link>
                                                        </li>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/about">
                                                        <li>
                                                            <div className='icon-div'><img src={AboutIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/about">About</Link>
                                                        </li>
                                                    </Link>
                                                    <Link to="/articles">
                                                        <li>
                                                            <div className='icon-div'><img src={ArticleIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/articles">Articles/ Blogs</Link>
                                                        </li>
                                                    </Link>

                                                </div>
                                            </div>
                                            <Link to="/download-app" >
                                                <button className='download-app-div'>
                                                    <img src={DownloadAppIcon} alt='' /> Download our App
                                                </button>
                                            </Link>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Launch Space
                                        </button>
                                        <ul class="dropdown-menu">
                                            <div className='outer-div'>
                                                <div>
                                                    <Link to="/how-to-do-it">
                                                        <li>
                                                            <div className='icon-div'><img src={HowToDoIcon} alt="icon" /></div>
                                                            <a class="linkk" href="/#">How to do it?</a>
                                                        </li>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/get-started">
                                                        <li>
                                                            <div className='icon-div'><img src={GetStartedIcon} alt="icon" /></div>
                                                            <a class="linkk" href="/#">Get started</a>
                                                        </li>
                                                    </Link>
                                                </div>
                                            </div>
                                            <Link to="/hire-our-interior-designer">
                                                <button className='download-app-div'>
                                                    <img src={BookConsultationIcon} alt='' /> BOOK A CONSULTATION
                                                </button>
                                            </Link>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Support
                                        </button>
                                        <ul class="dropdown-menu support-menu">
                                            <div className='outer-div'>
                                                <div>
                                                    <Link to="/customer-support">
                                                        <li>
                                                            <div className='icon-div'><img src={CustomerSupportIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/customer-support">Customer Support</Link>
                                                        </li>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link to="/talk-our-expert">
                                                        <li>
                                                            <div className='icon-div'><img src={TalkExpertIcon} alt="icon" /></div>
                                                            <Link class="linkk" to="/talk-our-expert">Talk to our Expert</Link>
                                                        </li>
                                                    </Link>
                                                </div>
                                            </div>
                                            <Link to="/hire-our-interior-designer">
                                                <button className='download-app-div'>
                                                    <img src={BookConsultationIcon} alt='' /> BOOK A CONSULTATION
                                                </button>
                                            </Link>
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                            <div className='button-outer-div'>
                                <div className='button-talk-to-us'>
                                    <Link to="/talk-our-expert">
                                        <button>
                                            <img src={CallIcon} alt='icon' />
                                            <div> Talk to Us</div>
                                        </button>
                                    </Link>
                                </div>
                                <div className='profile-btn'>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={AccountIcon} alt="icon" />
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li className='register'>
                                                <div className='icon-div'><img src={AccountIcon} alt="icon" /></div>
                                                <a class="linkk" href="/#">REGISTER</a>
                                            </li>
                                            <li className='login'>
                                                <div className='icon-div'><img src={AccountIcon} alt="icon" /></div>
                                                <a class="linkk" href="/#">LOG IN</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </nav >
            </div >
        </>
    )
}

export default Header