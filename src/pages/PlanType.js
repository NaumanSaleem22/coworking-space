import React, { useState } from 'react';
import './SpaceType.css'
import CallIcon from '../assets/images/call-icon.svg'
import OpenDesk from '../assets/images/open-desk-card-icon.svg'
import PrivateCabins from '../assets/images/private-cabin-card.svg'
import greaterThanIcon from '../assets/images/greater-than.svg'

function PlanType() {
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
            desc: 'Basic - From INR 6000+ GST / Month'
        },
        {
            id: 2,
            heading: 'Private Cabins',
            text1: 'All amenities from Basic plan',
            text2: 'High Speed Internet',
            text3: 'Printing Services',
            icon: PrivateCabins,
            desc: 'Premium - From INR 8000+ GST / Month'
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
                        <div className='steps'>
                            1. SPACE TYPE
                        </div>
                        <div className='steps active-step'>
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
                    <div className='cards-outer-div cards-outer-div-2'>
                        {cardsData.map((card) => (
                            <div
                                key={card.id}
                                className={`card2 card ${selectedCard === card.id ? 'selected' : ''}`}
                                onClick={() => handleCardClick(card.id)}
                            >
                                <div className='heading-div-icon'>
                                    <img className='icon-img' src={card.icon} alt='' />
                                    <h2 className='heading'>{card.heading}</h2>
                                </div>
                                <div className='card-desc'>
                                    {card.desc}
                                </div>
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
                    <div className='last-link-div'>
                        <a>
                            &lt; Back to Space Type
                        </a>
                        <a>
                            Learn more
                        </a>
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
                            Premium
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
                            INR 8549 per month
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

export default PlanType