import React from 'react';
import "./Card.css";


export function Card (props) {
  

  return (
    <div className="card">
      
         <img src={props.image} alt='card-img' className='cardImage'></img>  
      
         <h3 className='card--title'>{props.title}</h3>
         <p className='card--desc'>{props.description}</p>
      </div>
  );
};


