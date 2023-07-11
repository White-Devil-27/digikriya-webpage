import React from 'react';
// import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

export default function Content() {
    return (
        <>
            <div id="top">
                <h1 className='content--image'>Better Work Environment</h1>
                <h5 className='col-sm-8 content--text'>Your work environment impacts your mood, drive, mental health and performance.
                    That’s why we creating a positive work environment for you and your company’s success.</h5>
                <a href='#content'><button className='mt-5 btn-sm image--button'>Get Started</button></a>
                <div className='background--image'>
                </div>
                <div id='content'>
                    <div className='container image--content'>
                        <div className='mt-5 text-center'>
                            <span className='m-3 card--head--font'>Who we are?</span>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-sm-8 mt-4'>
                                <p className='content--info' data-text="NextGen...">NextGen...</p>
                            </div>
                            <div className='col-sm-4 mt-4'>
                                <div className='col-sm-12'>
                                    <h2 className='col-sm-8 mt-5'>Manage Service Providers (MSP) Transform your network digitally</h2>
                                    <p className='col-sm-12 mt-3'>Our rethinking on a new business model for the new
                                        cloud era led us to establish a Digital Services company for providing NextGen Managed Services
                                        integrating <span className='common--text--style'>‘Secure Access Service Edge’</span> & Multi-Cloud environments. </p>
                                    <div className='col-sm-12 text-center'>
                                        <button className='mt-3 btn-sm content--button'>About</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};