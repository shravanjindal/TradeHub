import React from 'react';
import Hero from './Hero';
import Universe from "./Universe";
import LeftSection from './LeftSection';
import RightSection from "./RightSection";

function ProductPage() {
    return ( 
        <>
            <Hero />
            <LeftSection />
            <RightSection />
            <Universe />
        </>
    );
}

export default ProductPage;