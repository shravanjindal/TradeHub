import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center mt-5 p-5">
                <h1 className='fs-1'>Charges</h1>
                <p className='grey-text fs-5'>List of all charges and taxes</p>
            </div>
            <div className="row p-5 text-center mt-5">
                <div className="col-lg-4">
                    <img src="images/pricing0.svg"/>
                    <h1 className='fs-3'>Free quity delivery</h1>
                    <p className='grey-text'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-lg-4">
                    <img src="https://zerodha.com/static/images/other-trades.svg"/>
                    <h1 className='fs-3'>Intraday and F&O trades</h1>
                    <p className='grey-text'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-lg-4">
                    <img src="images/pricing0.svg"/>
                    <h1 className='fs-3'>Free direct MF</h1>
                    <p className='grey-text'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;