import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {
    const {img, tea, amount_of_tea, tip, category, ratting} = props.product;
    const element = <FontAwesomeIcon icon={faCoffee} />
    return (
        
    <div className='card'>
        <div className='image'>
            <img  src={img}/>
        </div>
            
          <div>
          <h4>Name: {tea}</h4>
          <h5>Amount of Tea in gm: {amount_of_tea}</h5>
          <h5>Tips: {tip}</h5>
          <h5>Category: {category}</h5>
          <p>Ratting: {ratting}</p>
          <button onClick={()=>props.handleAddToCart(props.product)}className='btn-regular'>{element} Order Tea</button>
          </div>
     </div>
       
    );
};

export default Product;