import React from "react";
import Img from "../image/logo.png"
import "./Hero.css";

function Hero () {
    return(
        <section className="hero">
            <div className="background-image"></div>
             <img src={Img} className="hero--img"
            /> 
            <p className="hero--text">
                Making most of the leisure time in exploring the 
                mountain dunes 
                and volcanos along the highland of the country
            </p>

        </section>
    )
}
export default Hero;