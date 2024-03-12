import React from 'react'
import './SearchOverlay.css'
import NearMeIcon from '../assets/images/near-me-btn.svg'
import AddIcon from '../assets/images/Add-Symbol.svg'
import CloseIcon from '../assets/images/close-btn.svg'

function SearchOverlay() {
    return (
        <>
            <button type="button" class="btn btn-secondary launch-modal-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch Search Overlay Modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <button type="button" class="modal-close-btn" data-bs-dismiss="modal">a<img src={CloseIcon} alt='' /></button>
                <div class="modal-dialog modal-fullscreen">

                    <div class="modal-content">
                        <div className='search-overlay-section'>
                            <section className='overlay-banner-section'>
                                <div className='search-location-div'>
                                    <div className='heading'>
                                        Find A <span className='colored-text'>Perfect Workspace</span> That Suits You!
                                    </div>
                                    <div className='search-div'>
                                        <button className='near-me-btn' >
                                            <img src={NearMeIcon} alt='icon' />
                                        </button>
                                        <input className='search-input' type='text' placeholder='Search for a location' />
                                        <button className='search-button'>
                                            Search
                                        </button>
                                    </div>
                                    <div className='desc'>
                                        Popular Searches tailored just for you
                                    </div>
                                    <div className='tags-outer'>
                                        <div className='tag'>
                                            Open Desk
                                        </div>
                                        <div className='tag'>
                                            High Speed Internet
                                        </div>
                                        <div className='tag'>
                                            Great Coffee
                                        </div>
                                        <div className='tag'>
                                            Private Cabins
                                        </div>
                                        <div className='tag'>
                                            Great Breakfast
                                        </div>
                                        <div className='add-icon'>
                                            <img src={AddIcon} alt='icon' />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SearchOverlay