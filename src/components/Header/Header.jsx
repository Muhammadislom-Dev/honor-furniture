import React from "react";
import './Header.scss'
import furniture from '../../Assets/img/furnitures.png'
import Arrow from "../../Assets/SVG/Arrow";
import chair1 from '../../Assets/img/chair1.png'
import chair2 from '../../Assets/img/chair2.png'
import chair3 from '../../Assets/img/chair3.png'
import chair4 from '../../Assets/img/chair4.png'



const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="header__page">
                    <div className="header__left">
                        <div className="header__search">
                            <input type="search" placeholder="Furniture" className="header__input" />
                            <button className="header__button">Search</button>
                        </div>
                        <h2 className="header__name">Specially designed products</h2>
                        <p className="header__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                        <div className="header__titles">
                            <a href="#" className="header__cataloge">Catalogue <Arrow className="header__arrow" /> </a>
                            <a href="#" className="header__about">About</a>
                        </div>
                    </div>

                    <div className="header__right">
                        <img src={furniture} alt="" className="header__img" />

                        <div className="header__box">
                            <a href="#" className="header__number">01-</a>
                            <a href="#" className="header__numbers">02-</a>
                            <a href="#" className="header__numbers">03-</a>
                        </div>
                    </div>
                </div>

                <div className="header__dote">
                    <button className="header__btns"></button>
                    <button className="header__btns"></button>
                    <button className="header__btns"></button>
                    <button className="header__btns"></button>
                </div>

                <div className="header__pages">
                    <button className="header__btn">
                        <div className="header__page-list">
                            <img src={chair1} alt="" className="header__chair" />
                        </div>
                    </button>
                    <button className="header__btn">
                        <div className="header__page-list">
                            <img src={chair2} alt="" className="header__chairs" />
                        </div>
                    </button>
                    <button className="header__btn">
                        <div className="header__page-list">
                            <img src={chair3} alt="" className="header__chair" />
                        </div>
                    </button>
                    <button className="header__btn">
                        <div className="header__page-list">
                            <img src={chair4} alt="" className="header__chair" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header