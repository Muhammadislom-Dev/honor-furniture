import Catalog from '../../components/Catalog/Catalog'
import Category from '../../components/Category/Category'
import Country from '../../components/Country/Country'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import SliderBox from '../../components/Slider/Slider'
import './Catagory3.scss'


const Catagory3 = () => {
    return(
        <div className="catagory3">
            {/* <Navbar /> */}
            <Catalog />
            {/* <Category /> */}
            <SliderBox />
            <Country />
            <Footer />
        </div>
    )
}
export default Catagory3