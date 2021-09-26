import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;
    let total = 0;
    for (const product of cart){
        total = total + product.amount_of_tea;
    }
  
    return (
        <div className='cart'>
           <h2>order teas : amount in gm</h2>
                <h3>item: {props.cart.length}</h3> 
                <h3>Total: {total} gm</h3>
                <h3>Tea name: </h3>
                <ul>
                    {
                        cart.map(tea => <li>{tea.tea}</li>)
                    }
                </ul>
                
               
        </div>
    );
    }

export default Cart;