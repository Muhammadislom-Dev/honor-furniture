import React from "react";

const Card = ({date, cardIndexs}) =>{
    return(
        <div>
            {
                date[cardIndexs].map(items =>(
                    <div className='box'>
                        <img className="header__pictures" src={items.img} alt="" />
                    </div>
                ))
            }
        </div>
    )
}
export default Card