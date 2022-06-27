import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/Products.scss';
import Img1 from './images/bedroom.png';
import Img2 from './images/chair.png';
import Img3 from './images/sofa.png';
import Img4 from './images/sofa1.png';
import Img5 from './images/prod.png';
import Img6 from './images/prod2.png';
import Img7 from './images/prod3.png';
import { useState } from 'react';
import Slider from 'react-slick';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { useEffect } from 'react';
import axios from 'axios'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Products = ({english, uzbek, russian, dataProducts, best, dataMenu, dataTip, saved, all}) => {    

    // const bestProds = best ? subTips == data.category && prods == data.sub_category : true
    // const savedProds = saved ? numberLikes != 0 && numberLikes : true

    // slider carousel settings

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    };

    // categories

    let radio = document.querySelectorAll(".radio")  
    
    for (let i = 0; i < radio.length; i++) {
        radio[0].setAttribute("checked", "true")
    }    

    // tips of products

    const [subTips, setSubTips] = useState(1)

    function changeTips(item){          // categoriyalardan birortasini tanlaganda subCategoriyalar o'zgarishi
        setSubTips(item)
    }

    let tipology = document.querySelectorAll(".tipology")  
    
    for (let i = 0; i < tipology.length; i++) {
        tipology[0].setAttribute("checked", "true")
    }

    // products 

    const [prods, setProds] = useState(1)

    function changeProducts(item){          // subcategoriyalardan birortasini tanlaganda productlar o'zgarishi
        setProds(item)
    }

    // like algorithms
    const [numberLikes, setNumberLikes] = useState(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)  
    const [like, setLike] = useState(false)
    let likesArray = []
    let checkbox = document.querySelectorAll(".checkbox")

    function getLike(){
        setLike(!like)         
    }
    
    checkbox.forEach((c) => {               // like bosilganda localStoragega saqlash (avtomatik tarzda bo'lishi uchun hech qanday funksiya yozilmasdan to'g'ridan-to'g'ri bajarilmoqda)
        if(c.checked && c.id - 1 != likesArray){
            let cgl = {id: c.id-1, like: true}
            likesArray.push(cgl)
            if(likesArray.length > 0){
                localStorage.setItem("like", likesArray.map((p) => p.id))   
            }
        }if(likesArray.length == 0){
            localStorage.removeItem("like", likesArray) 
        }
    })         
    
    function unLike(item){                   // likeni qaytarib olish funksiyasi  
        const arr = likesArray.filter((inc) => inc.id != item) 
        localStorage.setItem("like", arr)     
        setNumberLikes(arr.map((c) => c.id))
    }

    window.addEventListener("load", () => {
        setNumberLikes(localStorage.getItem("like") ? localStorage.getItem("like").split(',') : 0)
    })

    // modal

    const [modalData, setModalData] = useState(dataProducts)
    const [modal, setModal] = useState(false)
    const [indexImg, setIndexImg] = useState(0)
    const [indexFile, setIndexFile] = useState(0)

    const img = modalData.map((c) => c.image)
    const img1 = modalData.map((c) => c.image1)
    const img2 = modalData.map((c) => c.image2)
    const img3 = modalData.map((c) => c.image3)
    const img4 = modalData.map((c) => c.image4)
    const otherImgs = [img, img1, img2, img3, img4]

    const [tour, setTour] = useState(false)
    const color1 = modalData.map((c) => c.color1)
    const color2 = modalData.map((c) => c.color2)
    const color3 = modalData.map((c) => c.color3)
    const colors = [color1, color2, color3]    
    const file1 = modalData.map((c) => c.file1)
    const file2 = modalData.map((c) => c.file2)
    const file3 = modalData.map((c) => c.file3)
    const files = [file1, file2, file3]    

    function showModal(item, category){         // modalni asosiy ekranda datasi bo'yicha ko'rsatish va datani qiriqish
        setModal(item)
        const newModalData = modalData.filter((post) => post.id == category)
        setModalData(newModalData)    
        console.log(newModalData)    
    }

    function closeModal(item){          // modalni asosiy ekranda olib tashlash hamda data tiklash
        setModal(item)        
        setModalData(dataProducts)
    }

    function changeImg(c, e){      // modalning ichidagi rasmlarni o'zgartirish funksiyasi
        setIndexImg(c.indexOf(e))
        setTour(false)
    }

    function changeFile(c, e){      // modalning ichidagi 3D rasmlarni o'zgartirish funksiyasi        
        setIndexFile(c.indexOf(e))
    }

    
    // buy products ----------------------------------------------

    const [showBuy, setShowBuy] = useState(false)

    function showHandleBuy(item){
        setShowBuy(item)
    }

    function openBuyModal(){
        setModal(false)
        showHandleBuy(true)
    }

    // location methods ---------------------------------------

    const apiLocation = `https://api.openweathermap.org/data/2.5/onecall?`
    const apiKey = `4c28cc666e8471d7a6a57d442f1fedb0` 
    const [locationData, setLocationData] = useState()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {       
            let urlLoc = `${apiLocation}lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,daily&appid=${apiKey}`
            axios.get(urlLoc).then((response) => setLocationData(response.data.timezone))
        })
    }, [])

    // bot methods ---------------------------------------

    const [nameValue, setNameValue] = useState("")
    const [numberValue, setNumberValue] = useState("")   
    const [allPrice, setAllPrice] = useState(120)
    const [productNames, setProductNames] = useState("")
    const [payValue, setPayValue] = useState("")  
    const [delivery, setDelivery] = useState("")  
    const [redName, setRedName] = useState(false);
    const [redNumber, setRedNumber] = useState(false) 

    let newPro = []
    let newPrice = []
    let nbm = 0

    numberLikes != 0 && numberLikes.forEach((data) => {
        newPro.push(dataProducts.map((item) => item.id == data ? item.name_en : null))              // sotib olinayotgan mahsulotlar nomi
        newPrice.push(dataProducts.map((item) => item.id == data ? item.price : 0))           // sotib olinayotgan mahsulotlar narxlari
    })

    newPrice.forEach((c) => {
        c.forEach((k) => {
            nbm += k                    // umumiy summani hisoblash
        })
    })

    function changePayment(item){
        setPayValue(item)
    }

    console.log(newPro)            

    function findLocation(){
        setDelivery(locationData)
    }

    function handleChange1(item){
        setNameValue(item)
        setRedName(false)
    }
    function handleChange2(item){
        setNumberValue(item)
        setRedNumber(false)
    }    

    const [modalOk, setModalOk] = useState(true)

    function changeModal(){
        setModalOk(false)
        setShowBuy(false)
    }
    
    let bot = {
        TOKEN: "5480260288:AAHdOyJVgVC_mkLwcqp7FdAto6ZMEYByvk8",
        chatID: "-1001622994651",
        message: `Ism: ${nameValue}; \n Raqam: ${numberValue}; \n Umumiy summa: $${nbm}; \n Hudud: ${locationData}; \n To'lov turi: ${payValue}; \n Mahsulotlar: ${newPro.map((c) => c.map((k) => c && k))}`
    }

    function sendMessage(e){  
        
        if(payValue === ""){           
            alert("Iltimos to'lov turini tanlang")        
        }else if(nameValue === ""){            
            setRedName(true)
        }else if(numberValue === ""){           
            setRedNumber(true)        
        }else{
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `, {
                method : "GET"
            })
            .then(success => {
                console.log('send message')
            }, error => {
                console.log(error)
            })

            setNameValue("")
            setNumberValue("")
            setPayValue("")
            changeModal()
        }
        
    }

    return (
        <>
            <div className='Products'>
                <div className="wrapper row">

                    {/* all products */}

                    {!best &&
                        <div className="col-md-12 menu-catalog d-flex">
                            {dataMenu.map((menu) => {
                                return(
                                    <div className='catalog-menu'>
                                        <input type="radio" className="form-check-input radio" onChange={() => changeTips(menu.id)} name="flexRadioDefault" id={`radio${menu.id+1}`} />
                                        <label htmlFor={`radio${menu.id+1}`}  >
                                            <img src={menu.image} alt="" />
                                        </label>
                                    </div>
                                )
                            })}                    
                        </div>
                    }

                    {!best && !saved &&
                        <div className='col-md-12 tip-catalog'>
                            {dataTip.map((tip) => {
                                return(
                                    subTips == tip.category &&
                                    <div className="tip">
                                        <input type="radio" className="form-check-input tipology" name="flexRadioDefault1" onChange={() => changeProducts(tip.id)} id={`tip${tip.id-1}`} />
                                        <label htmlFor={`tip${tip.id-1}`}  >
                                            <p>{tip.name_en}</p>
                                        </label>
                                    </div>
                                )
                            })}                    
                        </div>
                    }

                    {all && !best && !saved &&
                        <div className="products row">                    
                            {dataProducts.map((data, index) => {
                                return(
                                    // subTips == data.category && prods == data.sub_category &&
                                    <>
                                        <div className={`col-3 prod ${subTips == data.category && prods == data.sub_category && "middle-main"}`} >
                                            <div className="body">
                                                <div className="img-list" onClick={() => showModal(true, data.id)}>
                                                    <img src={data.image} alt="" />
                                                </div>
                                                <div className="title">
                                                    <span className="">
                                                        <p>{data.name_en}</p>
                                                        <h4>$ {data.price}</h4>                                
                                                    </span>   
                                                    {numberLikes != 0 && numberLikes.map((item) => {
                                                            return(                                                        
                                                                item == data.id &&
                                                                <input type="checkbox" onChange={() => unLike(data.id)} className='checkbox' id={data.id+1} checked />                                                                                                                                                                                
                                                            )
                                                        })
                                                    }   
                                                    <input type="checkbox" onChange={() => getLike()} className='checkbox' id={data.id+1} />                                            
                                                    <label htmlFor={data.id+1}>                                                
                                                        <i className={`fa fa-heart-o`}></i> 
                                                        <i className={`fa fa-heart`}></i>                                                                                              
                                                    </label>
                                                </div>
                                            </div>
                                        </div>                                
                                    </>
                                )
                            })}
                        </div>
                    }

                    {/* saved products */}

                    {!all && !best &&
                        <div className='col-md-12 tip-catalog'>
                            <div className="tip">
                                <input type="radio" className="form-check-input tipology" checked name="flexRadioDefault1" id={`tip@`} />
                                <label htmlFor={`tip@`}  >
                                    <p>Saved</p>
                                </label>
                            </div>                 
                        </div>
                    }
                    
                    {saved && !best && !all &&
                        <div className="products row">                    
                            {dataProducts.map((data, index) => {
                                return(                                        
                                    numberLikes != 0 && numberLikes.map((item) => {
                                        return(                                                        
                                            item == data.id &&
                                            <div className={`col-3 prod ${subTips == data.category && "middle-main"}`} >
                                                <div className="body">
                                                    <div className="img-list" onClick={() => showModal(true, data.id)}>
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <div className="title">
                                                        <span className="">
                                                            <p>{data.name_en}</p>
                                                            <h4>$ {data.price}</h4>                                
                                                        </span>                                                                                                                                       
                                                        <input type="checkbox" onChange={() => unLike(data.id)} className='checkbox' id={data.id+1} checked />                                                                                
                                                        <label htmlFor={data.id+1}>                                                
                                                            <i className={`fa fa-heart-o`}></i> 
                                                            <i className={`fa fa-heart`}></i>                                                                                              
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })                                                                
                                )
                            })}
                            <div className='all-buy col-md-12'>
                                <button className='btn' onClick={() => openBuyModal()}>BUY ALL</button>
                            </div>
                        </div>
                    }

                    {/* best products */}

                    {!all && !saved &&
                        <h1 className='best-prod text-center'>Best selling products</h1> 
                    }

                    {best && !saved && !all &&
                        // <Slider {...settings} className="">
                            <div className="products row">
                                {dataProducts.map((data, index) => {
                                    return(     
                                        data.best &&                                                 
                                        <>
                                            <div className={`prod col-3 middle-main`} >
                                                <div className="body">
                                                    <div className="img-list" onClick={() => showModal(true, data.id)}>
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <div className="title">
                                                        <span className="">
                                                            <p>{data.name_en}</p>
                                                            <h4>$ {data.price}</h4>                                
                                                        </span>   
                                                        {numberLikes != 0 && numberLikes.map((item) => {
                                                                return(                                                        
                                                                    item == data.id &&
                                                                    <input type="checkbox" onChange={() => unLike(data.id)} className='checkbox' id={data.id+1} checked />                                                                                                                                                                                
                                                                )
                                                            })
                                                        }   
                                                        <input type="checkbox" onChange={() => getLike()} className='checkbox' id={data.id+1} />                                            
                                                        <label htmlFor={data.id+1}>                                                
                                                            <i className={`fa fa-heart-o`}></i> 
                                                            <i className={`fa fa-heart`}></i>                                                                                              
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>                                
                                        </>                                                                        
                                    )
                                })}
                            </div>
                        // </Slider>
                    }

                    {/* modal for one product */}

                    {modalData.map((data) => {
                        return(
                            <div className={`one-product col-md-12 ${!modal && "d-none"}`}>
                                <i className="fa fa-times"  onClick={() => closeModal(false)}></i>
                                <div className="col-md-6 imgs">
                                    <div className="body row">
                                        {!tour && otherImgs.slice(indexImg, indexImg+1).map((p) => {
                                            return(
                                                <div className="img-list col-12">
                                                    <div className="body">
                                                        <img src={p} alt="" />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {tour && files.slice(indexFile, indexFile+1).map((p) => {
                                            return(
                                                <div className="img-list col-12">
                                                    <div className="body">
                                                        <img src={p} alt="" />
                                                    </div>
                                                </div>
                                            )
                                        })}                                                
                                        {otherImgs.map((p) => {
                                            return(
                                                <div className="other">
                                                    <div className="body" onClick={() => changeImg(otherImgs, p)}>
                                                        <img src={p} alt="" />
                                                    </div>
                                                </div>
                                            )
                                        })}                                    
                                        <div className="other">
                                            <div className="body" onClick={() => setTour(true)}>
                                                <p>360 &#176;</p>                                            
                                            </div>                                
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 texts">
                                    <div className="body">
                                        <h1>$ {data.price}</h1>
                                        <div className="colors">
                                            {colors.map((c) => (
                                                <button className='cls' style={{backgroundColor: `${c}`}} onClick={() => changeFile(colors, c)}></button>                                                                                                      
                                            ))}
                                        </div>
                                          
                                        <div>
                                        <Accordion>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <Typography className='accordion-name' >Product information</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <Typography className='accordion-name'>Summary</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <Typography className='accordion-name'>Weights & Dimensions</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                            <Typography>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                                            </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion>
                                            <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <Typography className='accordion-name'>Review</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                            <Typography>
                                            <b>@Jamshid</b> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. 😅❤️

                                            <b>@Muzaffar</b> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text!
                                            </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                        </div>


                                        <div className="btns">                                        
                                            <Link className='buy btn' to="/saved">BUY</Link>                                                                                
                                            <button className='save btn'>
                                                {numberLikes != 0 && numberLikes.map((item) => {
                                                    return(                                                        
                                                        item == data.id &&
                                                        <input type="checkbox" onClick={() => unLike(data.id)} className='checkbox1' id={data.id+1} checked />                                                                                                                                                                                
                                                    )
                                                })}
                                                <input type="checkbox" className='checkbox1' id={data.id+1} checked={like} />   
                                                <label className='modlab' htmlFor={data.id+1} onChange={() => getLike()} >                                                
                                                    SAVE
                                                    <i className={`fa fa-heart-o mx-2`}></i> 
                                                    <i className={`fa fa-heart mx-2`}></i>                                                                                           
                                                </label>
                                            </button>   
                                        </div>                                   
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={`contrast ${!modal && "d-none"}`} onClick={() => closeModal(false)}></div> 

                {/* modal for buy all products */}

                <div className={`buy-modal ${!showBuy && "d-none"}`}>
                    <i className='fa fa-times' onClick={() => showHandleBuy(false)}></i>
                    <h1>Please verify your order</h1>                                              
                    <div className='row'>
                        <div className='col-md-6'>
                            <h1 className='price'>Cost: $ {nbm}</h1>
                            <div className='col-md-12 faq'>
                                <div className='d-flex align-items-center justify-content-between'>                 
                                    <h5>Products</h5>                 
                                    <i className='fa fa-chevron-down'></i>                
                                </div>                                
                                {dataProducts.map((item) => {
                                    return(
                                        numberLikes != 0 && numberLikes.map((post) => {
                                            return( 
                                                post == item.id &&                                                    
                                                    <div className='answer'>
                                                        <div className='body'>
                                                            <p className="title">{numberLikes.indexOf(post)+1}. {item.name_en}</p>                   
                                                            <h6>${item.price}</h6>
                                                            <div className='d-flex'>
                                                                <input type="checkbox" className='delet-checkbox' checked onChange={() => unLike(item.id)} id='delet' />
                                                                <label className='delet-prod' htmlFor='delet'>x</label>
                                                                <input type="checkbox" className='eye-checkbox' id='eye' />
                                                                <label className='eye-prod mx-3' htmlFor='eye'>
                                                                    <Visibility className='visible' />
                                                                    <VisibilityOff className='visibleoff' />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>                  
                                            )
                                        })
                                        )
                                    })}
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='col-md-12 faq'>
                                <div className='d-flex align-items-center justify-content-between'>                 
                                    <h5>Payment type</h5>                 
                                    <i className='fa fa-chevron-down'></i>                
                                </div>                                
                                <div className='answer d-flex align-items-center justify-content-between'>
                                    <button className='btn click' value={`click`} onClick={(e) => changePayment("Click")} >Click</button>
                                    <button className='btn payme' value={`PayMe`} onClick={(e) => changePayment("PayMe")} >PayMe</button>
                                    <button className='btn cash' value={`Cash`} onClick={(e) => changePayment("Cash")} >Cash</button>
                                    {/* <StripeCheckout /> */}
                                </div>                  
                            </div>
                            <div className='col-md-12 faq delivery'>
                                <div className='d-flex align-items-center justify-content-between'>                 
                                    <h5>Delivery</h5>                 
                                    <i className='fa fa-chevron-down'></i>                
                                </div>                                
                                <div className='answer d-flex align-items-start mt-2 justify-content-between'>
                                    {delivery != "" &&
                                        <h4 className='border border-dark'>{delivery}</h4>
                                    }
                                    <button className='btn location' onClick={() => findLocation()}>Location</button>                
                                </div>                  
                            </div>
                        </div>
                        <div className='col-md-12 info-user'>
                            <div className='d-flex align-items-center justify-content-between'>                 
                                <h5>Info</h5>                 
                                <i className='fa fa-chevron-down'></i>                
                            </div>                                
                            <div className='row align-items-center justify-content-between'>
                                <div className="col-md-6 px-2">
                                    <label className='form-label' htmlFor='name'>Name</label>
                                    <input className={`${redName && "red-line"} form-control`} type="text" value={nameValue} onChange={(e) => handleChange1(e.target.value)} id='name' placeholder='Abdulhamid' />                
                                </div>
                                <div className="col-md-6 px-2">
                                    <label className='form-label d-block' htmlFor='number'>Telephone</label>
                                    <input value={numberValue} placeholder='+99894 123 45 67' className={`form-control ${redNumber && "red-line"}`} onChange={(e) => handleChange2(e.target.value)} id="number" type="text" /> 
                                </div>
                            </div>                  
                        </div>
                    </div>
                    <div className='col-md-12 btns'>                              
                        <button className='btn' onClick={() => sendMessage()} >VERIFY</button>          
                    </div>
                </div>
                <div className={`contrast-buy ${!showBuy && "d-none"}`} onClick={() => showHandleBuy(false)}></div>

                <div className={`contrast ${modalOk && "d-none"}`} onClick={() => setModalOk(true)}></div>
                <div className={`col-md-6 offset-md-3 buy-ok row ${!modalOk && "show-modal"}`}>
                    <i className='fa fa-times' onClick={() => setModalOk(true)} ></i> 
                    {english &&
                        <h1>THANK YOU FOR YOUR APPEAL &#128522;</h1> 
                    } 
                    {russian &&
                        <h1>СПАСИБО ЗА ОБРАЩЕНИЕ &#128522;</h1> 
                    } 
                    {uzbek &&
                        <h1>MUROJAATINGIZ UCHUN TASHAKKUR &#128522;</h1> 
                    }                                                 
                    <div className='col-md-4 offset-md-2'>                    
                    {english && 
                        <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
                    }
                    {russian && 
                        <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
                    }
                    {uzbek && 
                        <button className='btn btn-group' onClick={() => setModalOk(true)}>OK</button>
                    }                       
                    </div>
                </div> 
            </div>           
        </>
    );
};

export default Products;