import React from 'react';
import Navbar from './Navbar';
import IntroDesign from './IntroDesign';
import Footer from './Footer';
import design from '../images/design.svg';
import market from '../images/market.svg';
import code from '../images/code.svg';

export default function Careers() {

    function handleClick() {
        alert("Thanks for the registration")
    }
    return (
        <div>
            <Navbar />
            <div className='text--product'>
                <h2>Careers</h2>
            </div>
            <IntroDesign />
            <div className='container mt-5 text-center'>
                <span className='m-3 card--heading'>Join Us</span>
                <p className='m-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Nibh mauris cursus mattis molestie a
                    iaculis at. At erat pellentesque adipiscing commodo elit at imperdiet. Sit amet consectetur
                    adipiscing elit ut aliquam purus sit amet. Diam vel quam elementum pulvinar etiam. In hac habitasse
                    platea dictumst vestibulum rhoncus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim</p>
            </div>
            <div className='mt-5 container text-center'>
                <span className=' m-3 card--heading'>Roles</span>
            </div>
            <div className='container mt-3 card--body'>
                <div className='row'>
                    <div className='col-sm-4 d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 career--content bg-light'>
                            <div className='m-3 text-center'>
                                <img src={design} />
                            </div>
                            <h4 className='m-3 mt-3 text-center'>Product Design</h4>
                            <p className='m-3 mt-3 text-center'>Your dedicated portal will be accessed anytime,anywhere at your ease.</p>
                        </div>
                    </div>
                    <div className='col-sm-4  d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 career--content bg-light'>
                            <div className='m-3 text-center'>
                                <img src={code} />
                            </div>
                            <h4 className='m-3 mt-3 text-center'>Product Development</h4>
                            <p className='m-3 mt-3 text-center'>Integrated Web-based Chatbot will help you
                                to engage HighTech support team seamlessly.Mobile based application will enchance
                                you experiences.</p>
                        </div>
                    </div>
                    <div className='col-sm-4 d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 career--content bg-light'>
                            <div className='m-3 text-center career--icon'>
                                <img src={market} />
                            </div>
                            <h4 className='m-3 mt-3 text-center'>Marketing</h4>
                            <p className='m-3 mt-3 text-center'>One-Click dedicated tenant will be deployed.Scalable, reliable
                                and more secure with Zero downtime</p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <div className='mt-5 container text-center'>
                <span className='m-3 card--heading'>Join Our Team</span>
            </div>
            <div className='container mt-5'>
                <form className='career--form'>
                    <div className='col-sm-12'>
                        <div className='row'>
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1" className="form-label">FirstName</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-sm-6">
                                <label for="exampleInputPassword1" className="form-label">Lastname</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-3 col-sm-12'>
                        <div className='row'>
                            <div className="col-sm-6">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" required />
                            </div>
                            <div className="col-sm-6">
                                <label for="exampleInputPassword1" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 col-sm-12">
                        <label for="exampleInputEmail1" className="form-label">Resume</label>
                        <input type="file" className="form-control" required />
                    </div>
                    <div className='mt-3 col-sm-12 text-center'>
                        <button className='mt-3 btn-sm content--button' onClick={handleClick}>Submit</button>
                    </div>
                    <br />
                </form>

            </div>
            <Footer />
        </div>
    )
}