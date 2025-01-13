import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='mb-5 col-lg-6 p-5'>
                    <img src='images/largestBroker.svg' alt='Largest Broker' style={{width:"100%"}}/>
                </div>
                <div className='mt-3 col-lg-6 p-5'>
                    <h1 className='fs-2 mb-4' >Larget stock broker in India</h1>
                    <p className='mb-5'>The largest stock broker in the world by market capitalization and client accounts is Charles Schwab, offering a wide range of investment and financial services.</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        <img src='images/pressLogos.png' alt='Press Logos' style={{width:"90%"}}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Awards;