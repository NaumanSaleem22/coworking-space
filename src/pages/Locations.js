import React from 'react'
import LocationIcon from '../assets/images/location-colored.svg'
import './Location.css'
import { Outlet, Link } from "react-router-dom";
function Locations() {
    return (
        <div className='location-section'>
            <div className='content-div'>
                <div className='heading-div'>

                    <span className='colored-text'>Explore our Locations:  </span><br />
                    Our Story, Your Workspace Journey<span className='colored-text'>.</span>

                </div>
                <div className='text'>
                    From bustling urban hubs to serene suburban settings, our locations cater to a variety of preferences. Whether you seek a lively atmosphere conducive to networking or a tranquil space for focused work, our strategically situated coworking spaces offer the flexibility and amenities to meet your needs.
                </div>
            </div>

            <div className='card-outer-div'>
                <div className='card-location'>
                    <Link to="/location-state">
                        <div className='content'>
                            <img src={LocationIcon} alt='' /> Argentina
                        </div>
                    </Link>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> Brazil
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> Canada
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> Denmark
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> Egypt
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> France
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> Germany
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> Hungary
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> India
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> Japan
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> Kenya
                    </div>
                </div>
                <div className='card-location'>
                    <div className='content'>
                        <img src={LocationIcon} alt='' /> Laos
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locations