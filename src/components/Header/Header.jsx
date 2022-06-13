import React from "react";
import './Header.scss'
import { useState } from "react";
import furniture from '../../Assets/img/furnitures.png'
import Arrow from "../../Assets/SVG/Arrow";
import chair1 from '../../Assets/img/chair1.png'
import chair2 from '../../Assets/img/chair2.png'
import chair3 from '../../Assets/img/chair3.png'
import chair4 from '../../Assets/img/chair4.png'
import message from '../../Assets/img/message.png'
import Card from "./Card";
import data from "./data";

const Header = () => {

    const [active, setActive] = useState("firstcard")

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
                        {/* <img src={furniture} alt="" className="header__img" /> */}
                        {active === "firstcard" && 
                        <Card date={data} cardIndexs={0} /> }
                        {active === "secondcard" && 
                        <Card date={data} cardIndexs={1} /> }
                        {active === "thirstcard" && 
                        <Card date={data} cardIndexs={2} /> }
                        {active === "fixed" && 
                        <Card date={data} cardIndexs={3} /> }

                        <div className="header__box">
                            <a href="#" className="header__number">01-</a>
                            <a href="#" className="header__numbers">02-</a>
                            <a href="#" className="header__numbers">03-</a>
                        </div>

                        <button className="header__message">
                            <img src={message} alt="" className="header__picture" />
                        </button>
                    </div>
                </div>

                <div className="header__dote">
                    <button className="header__btns"></button>
                    <button className="header__btns"></button>
                    <button className="header__btns"></button>
                    <button className="header__btns"></button>
                </div>

                <div className="header__pages">
                    <button onClick={()=> setActive("firstcard")} className="header__btn">
                        <div className="header__page-list">
                            <img src={chair1} alt="" className="header__chair" />
                        </div>
                    </button>
                    <button onClick={()=> setActive("secondcard")} className="header__btn">
                        <div className="header__page-list">
                            <img src={chair2} alt="" className="header__chairs" />
                        </div>
                    </button>
                    <button onClick={()=> setActive("thirstcard")} className="header__btn">
                        <div className="header__page-list">
                            <img src={chair3} alt="" className="header__chair" />
                        </div>
                    </button>
                    <button onClick={()=> setActive("fixed")} className="header__btn">
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