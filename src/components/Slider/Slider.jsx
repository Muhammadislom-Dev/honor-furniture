import React, { useEffect, useState } from "react";
import obj from "../house";
import './Slider.scss'
import button from '../../Assets/img/button.png'



function SliderBox(){
    const [count, setCount] = useState(0)

    const handlerRightBtn = () => {
        setCount(count + 1)
    }

    const handlerLeftBtn = () => {
        setCount(count - 1);
    }

    return(
        <div className="slider">
            <div className="slider__leftBox">
                <div className="slider__infoBox infos">
                    <h2 className="infos__title">Some useful blogposts</h2>
                    <p className="infos__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                    <a className="infos__link">Read more</a>
                </div>
            </div>
            <div className="slider__rightBox">
                <button onClick={handlerRightBtn} className="slider__rightBtn" style={{display: `${(count !== obj.length - 3) ? "block" : "none" }`}}>
                    {/* <i className='bx bx-chevron-right'></i> */}
                    <img src={button} alt="" className="slider__button-img" />
                </button>
                <button onClick={handlerLeftBtn} className="slider__leftBtn" style={{display: `${(count === 0) ? "none" : "block" }`}}>
                    {/* <i className='bx bx-chevron-left'></i> */}
                    <img src={button} alt="" className="slider__button-img" />
                </button>
                <ul  style={{transform: `translateX(${-count * 300}px)`}} className="slider__list">
                    {obj.map((item, i) => {
                        return (
                            <li key={i} className="slider__item">
                                <img className="slider__img" src={item.img} alt="house" />
                                <div className="slider__desc">
                                    <h3 className="slider__title">{item.title}</h3>
                                    <p className="slider__text">{item.text}</p>
                                    <a className="slider__link" href="/">Read More</a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SliderBox;