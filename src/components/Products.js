import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import IntroDesign from './IntroDesign';

export default function Products() {
    return (
        <>
            <Navbar />
            <div className='text--product'>
                <h2>Products</h2>
            </div>
            <IntroDesign />
            <Footer />
        </>

    )
}