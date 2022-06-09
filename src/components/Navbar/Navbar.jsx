import React from "react";
import './Navbar.css'
// import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import yurak from '../../Assets/img/yurak.png'

import ellipse1 from '../../Assets/img/Ellipse 84.png'
import ellipse2 from '../../Assets/img/Ellipse 85.png'
import ellipse3 from '../../Assets/img/Ellipse 86.png'
import ellipse4 from '../../Assets/img/Ellipse 87.png'
import ellipse5 from '../../Assets/img/Ellipse 88.png'



const Navbar = () => {
return(
<div className="nav">
    <div className="navbar">
        <div className="container">
            <div className="navbar-page">
                <h2 className="navbar-name">HONOR</h2>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Home page</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Contacts</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">All Production</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Terms and Conditions</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Delivery</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">Hot Sales</a>
                    </li>
                    <li className="navbar-item">
                        <img src={yurak} alt="" className="navbar-img" />
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="navbar-splide">
        <div className="container">
        <Splide  className='navbar-lists'   aria-label="React Splide Example">
            <SplideSlide  className='navbar__slide'>
                <a href="#" className="navbar-links">
                    <img src={ellipse1} className="navbar-pic" alt="Image 1"/>
                </a>
                <a href="#" className="navbar-links">
                    <img src={ellipse2} className="navbar-pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar-links">
                    <img src={ellipse3} className="navbar-pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar-links">
                    <img src={ellipse4} className="navbar-pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar-links">
                    <img src={ellipse5} className="navbar-pic" alt="Image 2"/>
                </a>
            </SplideSlide>
            <SplideSlide  className='navbar__slide'>
                <a href="#" className="navbar-links">
                    <img src={ellipse1} className="navbar-pic" alt="Image 1"/>
                </a>
                <a href="#" className="navbar-links">
                    <img src={ellipse2} className="navbar-pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar-links">
                    <img src={ellipse3} className="navbar-pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar-links">
                    <img src={ellipse4} className="navbar-pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar-links">
                    <img src={ellipse5} className="navbar-pic" alt="Image 2"/>
                </a>
            </SplideSlide>
        </Splide>
        </div>
    </div>
</div>
)
}
export default Navbar