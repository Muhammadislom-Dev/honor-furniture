import { Visibility, VisibilityOff } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Products from './components/Products/Products';
import SavedProducts from './components/Products/SavedProducts';
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

  // buy products ----------------------------------------------

  const [showBuy, setShowBuy] = useState(false)
  const [numberLikes, setNumberLikes] = useState(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)

  function showHandleBuy(item){
    setShowBuy(item)
  }

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <Products dataProducts={dataProducts} dataMenu={dataMenu} dataTip={dataTip} showHandleBuy={showHandleBuy} /> */}
        <Navbar />
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
        {/* <SavedProducts /> */}

        <div className={`buy-modal ${!showBuy && "d-none"}`}>
          <i className='fa fa-times' onClick={() => showHandleBuy(false)}></i>
          <h1>Please verify your order</h1>
          <div className='row'>
            <div className='col-md-6'>
              <h1 className='price'>Cost: $122299,00</h1>
              <div className='col-md-12 mt-3 faq'>
                <div className='d-flex align-items-center justify-content-between'>                 
                  <h5>Products</h5>                 
                  <i className='fa fa-chevron-down'></i>                
                </div>                                
                <div className='answer'>
                  <div className='body'>
                    <p className="title">1. LEVA chair</p>                   
                    <h6>$400.00</h6>
                    <div className='d-flex'>
                      <input type="checkbox" className='delet-checkbox' id='delet' />
                      <label className='delet-prod' htmlFor='delet'>x</label>
                      <input type="checkbox" className='eye-checkbox' id='eye' />
                      <label className='eye-prod mx-3' htmlFor='eye'>
                        <Visibility className='visible' />
                        <VisibilityOff className='visibleoff' />
                      </label>
                    </div>
                  </div>
                </div>                  
              </div>
            </div>
            <div className='col-md-6'>
              <div className='col-md-12 faq'>
                <div className='d-flex align-items-center justify-content-between'>                 
                  <h5>Payment type</h5>                 
                  <i className='fa fa-chevron-down'></i>                
                </div>                                
                <div className='answer d-flex align-items-center justify-content-between'>
                  <button className='btn click'>Click</button>
                  <button className='btn payme'>PayMe</button>
                  <button className='btn cash'>Cash</button>
                  <StripeCheckout /> 
                 </div>                  
              </div>
              <div className='col-md-12 faq delivery'>
                <div className='d-flex align-items-center justify-content-between'>                 
                  <h5>Delivery</h5>                 
                  <i className='fa fa-chevron-down'></i>                
                </div>                                
                <div className='answer d-flex align-items-center justify-content-between'>
                  <button className='btn location'>Location</button>                
                </div>                  
              </div>
            </div>
          </div> 
           <div className='col-md-12 btns'>                              
            <button className='btn'>VERIFY</button>          
          </div> 
        </div> 
        <div className={`contrast-buy ${!showBuy && "d-none"}`} onClick={() => showHandleBuy(false)}></div>
      </div>
    </BrowserRouter>
  );
};

export default App;