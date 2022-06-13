import './App.css';
import Category from './components/Category/Category';
import Country from './components/Country/Country';
import Degress from './components/Degress/Degress';
import Footer from './components/Footer/Footer';
import SliderBox from './components/Slider/Slider';
import Sofa from './components/Sofa/Sofa';
import HeaderInput from './Page/HeaderInput/HeaderInput';

function App() {


  return (
    <div className="App">
       <HeaderInput />
       <Category />
       <Sofa />
       <Degress />
       <SliderBox />
       <Country />
       <Footer />
    </div>
  );
}

export default App;
