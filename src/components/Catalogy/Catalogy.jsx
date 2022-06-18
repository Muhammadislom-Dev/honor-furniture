import './Catalogy.scss'

import arrow from '../../Assets/img/arrow.png'
import { Link } from 'react-router-dom'

const Catalogy = () => {
    return(
        <div className="catalogy">
            <div className="container">
                 <h2 className="catalogy__name">Classic chairs with special design</h2>
                 <div className="catalogy__title">
                    <a href="#" className="catalogy__link">Catalogue    <img src={arrow} alt="" className="catalogy__img" /></a>
                 </div>

                 <ul className="catalogy__list">
                    <li className="catalogy__item">
                        {/* <a href='#' className="catalogy__number">01-</a> */}
                        <Link to="/catagory1" className='catalogy__number'>01-</Link>
                    </li>
                    <li className="catalogy__item">
                        {/* <a  href='#' className="catalogy__numbers">02-</a> */}
                        <Link to="/catagory2" className='catalogy__numbers'>02-</Link>
                    </li>
                    <li className="catalogy__item">
                        {/* <a  href='#' className="catalogy__numbers">03-</a> */}
                        <Link to='/catagory3' className="catalogy__numbers">03-</Link>
                    </li>
                 </ul>

                 <ul className="catalogy__lists">
                    <li className="catalogy__items">
                        <button className="catalogy__btn"></button>
                    </li>
                    <li className="catalogy__items">
                        <button className="catalogy__btns"></button>
                    </li>
                    <li className="catalogy__items">
                        <button className="catalogy__btns"></button>
                    </li>
                 </ul>
            </div>
        </div>
    )
}
export default Catalogy