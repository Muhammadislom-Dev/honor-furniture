import React from "react";
import './Navbar.scss'
// import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import yurak from '../../Assets/img/yurak.png'

import ellipse1 from '../../Assets/img/Ellipse 84.png'
import ellipse2 from '../../Assets/img/Ellipse 85.png'
import ellipse3 from '../../Assets/img/Ellipse 86.png'
import ellipse4 from '../../Assets/img/Ellipse 87.png'
import ellipse5 from '../../Assets/img/Ellipse 88.png'
import Phone from "../../Assets/SVG/Phone";



const Navbar = () => {
return(
<div className="nav">
    <div className="navbar">
        <div className="container">
            <div className="navbar__page">
                <h2 className="navbar__name">HONOR</h2>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Home page</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Contacts</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">All Production</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Terms and Conditions</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Delivery</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">Hot Sales</a>
                    </li>
                    <li className="navbar__item">
                        <img src={yurak} alt="" className="navbar__img" />
                    </li>
                    <li className="navbar__item navbar__items">
                        <a href="+998955555555" className="navbar__phone">
                            <div className="navbar__title">
                                <Phone />
                                <p className="navbar__names">+998 95  555 55 55  
                                    <span> Bepul konsultatsiya</span> </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div className="navbar__splide">
        <div className="container">
        <Splide  className='navbar__lists'   aria-label="React Splide Example">
            <SplideSlide  className='navbar__slides'>
                <a href="#" className="navbar__links">
                    <img src={ellipse1} className="navbar__pic" alt="Image 1"/>
                </a>
                <a href="#" className="navbar__links">
                    <img src={ellipse2} className="navbar__pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar__links">
                    <img src={ellipse3} className="navbar__pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar__links">
                    <img src={ellipse4} className="navbar__pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar__links">
                    <img src={ellipse5} className="navbar__pic" alt="Image 2"/>
                </a>
            </SplideSlide>
            <SplideSlide  className='navbar__slides'>
                <a href="#" className="navbar__links">
                    <img src={ellipse1} className="navbar__pic" alt="Image 1"/>
                </a>
                <a href="#" className="navbar__links">
                    <img src={ellipse2} className="navbar__pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar__links">
                    <img src={ellipse3} className="navbar__pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar__links">
                    <img src={ellipse4} className="navbar__pic" alt="Image 2"/>
                </a>
                <a href="#" className="navbar__links">
                    <img src={ellipse5} className="navbar__pic" alt="Image 2"/>
                </a>
            </SplideSlide>
        </Splide>
        </div>
    </div>
</div>
)
}
export default Navbar