import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import IntroDesign from './IntroDesign';
import SecurityIcon from '@mui/icons-material/Security';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import SpeedIcon from '@mui/icons-material/Speed';

export default function Services() {
    return (
        <>
            <Navbar />
            <div className='text--product'>
                <h2>Services</h2>
            </div>
            <IntroDesign />
            <div className='container mt-5 text-center'>
                <span className='m-3 card--heading'>What We Do</span>
                <p className='m-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a
                    iaculis at. At erat pellentesque adipiscing commodo elit at imperdiet. Sit amet consectetur
                    adipiscing elit ut aliquam purus sit amet. Diam vel quam elementum pulvinar etiam. In hac habitasse
                    platea dictumst vestibulum rhoncus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim</p>
            </div>
            <div className='mt-5 container text-center'>
                <span className=' m-3 card--heading'>Our Services</span>
            </div>
            <div className='container mt-5 card--body'>
                <div className='row'>
                    <div className='col-sm-3 d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 service--content'>
                            <div className='m-3 card--icon'>
                                <SpeedIcon style={{ fontSize: "45px" }} />
                            </div>
                            <h4 className='m-3 mt-3'>Bionic</h4>
                            <p className='m-3 mt-3'>With industry’s first Bionic Automation, Telemetry data is quickly
                                analysed, diagnosed and Incidents rapidly resolved to enhance availability and improve user
                                experience. Your Service requests and changes are prioritised, processed digitally with self-service
                                catalogs and fulfilment tracked via handheld device.</p>
                        </div>
                    </div>
                    <div className='col-sm-3  d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 service--content'>
                            <div className='m-3 card--icon'>
                                <CloudSyncIcon style={{ fontSize: "45px" }} />
                            </div>
                            <h4 className='m-3 mt-3'>Multi-Cloud</h4>
                            <p className='m-3 mt-3'>Digikriya will Monitor your Apps, multi-Cloud infrastructure and provide end to end
                                life-cycle IT Service Management based on ITIL best practices. Your deployment across these clouds are centrally
                                monitored and efficiently orchestrated in a highly secured environment.</p>
                        </div>
                    </div>
                    <div className='col-sm-3  d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 service--content'>
                            <div className='m-3 card--icon'>
                                <SecurityIcon style={{ fontSize: "40px" }} />
                            </div>
                            <h4 className='m-3 mt-3'>SASE</h4>
                            <p className='m-3 mt-3'>Our Multiskilled DEVNET Team with deep understanding of your business are able
                                to deploy and deliver best in class NextGen Managed Services for the SASE world.</p>
                        </div>
                    </div>
                    <div className='col-sm-3  d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 service--content'>
                            <div className='m-3 card--icon'>
                                <ManageAccountsIcon style={{ fontSize: "40px" }} />
                            </div>
                            <h4 className='m-3 mt-3'>ITSM</h4>
                            <p className='m-3 mt-3'>Our Problem Management proactively strive to continuously improve your
                                overall performance by systematically analysing root causes, identifying and fixing underlying issues
                                to reduce Incidents.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}