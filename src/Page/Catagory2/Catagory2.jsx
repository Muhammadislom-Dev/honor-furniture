import Catagory from '../../components/Catagory/Catagory'
import Category from '../../components/Category/Category'
import Country from '../../components/Country/Country'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import SliderBox from '../../components/Slider/Slider'
import './Catagory2.scss'


const Catagory2 = () => {
    return(
        <div className="catagory2">
            <Navbar />
            <Catagory />
            {/* <Category /> */}
            <SliderBox />
            <Country />
            <Footer />
        </div>
    )
}
export default Catagory2