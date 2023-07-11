import React from 'react';
import digi from '../images/digi.png';
import { NavLink } from 'react-router-dom';
export default function Navbar() {

    // const active = window.location.pathname;
    // const navLinks = document.querySelectorAll("nav a").forEach(link => {
    //     if (link.href.includes(`${active}`)) {
    //         link.classList.add('active');
    //     };
    // });
    // console.log(navLinks)
    // console.log(active)
    // const dropup = "nav-item dropup"
    // const dropdown = "nav-item dropdown"

    return (
        <div className='container-fluid header sticky-top'>
            <div className='row'>
                <nav className='navbar navbar-expand-md'>
                    <a className='navbar-brand col-sm-3 text-center mb-2'>
                        <a href='/'><img src={digi} width="150px" alt='nothing'></img></a>
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-sm-8 navbar-collapse collapse p-3 nav--mobile" id="navbar">
                        <ul className='navbar-nav mx-auto nav-text-color'>
                            <li className='nav-item'>
                                <NavLink to='/' className="nav-link navbar--pointer--events" ></NavLink>
                            </li>
                            <li className='nav-item dropdown'>
                                <NavLink to='/about' className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/about/leadership" className="dropdown-item" >Our Leadership</NavLink></li>
                                    <li><a className="dropdown-item" href="#">Work culture</a></li>
                                    <li><NavLink to="/about/careers" className="dropdown-item">Careers</NavLink></li>
                                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                </ul>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/products'>Products</NavLink>
                            </li>
                            <li className='nav-item dropdown'>
                                <NavLink to='/services' className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/services/MSP" className="dropdown-item" >Manage Service Provider (MSP)</NavLink></li>
                                    <li><NavLink to="/support" className="dropdown-item">ITSM</NavLink></li>
                                    <li><a className="dropdown-item" href="#">Data Analytics</a></li>
                                    <li><a className="dropdown-item" href="#">Global Market Report (GMR)</a></li>
                                </ul>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/partner' className='nav-link' >Become a partner</NavLink>
                            </li>
                            <li className='nav-item dropdown dropdown-menu-start'>
                                <NavLink to='/support' className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Support
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/support" className="dropdown-item" >Knowleadge Base (KB)</NavLink></li>
                                    <li><a className="dropdown-item" href="#">Documentation</a></li>
                                    <li><a className="dropdown-item" href="#">White Papers</a></li>
                                    <li><a className="dropdown-item" href="#">Create Ticket</a></li>
                                    <li><a className="dropdown-item" href="#">Engage us</a></li>
                                    <li><a className="dropdown-item" href="#">New Opportunity</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

// className={({ isActive }) => isActive ? dropup : dropdown}