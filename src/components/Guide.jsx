import React from "react";
import guide from "../image/guide.avif"
import "./Guide.css";


function Guide () {
    return(
    <div className="guide-container">
        <div className="guide-content">
            <div className="guide-image">
                <img src={guide} alt="Guide" className="guide-img"/>
            </div>
            <div className="guide-text">
                <h2 className="guide-title"> Your Guide</h2>
                <p className="guide-paragraph">"I have visite Tropicals only once but that single visit was sufficient
                    for me to fall in love with it and become well-acquinted with everything
                    that this beautiful place has to offer"
                </p>
                <h5 className="guide-subtitle">its_Dan-the_adventurer</h5>           
            </div>
        </div>
    </div>
    )
}
export default Guide;