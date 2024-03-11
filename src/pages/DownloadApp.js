import React from 'react'
import googleBtn from '../assets/images/googleplay 1.svg'
import appBtn from '../assets/images/appstore 1.svg'
import Workspace from '../assets/images/workspace.svg'
import availability from '../assets/images/availability.svg'
import community from '../assets/images/community-hub.svg'
import eventCalender from '../assets/images/event-calender.svg'
import amenities from '../assets/images/amenities.svg'
import membership from '../assets/images/membership-management.svg'
import feedback from '../assets/images/feedback-support.svg'
import './DownloadApp.css'
function DownloadApp() {
    return (
        <div className='download-section'>
            <div className='banner-section'>
                <div className='banner-content'>
                    <div className='heading-div'>
                        <span>Download</span> our App<span>.</span>
                    </div>
                    <div className='textt'>
                        Discover a new way of working that merges convenience, community, and creativity. Our app is your gateway to an innovative coworking experience tailored to meet your professional needs.
                    </div>
                    <div className='btn-outer'>
                        <button>
                            <img src={googleBtn} alt='' />
                        </button>
                        <button>
                            <img src={appBtn} alt='' />
                        </button>
                    </div>
                </div>
                <div className='features-outer-div'>
                    <div className='content-div'>
                        <div className='heading-div'>
                            Our App Features
                        </div>
                        <div className='list-outer-div'>
                            <div className='list-div'>
                                <img src={Workspace} alt='' /> Workspace Booking
                            </div>
                            <div className='list-div'>
                                <img src={availability} alt='' /> Real-time Availability
                            </div>
                            <div className='list-div'>
                                <img src={community} alt='' /> Community Hub
                            </div>
                            <div className='list-div'>
                                <img src={eventCalender} alt='' /> Event Calendar
                            </div>
                            <div className='list-div'>
                                <img src={amenities} alt='' /> Amenities and Services
                            </div>
                            <div className='list-div'>
                                <img src={membership} alt='' /> Membership Management
                            </div>
                            <div className='list-div'>
                                <img src={feedback} alt='' /> Feedback and Support
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp