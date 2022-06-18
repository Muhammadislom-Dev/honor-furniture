import Navbar from '../../components/Navbar/Navbar'
import Catalogy from '../../components/Catalogy/Catalogy'
import './Catagory1.scss'
import Category from '../../components/Category/Category'
import SliderBox from '../../components/Slider/Slider'
import Country from '../../components/Country/Country'
import Footer from '../../components/Footer/Footer'


const Catagory1 = () => {
    return(
        <div className="catagory1">
            <Navbar />
            <Catalogy />
            <Category />
            <SliderBox />
            <Country />
            <Footer />
        </div>
    )
}
export default Catagory1