import React,{useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalState } from '../../../store';

const OrderSuccess = () => {

    const [orderProducts, setOrderProducts] = useGlobalState('orderProducts');
    let history = useHistory();

    const handalClick = () => {
        history.push('/layout')
    }

    let pro = JSON.parse(localStorage.getItem("orderItems"))

    console.log(pro,".....your orderring products ........///////////")



    console.log(orderProducts,"myorderProducts")

    return (
        <div className="grid  grid-cols-6" style={{minHeight:"100vh"}}>

            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">
                <div className=" mt-8 h-80 pt-16 flex justify-center items-center">
                    <img src="./image/orderSuccess.png" alt="error"  />
                </div>
                <div className="mx-8 text-center mt-8">
                    <p className=" text-black-deep text-2xl font-bold">Order Successfully</p>
                    <p className="font-Nunito text-black-light text-sm font-normal">Thank you for the order Your order will be prepared and shipped by courier within 1-2 days</p>
                </div>

                <div className="bg-green-deep flex justify-center items-center rounded-lg mt-32 sm:mt-16 mx-3.5 h-14  ">

                    <button type="submit" className="text-white font-Nunito text-lg font-medium" onClick={handalClick}>Continue Shopping</button>

                </div>


                <div className="flex justify-center items-center">
                    <div className="bg-black-deep w-32 h-1.5 rounded-full mt-4"></div>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;