import './Sofa.scss'
import chair from '../../Assets/img/Tissue.png'
import chair1 from '../../Assets/img/west.png'
import chair2 from '../../Assets/img/wipes.png'
import chairr3 from '../../Assets/img/chairr3.png'
import chairs from '../../Assets/img/chairs.png'

const Sofa = () => {
    return(
        <div className="sofa">
            <div className="container">
                <div className="sofa__page">
                    <div className="sofa__div">
                        <div className="sofa__list">
                            <img src={chair} alt="" className="sofa__img" />
                            <div className="sofa__item">
                                <h2 className='sofa__name'>Tissues</h2>
                                <p className="sofa__text">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit</p>
                            </div>
                        </div>
                        <div className="sofa__lists">
                            <img src={chair2} alt="" className="sofa__pic" />
                            <div className="sofa__items">
                                <h2 className="sofa__name">Simple Wipes</h2>
                                <p className="sofa__text">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit </p>
                            </div>
                        </div>
                    </div>

                    <div className="sofa__title">
                        <img src={chair1} alt="" className="sofa__image" />
                        <div className="sofa__titles">
                            <h2 className="sofa__name">Wet Wipes</h2>
                            <p className="sofa__text">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit </p>
                        </div>
                    </div>
                </div>

                <div className="sofa__box">
                    <div className="sofa__left">
                        <img src={chairr3} alt="" className="sofa__pictures" />
                        <div className="sofa__lefts">
                            <h2 className="sofa__names">Simple Wipes</h2>
                            <p className="sofa__texts">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>

                    <div className="sofa__right">
                        <div className="sofa__rights">
                            <h2 className="sofa__names">Tissues</h2>
                            <p className="sofa__texts2">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit </p>
                        </div>
                        <img src={chairs} alt="" className="sofa__imgs" />
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Sofa