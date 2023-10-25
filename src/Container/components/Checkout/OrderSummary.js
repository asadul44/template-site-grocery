import React from 'react';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useGlobalState } from '../../../store';
import { Divider, Input } from 'antd';
import "./Checkout.css"
import { useHistory } from 'react-router-dom';

const OrderSummary = () => {

    const [cartItems, setCartItems] = useGlobalState('cartItems');
    let history = useHistory();

    let subtotal = 0;
    let tanahAirVoucher =10;
    let deliveryCharge = 15;
    cartItems.forEach(element => {
        subtotal += element.price
    });

    const gotoCheckout = () => {
        localStorage.setItem("subtotal",subtotal)
        localStorage.setItem("tanahAirVoucher",tanahAirVoucher)
        localStorage.setItem("deliveryCharge",deliveryCharge)
        localStorage.setItem("total",subtotal+tanahAirVoucher+deliveryCharge)
        history.push( {
                pathname: '/checkout',
                // state: {
                //   subtotal: subtotal,
                //   tanahAirVoucher: tanahAirVoucher,
                //   deliveryCharge : deliveryCharge,
                //   total : subtotal+tanahAirVoucher+deliveryCharge
                // }
              }
        )
    }
    const gotoCart = () => {
        history.push('/layout')
    }

    const onIncrement = (item) =>{
        const exist = cartItems.find((x) => x.id === item.id);
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                    x.id === item.id ? {...exist, quantity: exist.quantity + 1, price: exist.price + item.unitPrice } : x
                )
            );
        }
    }

    const onDecrement = (item) =>{
        const exist = cartItems.find((x) => x.id === item.id);
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                    x.id === item.id ? {...exist, quantity: exist.quantity - 1, price: exist.price - item.unitPrice } : x
                )
            );
        }
    }

   

    return (
        <div className="grid  grid-cols-6" style={{minHeight:"100vh"}}>

            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">
                <div className="mx-3.5 mt-2 flex justify-between items-center">
                    <div className="flex items-center" >
                        <LeftOutlined style={{ color: "#54B175" }}  onClick={gotoCart}/>
                        <a href="#" style={{ color: "#54B175", marginLeft: "8px" }} onClick={gotoCart} >Back  </a>
                    </div>
                    <p className="text-black-deep text-md font-semibold pt-3 font-Nunito ">Order Summary</p>
                    <p></p>
                </div>
                <div className="grid grid-cols-1 gap-2 ">
                    {cartItems.map((item, index) => {
                        return (
                            <div className="mb-6  ">
                                <div className="mx-4 grid grid-cols-10 gap-4 bg-white rounded-md h-24 shadow-lg ">
                                    <div className="col-start-1 col-span-3 ">
                                        <div className="bg-black-light m-2 rounded-md h-20 flex justify-center items-center">
                                        <img src={item.picture}  alt="error" className="h-full w-full" />
                                        </div>
                                    </div>
                                    <div className="col-start-4 col-span-3  ">


                                        <p className="font-Nunito font-bold text-black-deep text-md mt-2"> {item.name} Fruit</p>
                                        <p className="font-Nunito font-normal  text-black-light text-xs">200gm</p>
                                        <p className="font-bold text-black-deep font-Nunito text-lg ">${item.price}</p>

                                    </div>
                                    <div className="col-end-11  col-span-4 text-center  mt-12 mr-2 gap-1" >

                                        <div className="flex justify-between font-Nunito gap-0 ">
                                            <div className="cursor-pointer">
                                                <button type="submit" className="mt-1" style={{ background: "#E5E5EA", padding: "6px 12px", borderRadius: "8px" }} onClick={()=>onDecrement(item)} disabled={item.quantity == 1 ? true : false}>-</button>
                                            </div>
                                            <div className="cursor-pointer">
                                                <p style={{ background: "#FFF", padding: "6px 12px", borderRadius: "8px", border: ".5px solid #E5E5EA " }}>{item.quantity}</p>
                                            </div>
                                            <div className="cursor-pointer">
                                                <button type="submit" className="mt-1" style={{ background: "#E5E5EA", padding: "6px 12px", borderRadius: "8px" }}  onClick={()=>onIncrement(item)}>+</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className="mx-4 ">
                    <Divider style={{ background: "#E5E5EA" }} />
                </div>
                <p className="mx-4 text-black-light text-lg font-normal font-Nunito">Promo Code</p>
                <div className="mx-4 flex justify-between h-14 border border-black-light rounded-lg items-center">

                    <input type="text" className="h-14  border-0 rounded-lg w-full pl-8 mr-8" style={{ background: "none" }} placeholder="Enter Promo Code" />
                    <a className="text-lg text-green-deep font-semibold font-Nunito mr-4 " href="#">APPLY</a>

                </div>
                <div className="mx-4 ">
                    <Divider style={{ background: "#E5E5EA" }} />
                </div>

                <div className="mx-4 flex justify-between">
                    <p className="text-black-light text-base font-normal font-Nunito">Sub total Price</p>
                    <p className="text-black-deep text-base font-semibold font-Nunito">${subtotal}.00</p>
                </div>
                <div className="mx-4 flex justify-between ">
                    <p className="text-black-light text-base font-normal font-Nunito">Delivery Fee</p>
                    <p className="text-black-deep text-base font-semibold font-Nunito">${deliveryCharge}.00</p>
                </div>
                <div className="mx-4 flex justify-between ">
                    <p className="text-black-light text-base font-normal font-Nunito">TanahAir Voucher</p>
                    <p className="text-black-deep text-base font-semibold font-Nunito">${tanahAirVoucher}.00</p>
                </div>
                <div className="mx-4 flex justify-between ">
                    <p className="text-black-light text-base font-normal font-Nunito">Total price</p>
                    <p className="text-black-deep text-base font-semibold font-Nunito">${subtotal+deliveryCharge+tanahAirVoucher}.00</p>
                </div>

                <div className="bg-green-deep flex justify-center items-center rounded-lg mt-4 sm:mt-16 mx-3.5 h-14   ">

                    <button type="submit" className="text-white font-Nunito text-lg font-medium" onClick={gotoCheckout}>Checkout</button>

                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-black-deep w-32 h-1.5 rounded-full mt-4"></div>
                </div>
            </div>

        </div>
    );
};

export default OrderSummary;