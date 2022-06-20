import './AboutPage.scss'

import Navbar from '../../components/Navbar/Navbar'
import About from '../../components/About/About'
import SliderBox from '../../components/Slider/Slider'
import Footer from  '../../components/Footer/Footer'

const AboutPage = () => {
    return(
        <div className="aboutpage">
            <Navbar />
            <About />
            <SliderBox />
            <Footer />
        </div>
    )
}

export default AboutPage