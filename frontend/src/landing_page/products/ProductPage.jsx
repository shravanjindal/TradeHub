import React from 'react';
import Hero from './Hero';
import Universe from "./Universe";
import LeftSection from './LeftSection';
import RightSection from "./RightSection";

function ProductPage() {
    const products = [
        {
            name: "Coin",
            imagePath: "images/coin.png",
            description: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        },
        {
            name: "Kite",
            imagePath: "images/kite.png",
            description: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        },
        {
            name: "Kite Connect API",
            imagePath: "images/kiteconnect.png",
            description: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        },
        {
            name: "Varsity Mobiles",
            imagePath: "images/varsity.png",
            description: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
    ];    
    
    return ( 
        <>
            <Hero />
            <LeftSection product={products[0]}/>
            <RightSection product={products[1]}/>
            <LeftSection product={products[2]}/>
            <RightSection product={products[3]}/>
            <Universe />
        </>
    );
}

export default ProductPage;