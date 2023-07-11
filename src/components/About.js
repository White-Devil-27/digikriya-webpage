import React from 'react';
import Footer from './Footer';
import IntroDesign from './IntroDesign';
import Navbar from './Navbar';
import network from '../images/network.svg';
import network1 from '../images/network-1.svg';

export default function About() {

    // document.addEventListener('mousemove', (e) => {

    //     const mouseX = e.clientX;
    //     const mouseY = e.clientY;

    //     const position = document.getElementById('haiii');
    //     const rect = position.getBoundingClientRect();
    //     const positionX = rect.left + rect.width / 2;
    //     const positionY = rect.top + rect.height / 2;

    //     const angleDeg = angle(mouseX, mouseY, positionX, positionY);
    //     console.log(angleDeg);

    //     position.style.filter = `hue-rotate(${angleDeg})deg`;

    // })
    // function angle(cx, cy, ex, ey) {
    //     const dy = ey - cy;
    //     const dx = ex - cx;
    //     const rad = Math.atan2(dy, dx);
    //     const deg = rad * 180 / Math.PI; // convert to deg multiply by 180 and divide by PI
    //     return deg;
    // }

    function setNewImage() {
        document.getElementById('animation').src = network1;
    }
    function setOldImage() {
        document.getElementById('animation').src = network;
    }
    return (
        <>
            <Navbar />
            <div className='text--about'>
                <h2>About</h2>
            </div>
            <IntroDesign />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6 mt-5 text-center about--image--animation'>
                        <img src={network} onMouseOver={setNewImage} onMouseOut={setOldImage} id='animation' className='about--image' alt="network" width="100%" height="100%" />
                    </div>
                    <div className='col-sm-6 mt-5 about--text--animation'>
                        <h1 className='common--text--style text-center'>Who we are ?</h1>
                        <p className='mt-5'>Digikriya is your affiliate for Managed Integrated Solutions, end-to-end IT support and Digitally Transform your Infra towards SASE, Security, Cloud, Mobility & IOT.
                            Our rethinking on a new business model for the new cloud era led us to establish a Digital Services company for providing NextGen Managed Services integrating ‘Secure Access Service Edge’ & Multi-Cloud environments.
                            Its immaterial whether your Apps are Hosted either in Private Data Centre, Public or SAAS cloud and endpoints/end-users are at home/office environment.
                            We believe in a critical need for an evolutionary change in the business model wherein heterogenous is the norm. Moving away from “P X Q” body shopping model,
                            primarily focusing on unique customer requirements and inherently Vendor Agnostic, We align ourselves with the customer business as an extension of their IT and a one stop shop Integrated Solution in a world of silos.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};