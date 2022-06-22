import './App.css';
import {Route, Switch} from 'react-router-dom'
import Category from './components/Category/Category';
import Country from './components/Country/Country';
import Footer from './components/Footer/Footer';
import SliderBox from './components/Slider/Slider';
import HeaderInput from './Page/HeaderInput/HeaderInput';
import Catagory1 from './Page/Catagory1/Catagory1';
import Catagory2 from './Page/Catagory2/Catagory2';
import Catagory3 from './Page/Catagory3/Catagory3';
import AboutPage from './Page/AboutPage/AboutPage';
import Client from './components/Client/Client';
import Sofa from './components/Sofa/Sofa';


function App() {


  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
            <HeaderInput />
            {/* <Category /> */}
            <Sofa />
            <Client />
            <SliderBox />
            <Country />
            <Footer />
          </Route>
            <Route path='/catagory1'>
               <Catagory1 />
            </Route>
            <Route  path="/catagory2">
                <Catagory2 />
            </Route>
            <Route path="/catagory3">
                <Catagory3 />
            </Route>
            <Route path="/about">
               <AboutPage />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
