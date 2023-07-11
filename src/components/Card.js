import React from 'react';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import GroupsIcon from '@mui/icons-material/Groups';
import MemoryIcon from '@mui/icons-material/Memory';
import EmojiObjectsTwoToneIcon from '@mui/icons-material/EmojiObjectsTwoTone';
import KeyboardCapslockOutlinedIcon from '@mui/icons-material/KeyboardCapslockOutlined';
import myQR from '../images/myQR.png';

export default function Card() {

    return (
        <div className=''>
            <div className='container mt-5 text-center'>
                <span className='m-3 card--heading'>Explore</span>
            </div>
            <div className='container mt-5 card--body'>
                <div className='row'>
                    <div className='col-sm-3 d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 card--content'>
                            <div className='m-3 card--icon'>
                                <AccessAlarmsIcon style={{ fontSize: "40px" }} />
                            </div>
                            <h4 className='m-3 mt-3'>Round The Clock Access</h4>
                            <p className='m-3 mt-3'>Your dedicated portal will be accessed anytime,anywhere at your ease.</p>
                        </div>
                    </div>
                    <div className='col-sm-3  d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 card--content'>
                            <div className='m-3 card--icon'>
                                <GroupsIcon style={{ fontSize: "40px" }} />
                            </div>
                            <h4 className='m-3 mt-3'>Collaboration</h4>
                            <p className='m-3 mt-3'>Integrated Web-based Chatbot will help you
                                to engage HighTech support team seamlessly.Mobile based application will enchance
                                you experiences.</p>
                        </div>
                    </div>
                    <div className='col-sm-3  d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 card--content'>
                            <div className='m-3 card--icon'>
                                <MemoryIcon style={{ fontSize: "40px" }} />
                            </div>
                            <h4 className='m-3 mt-3'>Micro-Service</h4>
                            <p className='m-3 mt-3'>One-Click dedicated tenant will be deployed.Scalable, reliable
                                and more secure with Zero downtime</p>
                        </div>
                    </div>
                    <div className='col-sm-3  d-flex justify-content-center'>
                        <div className='col-sm-12 m-3 card--content'>
                            <div className='m-3 card--icon'>
                                <EmojiObjectsTwoToneIcon style={{ fontSize: "40px" }} />
                            </div>
                            <h4 className='m-3 mt-3'>One Stop Solution</h4>
                            <p className='m-3 mt-3'>Vendor ahnostic one stop solution to improve smooth business process.</p>
                        </div>
                    </div>
                    &nbsp;
                    <br />
                </div>
            </div>
            <div className='container'>
                <div className='col-sm-12 text-center'>
                    <div className='col-sm-12 m-3'>
                        <button className='card--button'>Visit our Products</button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='container mt-5 card--footer-animation'>
                <div className='text-center'>
                    <span className='card--footer'>Thanks for Visiting..!&nbsp;&nbsp;<i class="fa fa-thumbs-up" aria-hidden="true"></i></span>
                </div>
                <div className='col-sm-12 mt-4 text-center'>
                    <img src={myQR} width="150px" alt="QR" />
                </div>
            </div>
            <div className='container-fluid '>
                <div className='col-sm-12 row'>
                    <div className='col-sm-10'>
                        &nbsp;
                    </div>
                    <div className='col-sm-2 text-center footer--back--top'>
                        <a href='#top' data-toggle="tooltip" title="BACK TO TOP"><KeyboardCapslockOutlinedIcon style={{ fontSize: "40px" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}