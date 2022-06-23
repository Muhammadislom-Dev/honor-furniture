import './Client.scss'
import person from '../../Assets/img/person.png'
import golden from '../../Assets/img/golden.png'
import nrg from '../../Assets/img/nrg.png'
import korzinka from '../../Assets/img/korzinka.png'
import makro from '../../Assets/img/makro.png'
import murad from '../../Assets/img/murad.png'


const Client = () => {

    
    return(
        <div className="client">
            <div className="container">
                <h2 className="client__name">Clients review</h2>
                <div className="client__page">
                    <ul className="client__list">
                        <li className="client__item client__items">
                            <img src={person} alt="" className="client__img" />
                        </li>
                        <li className="client__item">
                            <h3 className="client__names">Oleg Tinkoff</h3>
                        </li>
                        <li className="client__item">
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                        </li>
                        <li className="client__item">
                            <p className="client__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </p>
                        </li>
                    </ul>
                    <ul className="client__list">
                        <li className="client__item client__items">
                            <img src={person} alt="" className="client__img" />
                        </li>
                        <li className="client__item">
                            <h3 className="client__names">Oleg Tinkoff</h3>
                        </li>
                        <li className="client__item">
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                        </li>
                        <li className="client__item">
                            <p className="client__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </p>
                        </li>
                    </ul>
                    <ul className="client__list">
                        <li className="client__item client__items">
                            <img src={person} alt="" className="client__img" />
                        </li>
                        <li className="client__item">
                            <h3 className="client__names">Oleg Tinkoff</h3>
                        </li>
                        <li className="client__item">
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                        </li>
                        <li className="client__item">
                            <p className="client__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </p>
                        </li>
                    </ul>
                    <ul className="client__list">
                        <li className="client__item client__items">
                            <img src={person} alt="" className="client__img" />
                        </li>
                        <li className="client__item">
                            <h3 className="client__names">Oleg Tinkoff</h3>
                        </li>
                        <li className="client__item">
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                            <input class="client__star" type="checkbox" title="bookmark page" checked />
                        </li>
                        <li className="client__item">
                            <p className="client__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </p>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="client__box">
                <div className="container">
                    <h2 className="client__name">Bizning mahsulotlar</h2>
                    <ul className="client__title">
                        <li className="client__titles">
                            <a href="#" className="client__link"><img src={golden} alt="" className="client__pic" /></a>
                        </li>
                        <li className="client__titles">
                            <a href="#" className="client__link"><img src={nrg} alt="" className="client__picture" /></a>
                        </li>
                        <li className="client__titles">
                           <a href="#" className="client__link"> <img src={korzinka} alt="" className="client__pics" /></a>
                        </li>
                        <li className="client__titles">
                            <a href="#" className="client__link"><img src={makro} alt="" className="client__pics" /></a>
                        </li>
                        <li className="client__titles">
                            <a href="#" className="client__link"><img src={murad} alt="" className="client__pic" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Client