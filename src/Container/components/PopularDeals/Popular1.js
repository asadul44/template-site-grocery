import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../../store';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import ProductData from '../../../ProductData';
import { message } from 'antd';

const Popular1 = () => {

  
    let {products} = ProductData;
    const [cartItems, setCartItems] = useGlobalState('cartItems');
    let history = useHistory();

    const addItems = (item) =>{
        const exist = cartItems.find((x) => x.id === item.id);
        if (exist) {
            message.warning({
                content: 'This Product already added',
                style: {
                  marginTop: '20vh',  
                },
              })
            return;
        }else{
            message.success({
                content: 'successfully added to basket',
                style: {
                  marginTop: '20vh',  
                },
              })
              setCartItems([...cartItems, { id: item.id, name: item.name, price: item.price, quantity: item.quantity, picture: item.picture, unitPrice: item.price }])
        }
           
    }


    const gotoBack = ()=>{
        history.push('/layout')
    }

    const gotoSpecialDeals = () => {
        history.push('/fruitBundle')
    }

    return (
        <div className=" grid grid-cols-6 ">
            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-2 lg:col-span-4">
            <div className="mx-3.5 mt-2 flex justify-between items-center">
                <div className="flex items-center" >
                    <LeftOutlined style={{ color: "#54B175" }} onClick={gotoBack}  />
                    <a href="#"  style={{ color: "#54B175", marginLeft: "8px" }} onClick={gotoBack}>Back  </a>
                </div>
                <p className="text-black-deep text-md font-semibold pt-3 font-Nunito ">Popular Deals</p>
                <SearchOutlined style={{ color: "#54B175", fontSize: "16px", fontWeight: "bold" }} />
            </div>

            <div className="mx-4 grid grid-cols-2   lg:grid-cols-3  gap-4 lg:gap-8 ">

                {products.map((item,index)=>{
                    return(
                        <div  className="h-56 md:h-96 bg-white shadow-2xl rounded-md " >
                             <div className="m-2 bg-black-light rounded-md h-28 md:h-56 flex items-center justify-center ">
                             <img src={item.picture}  alt="error" className="h-full w-full" />
                             </div>
                             <p className="font-Nunito text-black-deep text-xs font-bold mx-2 mt-4">{item.title} Fruits</p> 
                             <p className="font-Nunito text-black-light text-xs mx-2">200gm</p> 
                             <div className="mx-2 flex justify-between items-center">
                                 <p className="font-Nunito text-base font-bold text-black-deep">$45</p>
                                 <button type="submit" className="px-2.5 py-.5 bg-green-deep text-white rounded-md font-Nunito text-lg font-bold" onClick={()=>addItems(item)}>+</button>
                             </div>
                        </div>
                    )
                })}

            </div>
            </div>
            
        </div>
    );
};

export default Popular1;