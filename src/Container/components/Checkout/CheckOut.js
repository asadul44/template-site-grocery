import React,{useEffect} from 'react';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useGlobalState } from '../../../store';
import { Divider, message, Radio } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';


const CheckOut = () => {

    const [cartItems, setCartItems] = useGlobalState('cartItems');
    const [currentUser, setCurrentUser] = useGlobalState('currentUser');
    const [orderProducts, setOrderProducts] = useGlobalState('orderProducts');
    const [loginStatus, setLoginStatus] = useGlobalState('loginStatus');

    let location = useLocation();
    let history = useHistory();

    
    let subtotal = parseInt(localStorage.getItem("subtotal"))
    let tanahAirVoucher = parseInt(localStorage.getItem("tanahAirVoucher"))
    let deliveryCharge = parseInt(localStorage.getItem("deliveryCharge"))
    let total = parseInt(localStorage.getItem("total"))
    let date = new Date();
    let orderTime = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()

    console.log(localStorage.getItem("cartItems").length,"cartItems..........")


    useEffect(() => {
        const log = localStorage.getItem("loginStatus")
        if(log){
            setLoginStatus(JSON.parse(log))   
        }else{
            setLoginStatus(false)
        }
               
    }, [])

    const backToMove = () => {
        history.push("/orderSummary")
    }
    const gotoOrderSuccess = () => {
        if (loginStatus) {
            if (cartItems.length > 0) {
                message.success({
                    content: 'Your order is successfull',
                    style: {
                        marginTop: '20vh',
                    },
                })
                setCartItems([])
                localStorage.removeItem("cartItems")
              //  setMyOrder([...myOrder,{totalPrice:total,products:basketItems,orderDate:orderDat,orderTime:orderTime}])
                localStorage.setItem("orderItems",JSON.stringify([...orderProducts,{totalPrice:total,products:cartItems,orderDate:date,orderTime:orderTime}]))
                history.push("/orderSuccess")

            } else {
                message.warning({
                    content: 'you cart is empty',
                    style: {
                        marginTop: '20vh',
                    },
                })
                return;
            }
        } else {
            message.warning({
                content: 'For Bay Login first',
                style: {
                    marginTop: '20vh',
                },
            })
           
            history.push({
                pathname: "/login",
                state: {
                    checkOut: "checkOut",
                    
                }
            })
        }

    }

    return (
        <div className="grid  grid-cols-6">
            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">
                <div className="mx-3.5 mt-2 flex justify-between items-center">
                    <div className="flex items-center" >
                        <LeftOutlined style={{ color: "#54B175" }} onClick={backToMove} />
                        <a href="#" style={{ color: "#54B175", marginLeft: "8px" }} onClick={backToMove} >Back  </a>
                    </div>
                    <p className="text-black-deep text-md font-semibold pt-3 font-Nunito ">Checkout</p>
                    <p></p>
                </div>
                <div className="mx-4 flex justify-between mt-4">
                    <p className="text-lg text-black-deep font-bold font-Nunito">Destination</p>
                    <p className="text-green-deep text-base font-Nunito font-normal">Change</p>
                </div>

                <div className="mx-4 grid  grid-cols-6">
                    <div className="col-start-1 col-span-2">

                        <div className="w-20 h-20 rounded-md bg-gray-light">
                            <img src={currentUser.image} alt="error" className="w-20 h-20 rounded-md" />
                        </div>

                    </div>
                    <div className="col-start-3 col-span-3" >
                        <p className="text-black-deep text-base font-Nunito font-bold">{currentUser.name}</p>
                        <p className="text-black-light text-sm font-Nunito font-normal ">{currentUser.address}</p>
                    </div>
                </div>


                <div className="mx-4 ">
                    <Divider style={{ background: "#E5E5EA" }} />
                </div>

                <p className="mx-4 text-black-deep text-base font-Nunito font-bold"> Choose Payment method</p>


                <Radio.Group name="radiogroup" defaultValue="cash">



                    <div className="mx-4 flex items-center  p-2">
                        <div className="h-12 w-12  rounded-md"><img src="./image/bankCard.jpg" alt="error" className="w-12 h-12 rounded-md" /> </div>
                        <Radio value={2456} >
                            <p className="text-black-deep text-base font-semibold font-Nunito ml-6 mt-6 ">** 2456</p>
                        </Radio>
                    </div>
                    <div className="mx-4 flex items-center p-2">
                        <div className="h-12 w-12 t rounded-md" > <img src="./image/applePay.jpg" alt="error" className="w-12 h-12 rounded-md" /> </div>
                        <Radio value="bank">
                            <p className="text-black-deep text-base font-semibold font-Nunito ml-6 mt-6">Apple Pay</p>
                        </Radio>
                    </div>
                    <div className="mx-4 flex items-center p-2">
                        <div className="h-12 w-12  rounded-md"> <img src="./image/cash.png" alt="error" className="w-12 h-12 rounded-md" /> </div>
                        <Radio value="cash">
                            <p className="text-black-deep text-base font-semibold font-Nunito ml-6 mt-6">Cash on Delivery</p>
                        </Radio>
                    </div>

                </Radio.Group>

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
                    <p className="text-black-deep text-base font-semibold font-Nunito">${total}.00</p>
                </div>

                <div className="bg-green-deep flex justify-center items-center rounded-lg mt-4 sm:mt-16 mx-3.5 h-14   ">

                    <button type="submit" className="text-white font-Nunito text-lg font-medium" onClick={gotoOrderSuccess} >Pay Now</button>

                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-black-deep w-32 h-1.5 rounded-full mt-4"></div>
                </div>
            </div>

        </div>
    );
};

export default CheckOut;