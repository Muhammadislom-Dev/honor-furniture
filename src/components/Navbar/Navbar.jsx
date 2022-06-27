import React from "react";
import './Navbar.scss'
// import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import '@splidejs/splide/dist/css/splide.min.css';
import yurak from '../../Assets/img/yurak.png'
import { Link } from "react-router-dom";
import ellipse1 from '../../Assets/img/Ellipse 84.png'
import ellipse2 from '../../Assets/img/Ellipse 85.png'
import ellipse3 from '../../Assets/img/Ellipse 86.png'
import ellipse4 from '../../Assets/img/Ellipse 87.png'
import ellipse5 from '../../Assets/img/Ellipse 88.png'
import Phone from "../../Assets/SVG/Phone";
import btn from '../../Assets/img/btn.png'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import close from '../../Assets/img/close.png'



const Navbar = () => {

return(
   
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
)
}
export default Navbar