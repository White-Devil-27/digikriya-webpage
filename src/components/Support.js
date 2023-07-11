import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import IntroDesign from './IntroDesign';

export default function Support() {
    return (
        <>
            <Navbar />
            <div className='text--contact'>
                <h2>Contact</h2>
            </div>
            <IntroDesign />
            <Footer />
        </>
    )
}