import "./Country.css";
import CountryFlag from "../../Assets/img/3.png"

const  Country=()=>{
    return(
        <section className="country">
            <div className="container">
                <div className="country-header">
                    <h2 className="country-title">
                    Biz export qiladigan davlatlar
                    </h2>
                </div>
                <div className="country-footer">
                    <ul className="country-list">
                        <li className="country-item">
                          <img src={CountryFlag} alt="" className="country-img" />          
                        </li>
                        <li className="country-item">
                            <img src={CountryFlag} alt="" className="country-img" />          
                        </li> <li className="country-item">
                            <img src={CountryFlag} alt="" className="country-img" />          
                        </li> <li className="country-item">
                            <img src={CountryFlag} alt="" className="country-img" />          
                        </li> <li className="country-item">
                            <img src={CountryFlag} alt="" className="country-img" />          
                        </li> <li className="country-item">
                           <img src={CountryFlag} alt="" className="country-img" />          
                        </li>
                    </ul>
                 </div>
            </div>
        </section>
    )
}

export default Country;