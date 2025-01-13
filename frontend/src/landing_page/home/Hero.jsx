import React from 'react';

function Hero() {
    return ( 
        <div className='container mb-5'>
            <div className='row p-5 text-center'>
                <img src='images/homeHero.png' alt='Hero Image'className='mb-5'/>
                <h1 className='mt-5 mb-3'>Invest in everything</h1>
                <p className='mb-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='mt-1 p-3 btn btn-primary fs-5' style={{width:"300px", margin:"auto", maxWidth:"20rem", height:"3rem", display:"flex",alignItems:"center",justifyContent:"center", backgroundColor: "rgb(51 161 208)", border:"none"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero; 