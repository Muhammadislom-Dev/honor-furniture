import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import './HeaderInput.css'

const HeaderInput = () =>{
    return(
        <div className="headerinput">
            <Navbar />
            <Header />
        </div>
    )
}
export default HeaderInput