import { Visibility, VisibilityOff } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Products from './components/Products/Products';
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
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useTranslation } from 'react-i18next';
import NavbarCopy from './components/Navbar copy/Navbar';

const App = () => {

  // data of products -------------------------------------------

  const [dataProducts, setDataProducts] = useState([]);
  const urlProducts = `http://93.189.40.27:2400/products/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlProducts);
      setDataProducts(request.data);
      return request;
    };
    fetchData()
  }, [urlProducts]);

  // data of categories -------------------------------------------

  const [dataMenu, setDataMenu] = useState([]);
  const urlMenu = `http://93.189.40.27:2400/categories/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlMenu);
      setDataMenu(request.data);
      return request;
    };
    fetchData()
  }, [urlMenu]);

  // data of subcategories -------------------------------------------

  const [dataTip, setDataTip] = useState([]);
  const urlTip = `http://93.189.40.27:2400/subcategories/`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(urlTip);
      setDataTip(request.data);
      return request;
    };
    fetchData()
  }, [urlTip]);

  // i18nexus

  // const {t, i18n} = useTranslation()




  // Language components

  const [english, setEnglish] = useState(true);
  const [russian, setRussian] = useState(false);
  const [uzbek, setUzbek] = useState(false);   
  // const [langTitle, setLangTitle] = useState(localStorage.getItem('i18nextLng') ? localStorage.getItem('i18nextLng').toUpperCase() : "") 

  function change1(item) {  
    // i18n.changeLanguage("ru") 
    // setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setRussian(item)
    setEnglish(!item)
    setUzbek(!item)
  }
  function change2(item) {
    // i18n.changeLanguage("en") 
    // setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setEnglish(item)
    setRussian(!item)
    setUzbek(!item)  
  }
  function change3(item) { 
    // i18n.changeLanguage("uz") 
    // setLangTitle(localStorage.getItem('i18nextLng').toUpperCase())
    setUzbek(item)
    setEnglish(!item)
    setRussian(!item)   
  }

  // window.addEventListener("load", () => {    
  //   setRussian(true)
  //   setEnglish(false) 
  //   localStorage.setItem("i18nextLng", "en") 
  //   setLangTitle(localStorage.getItem('i18nextLng').toUpperCase()) 
  // })

  // buy products ----------------------------------------------

  const [showBuy, setShowBuy] = useState(false)
  const [numberLikes, setNumberLikes] = useState(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)

  function showHandleBuy(item){
    setShowBuy(item)
  }

  return (
    <BrowserRouter>
      <div className='App'>
        <NavbarCopy english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} />
        <Switch>
          <Route exact path="/">
            <HeaderInput />                   
            {/* <Category /> */}
            <Products english={english} russian={russian} uzbek={uzbek} best={true} all={false} saved={false} dataProducts={dataProducts} dataMenu={dataMenu} dataTip={dataTip} showHandleBuy={showHandleBuy} />
            <Sofa />
            <Client />
            <SliderBox />
            <Country />
            <Footer />
          </Route>
          <Route path='/saved'>
            <Products english={english} russian={russian} uzbek={uzbek} best={false} all={false} saved={true} dataProducts={dataProducts} dataMenu={dataMenu} dataTip={dataTip} showHandleBuy={showHandleBuy} />
          </Route>          
          <Route path='/products'>
            <Products english={english} russian={russian} uzbek={uzbek} best={false} all={true} saved={false} dataProducts={dataProducts} dataMenu={dataMenu} dataTip={dataTip} showHandleBuy={showHandleBuy} />
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
    </BrowserRouter>
  );
};

export default App;