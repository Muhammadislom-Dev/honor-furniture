import './About.scss'

import hotel from '../../Assets/img/hotel.png'
import message from '../../Assets/img/message.png'

const About = () => {
    return(
        <div className="about">
            <div className="container">


                <h2 className="about__name">About us</h2>
                <p className="about__date">AUGust 13, 2021 • Daily digest</p>

                <div className="about__page"><img src={hotel} alt="" className="about__img" /></div>

                <button className="about__message">
                    <img src={message} alt="" className="about__picture" />
                </button>

                <p className="about__text">Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.</p>

                <p className="about__text">Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration. </p>

                <p className="about__text">The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? </p>
            </div>
        </div>
    )
}
export default About