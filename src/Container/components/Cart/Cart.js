import React, { useState,useEffect } from 'react';
import { useGlobalState } from '../../../store';
import { useHistory } from 'react-router-dom';
import CartDesign from './CartDesign';
import EmptyCart from './EmptyCart';
import Header from './../Layout/Header';





// const getDataFromLocalStroage = () =>{
//     const data = localStorage.getItem("cartItems");
//     if(data){

//         return JSON.parse(data)

//     }else{
//         return []
//     }
// }

const Cart = () => {

    
   

    const [cartItems, setCartItems] = useGlobalState("cartItems");

    
     
    useEffect(() => {
        const data = localStorage.getItem("cartItems");
        if(data){
            setCartItems(JSON.parse(data))   
        }else{
            setCartItems([])
        }
               
    }, [])


   console.log(cartItems,"local")
   
   
  
    let history = useHistory();
    let totals = 0;

    cartItems.forEach(element => {
        totals += element.price
    });

    const handleClick = ()=>{
        history.push('/orderSummary')
    }

    const onDelete = (id) => {
        const newCartItems = cartItems.filter(item => item.id != id);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        setCartItems(newCartItems);
    }



    return (

        <div style={{minHeight:"100vh"}}> 
         
            {cartItems.length == 0 ? <EmptyCart /> : <CartDesign  onDelete={onDelete}  totals={totals} handleClick={handleClick} cartItems={cartItems} setCartItems={setCartItems}/>}

        </div>
       
    );
};

export default Cart;