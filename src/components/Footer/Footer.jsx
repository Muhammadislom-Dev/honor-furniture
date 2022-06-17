import './Footer.css'
import AbbaCoding from "../../Assets/img/1.png";
import AbbaMedia from "../../Assets/img/2.png";

const Footer = ()=>{
    return(
       <footer className="footer">
        
        <div className="footer-header">
         
        <div className="container">
                 <div className="footer-top">
                   <p className="footer-text">
                   Many desktop publishing  packages and web page editors now use Lorem Ipsum as their default model text. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. 
                   </p>
                   <div className="footer-right">
                        
                       <ul className="footer-list">
                           <li className="footer-item">
                               <h3 className="footer-title">
                                   About us
                               </h3>
                           </li>
                           <li className="footer-item">
                               <a href="#" className="footer-link">
                               About us
                               </a>
                           </li>
                           <li className="footer-item">
                               <a href="#" className="footer-link">
                               Our team
                               </a>
                           </li>    <li className="footer-item">
                               <a href="#" className="footer-link">
                               Frequent Questions
                               </a>
                           </li>    <li className="footer-item">
                               <a href="#" className="footer-link">
                               Contact us
                               </a>
                           </li>
                       </ul>
                       <ul className="footer-list">
                           <li className="footer-item">
                               <h3 className="footer-title">
                                   Information
                               </h3>
                           </li>
                           <li className="footer-item">
                               <a href="#" className="footer-link">
                               Blog
                               </a>
                           </li>
                           <li className="footer-item">
                               <a href="#" className="footer-link">
                               Pricing
                               </a>
                           </li>    <li className="footer-item">
                               <a href="#" className="footer-link">
                               Resources
                               </a>
                           </li>    <li className="footer-item">
                               <a href="#" className="footer-link">
                               Frequent Questions
                               </a>
                           </li>
                       </ul>
                       <ul className="footer-list">
                           <li className="footer-item">
                               <h3 className="footer-title">
                                   Contact
                               </h3>
                           </li>
                           <li className="footer-item">
                               <a href="#" className="footer-link">
                               Email us
                               </a>
                           </li>
                           <li className="footer-item">
                               <a href="#" className="footer-link">
                               Support Page
                               </a>
                           </li>    <li className="footer-item">
                               <a href="#" className="footer-link">
                               Facebook
                               </a>
                           </li>    <li className="footer-item">
                               <a href="#" className="footer-link">
                               Twitter
                               </a>
                           </li>
                       </ul>
                       </div>
                       
                   </div>
           </div>  
           </div>   


            
           <div className="footer-bottom">
               <div className="container">
                       <p className="bottom-text">
                       Все права защищены.
                       </p>
                       <ul className="bottom-list">
                           <li className="bottom-item">
                           <p className="bottom-subtext">
                           Разработано в
                           </p>
                           </li>
                           <li className="bottom-item">
                               <img src={AbbaCoding} alt="" className="bottom-img" />
                           </li>
                           <li className="bottom-item">
                               <img src={AbbaMedia} alt="" className="bottom-img" />
                           </li>

                       </ul>
                       </div>
           </div>
       </footer>
    )
}

export default Footer;