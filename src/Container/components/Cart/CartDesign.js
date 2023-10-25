import React, { useState } from 'react';
import { useGlobalState } from '../../../store';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { message,Popconfirm } from 'antd';
import { useHistory } from 'react-router-dom';

const CartDesign = ({ handleClick, onDelete, totals,cartItems,setCartItems }) => {


    let history = useHistory();
    

    const confirm = (id) => {

        message.success({
            content: 'successfully delete',

            style: {
                marginTop: '20vh',

            },
        });
        onDelete(id)

    }
    const cancel = (e) => {
      
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
        <div className="grid grid-cols-6">
            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">
                <div className="mx-3.5 mt-2 flex justify-between items-center">

                    <p className="text-black-deep text-lg font-bold pt-2 font-Nunito ">My Cart</p>
                    <SearchOutlined style={{ color: "#54B175", fontSize: "16px", fontWeight: "bold" }} />
                </div>
                <div className="grid grid-cols-1 gap-2 ">
                    {cartItems.map((item, index) => {
                        return (
                            <div className="mb-6  ">
                                <div className="mx-4 grid grid-cols-12 gap-4 bg-white rounded-md h-28 shadow-lg ">
                                    <div className="col-start-1 col-span-3 ">
                                        <div className="bg-black-light m-2 rounded-md h-24 flex justify-center items-center">
                                            <img src={item.picture} alt="error" className="h-full w-full" />
                                        </div>
                                    </div>
                                    <div className="col-start-4 col-span-4  ">


                                        <p className="font-Nunito font-bold text-black-deep text-md mt-4"> {item.name} Fruit</p>
                                        <p className="font-Nunito font-normal text-black-light text-xs">200gm</p>
                                        <p className="font-bold text-black-deep font-Nunito text-lg">${item.price}</p>

                                    </div>
                                    <div className="col-end-13  col-span-5 text-center mt-4 mr-2 gap-1" >
                                        <Popconfirm
                                            title="Are you sure to delete this item?"
                                            onConfirm={() => confirm(item.id)}
                                            onCancel={cancel}
                                            okText="Delete"
                                            cancelText="No"
                                        >
                                            <DeleteOutlined style={{ color: "red", marginBottom: "8px", fontSize: "24px", cursor: "pointer" }}/>
                                        </Popconfirm>
                                       

                                        <div className="flex justify-between font-Nunito gap-0 ">
                                            <div className="mt-1">
                                                <button  style={{ background: "#E5E5EA", padding: "6px 12px", borderRadius: "8px" }} onClick={()=>onDecrement(item)} disabled={item.quantity == 1 ? true : false} >-</button>
                                            </div>
                                            <div >
                                                <p style={{ background: "#FFF", padding: "6px 12px", borderRadius: "8px", border: ".5px solid #E5E5EA " }}>{item.quantity}</p>
                                            </div>
                                            <div className="mt-1">
                                                <button type="submit" style={{ background: "#E5E5EA", padding: "6px 12px", borderRadius: "8px" }} onClick={()=>onIncrement(item)}>+</button>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
                <div className="mx-4 flex justify-between items-center">
                    <div className="font-Nunito font-bold text-sm text-black-deep">
                        <p>Total({cartItems.length})</p>
                        <p >${totals}</p>
                    </div>
                    <div className="bg-green-deep rounded-full py-2 px-4 text-white font-Nunito font-bold">
                        <button type='submit' onClick={handleClick} >Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartDesign;