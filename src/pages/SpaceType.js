import React, { useState } from 'react';
import './SpaceType.css'
import CallIcon from '../assets/images/call-icon.svg'
import OpenDesk from '../assets/images/open-desk-card-icon.svg'
import PrivateCabins from '../assets/images/private-cabin-card.svg'
import Conference from '../assets/images/conference-card.svg'
import Meetings from '../assets/images/meeting-room-card.svg'
import greaterThanIcon from '../assets/images/greater-than.svg'

function SpaceType() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (cardNumber) => {
        setSelectedCard(cardNumber);
    };

    const cardsData = [
        {
            id: 1,
            heading: 'Open Desk',
            text1: 'An dedicated desk',
            text2: 'Access to all workshops',
            text3: 'Premium Amenities',
            icon: OpenDesk,
        },
        {
            id: 2,
            heading: 'Private Cabins',
            text1: 'An dedicated desk',
            text2: 'Access to all workshops',
            text3: 'Premium Amenities',
            icon: PrivateCabins,
        },
        {
            id: 3,
            heading: 'Conference Rooms',
            text1: 'An dedicated desk',
            text2: 'Access to all workshops',
            text3: 'Premium Amenities',
            icon: Conference,
        },
        {
            id: 4,
            heading: 'Meeting Rooms',
            text1: 'An dedicated desk',
            text2: 'Access to all workshops',
            text3: 'Premium Amenities',
            icon: Meetings,
        }
    ];
    return (
        <div className='space-section'>
            <div className='content-div'>
                <div>
                    <div className='heading-div'>
                        Buy Membership<span>.</span>
                    </div>
                    <div className='desc-div'>
                        Discover your ideal workspace tailored to your needs.
                        Select from diverse space types, plans,
                        and flexible options for a seamless start
                        to your productive journey.
                    </div>
                </div>
                <div className='phone-div'>
                    <img src={CallIcon} alt='' /> Call Us:0123344567
                </div>
            </div>

            <div className='outer-div'>
                <div className='left-div'>
                    <div className='steps-outer-space'>
                        <div className='steps active-step'>
                            1. SPACE TYPE
                        </div>
                        <div className='steps'>
                            2. PLAN TYPE
                        </div>
                        <div className='steps'>
                            3. AGREEMENT LENGTH
                        </div>
                        <div className='steps'>
                            4. YOUR DETAILS
                        </div>
                        <div className='steps'>
                            5. PAYMENT
                        </div>
                    </div>
                    <div className='desc'>
                        Choose a Plan type and register for an membership to enjoy benefits!
                    </div>
                    <div className='cards-outer-div'>
                        {cardsData.map((card) => (
                            <div
                                key={card.id}
                                className={`card ${selectedCard === card.id ? 'selected' : ''}`}
                                onClick={() => handleCardClick(card.id)}
                            >
                                <img className='icon-img' src={card.icon} alt='' />
                                <h2 className='heading'>{card.heading}</h2>
                                <ul>
                                    <li>{card.text1}</li>
                                    <li>{card.text2}</li>
                                    <li>{card.text3}</li>
                                </ul>
                                <input
                                    type="radio"
                                    name="selectedCard"
                                    checked={selectedCard === card.id}
                                    readOnly
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='right-div'>
                    <div className='heading-div'>
                        Membership Details
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            SPACE TYPE
                        </div>
                        <div className='text-div'>
                            Open Desk
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            PLAN TYPE
                        </div>
                        <div className='text-div'>
                            ----
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            AGREEMENT LENGTH
                        </div>
                        <div className='text-div'>
                            ----
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            START DATE
                        </div>
                        <div className='text-div'>
                            ----
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            END DATE
                        </div>
                        <div className='text-div'>
                            ----
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='label-div'>
                            MONTHLY COST
                        </div>
                        <div className='text-div'>
                            ----
                        </div>
                    </div>
                    <div className='btn-div'>
                        <button>
                            Continue <img src={greaterThanIcon} alt='' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpaceType