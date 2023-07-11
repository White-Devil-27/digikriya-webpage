import React from 'react';
import digi from '../images/digi.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer() {
    return (
        <>
            <div className='container col-sm-12 footer--border mt-5'>
            </div>
            <div className='footer--body'>
                <br />
                <br />
                <div className='container mt-4'>
                    <div className='col-sm-12 row'>
                        <div className='col-sm-3 text-center'>
                            <h6>Company</h6>
                            <br />
                            <div className='footer--content'>
                                <a href='/'><li>Home</li></a>
                                <br />
                                <a href='/About'><li>About</li></a>
                                <br />
                                <a href='/Products'><li>Products</li></a>
                                <br />
                                <a href='/Products'><li>Services</li></a>
                                <br />
                                <a href='/Support'><li>Contact</li></a>
                                <br />
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='col-sm-3'>
                            <div className='col-sm-6'>
                                <h6 className='text-center'>Contact</h6>
                            </div>
                            <br />
                            <div className='footer--content footer--contact--only'>
                                <a href=''><li><span className="fa fa-shopping-cart footer--icon" aria-hidden="true"></span>&nbsp;&nbsp;Sales & Support</li></a>
                                <br />
                                <a href=''><li><span className="fa fa-building-o footer--icon" aria-hidden="true"></span>&nbsp;&nbsp;Digikriya</li></a>
                                <br />
                                <a href=''><li><span className="fa fa-map-marker footer--icon" aria-hidden="true"></span>&nbsp;&nbsp;Plot no.128/P2,EPIP Industrial Area,Sonnenahalli,Bengaluru - 560048</li></a>
                                <br />
                                <a href=''><li><span className="fa fa-envelope footer--icon" aria-hidden="true"></span>&nbsp;&nbsp;support@digikriya.sg</li></a>
                                <br />
                                {/* <a href=''><li></li></a>
                                <br /> */}
                            </div>
                        </div>
                        <div className='col-sm-3 text-center'>
                            <h6>Others</h6>
                            <br />
                            <div className='footer--content'>
                                <a href=''><li>Terms & Conditions</li></a>
                                <br />
                                <a href=''><li>Privacy Policy</li></a>
                                <br />
                                <a href=''><li>Cookies Policy</li></a>
                                <br />
                            </div>
                        </div>
                        <div className='col-sm-3 text-center'>
                            <h6>Follow Us</h6>
                            <br />
                            <div className='footer--content'>
                                <a href='https://www.facebook.com/'><li><FacebookIcon style={{ color: "#3b5998" }} /></li></a>
                                <br />
                                <a href='https://twitter.com/'><li><TwitterIcon style={{ color: "#00acee" }} /></li></a>
                                <br />
                                <a href='https://www.instagram.com/'><li><InstagramIcon style={{ color: "#C13584" }} /></li></a>
                                <br />
                                <a href='https://www.linkedin.com/'><li><LinkedInIcon style={{ color: "#0A66C2" }} /></li></a>
                                <br />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='container h-12 text-center'>
                        <h6><CopyrightIcon style={{ fontSize: "medium" }} />  <span>2022 digikriya.com . All Rights Reserved.</span></h6>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </>
    )
}