import './Sofa.scss'
import React from 'react'

import tissue from "../../Assets/img/Tissue.png"
import wipes from "../../Assets/img/wipes.png"
import west from "../../Assets/img/west.png"
import Simple__wipes from "../../Assets/img/simple__chair.png"
import sofa__yellow from "../../Assets/img/sofa__yellow.png"

const Sofa = () => {
    return (
        <div className="sofa">
        <div className='container'>
                <div className="sofa__top">
                    <div className="sofa__left">
                            <div className="sofa__left-images">
                                <img className='left__tissues-img' src= {tissue} alt="Img__Tissue" />
                                <div className="left__tissues-info">
                                    <h3 className="sofa__title-info">Tissues</h3>
                                    <p className="sofa__text-info">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit </p>
                                </div>
                            </div>
                            <div className="sofa__left-wipes">
                                <img className='left__wipes-img' src= {wipes} alt="Img__wipes" />
                                <div className="left__wipes-info">
                                    <h3 className="sofa__title-info">Simple Wipes</h3>
                                    <p className="sofa__text-info">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit </p>
                                </div>     
                           </div>
                    </div>
                        <div className="sofa__right">
                            <img className='sofa__right-img' src={west} alt="Img__West" />
                            <div className="sofa__right-info">
                                <h3 className="sofa__title-info">West Wipes</h3>
                                <p className="sofa__text-info">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit </p>
                            </div>     
                        </div>
                </div>

                <div className="sofa__bottom">

                    <div className="sofa__bottom-left">
                        <img className='sofa__bottom-img1' src={Simple__wipes} alt="Simple__wipes " />
                        <div className="bottom__left-info">
                            <h3 className='bottom__title-info'>Simple Wipes</h3>
                            <p className='left-bottom__text-info'>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>

                    <div className="sofa__bottom-right">
                        <div className="bottom__right-info">
                            <h3 className='bottom__title-info'>Tissues</h3>
                            <p className='bottom__text-info'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit </p>
                        </div>
                        <img className='sofa__bottom-img2' src={sofa__yellow} alt="sofa__yellow" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sofa