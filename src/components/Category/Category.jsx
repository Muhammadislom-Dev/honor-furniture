import './Category.scss'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import React from 'react';
import sofa1 from '../../Assets/img/sofa1.png'
import sofa2 from '../../Assets/img/sofa2.png'
import sofa3 from '../../Assets/img/sofa3.png'
import sofa4 from '../../Assets/img/sofa4.png'


const Category = () => {
     return(
         <div className="category">
             <div className="container">
                <h2 className="category__name">Best selling products</h2>
                <ul className="category__list">
                    <li className="category__item">
                        <button href="#" className="category__link">All</button>
                    </li>
                    <li className="category__item">
                        <button href="#" className="category__link">Office</button>
                    </li>
                    <li className="category__item">
                        <button href="#" className="category__link">House</button>
                    </li>
                    <li className="category__item">
                        <button href="#" className="category__link">Heroca</button>
                    </li>
                </ul>

                <div className="category__page">
                <Splide  className='caregory__lists'>
                    <SplideSlide  className='category__slides'>
                        <a href="#" className="category__links">
                            <img src={sofa1} className="category__pic" alt="Image 1"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                        <a href="#" className="category__links">
                            <img src={sofa2} className="category__pic" alt="Image 2"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                        <a href="#" className="category__links">
                            <img src={sofa3} className="category__pic" alt="Image 2"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                        <a href="#" className="category__links">
                            <img src={sofa4} className="category__pic" alt="Image 2"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                    </SplideSlide>
                    <SplideSlide  className='category__slides'>
                        <a href="#" className="category__links">
                            <img src={sofa1} className="category__pic" alt="Image 1"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                        <a href="#" className="category__links">
                            <img src={sofa2} className="category__pic" alt="Image 2"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                        <a href="#" className="category__links">
                            <img src={sofa3} className="category__pic" alt="Image 2"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                        <a href="#" className="category__links">
                            <img src={sofa4} className="category__pic" alt="Image 2"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                    </SplideSlide>
                    <SplideSlide  className='category__slides'>
                        <a href="#" className="category__links">
                            <img src={sofa1} className="category__pic" alt="Image 1"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                        <a href="#" className="category__links">
                            <img src={sofa2} className="category__pic" alt="Image 2"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                        <a href="#" className="category__links">
                            <img src={sofa3} className="category__pic" alt="Image 2"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                        <a href="#" className="category__links">
                            <img src={sofa4} className="category__pic" alt="Image 2"/>
                            <p className="category__names">Gladiator Chair</p>
                            <p className="category__number">$ 1200</p>
                        </a>
                    </SplideSlide>
                </Splide>
                </div>
             </div>
         </div>
     )
}
export default Category