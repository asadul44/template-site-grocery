import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useGlobalState } from '../../../../store';
import Carousel from 'react-multi-carousel';
import { message } from 'antd';
import { LeftOutlined, ShoppingCartOutlined, ShareAltOutlined, HeartTwoTone, EditOutlined } from '@ant-design/icons';

const FruitBandle = () => {

    const [cartItems, setCartItems] = useGlobalState('cartItems');
    const [favoriteProduct, setFavoriteProduct] = useGlobalState('favoriteProduct');
    const [quantity,setQuantity] = useState(1);
    const history = useHistory();
    let location = useLocation();
    let { state } = location;
    let product = state?.item;

   
    const addFavoriteProduct = (item) =>{

       
    }

    const addItems = (item) => {
        const exist = cartItems.find((x) => x.id === item.id);
        if (exist) {
            message.warning({
                content: 'This Product already added',
                style: {
                    marginTop: '20vh',
                },
            })
            return;
        } else {
            message.success({
                content: 'successfully added to basket',
                style: {
                    marginTop: '20vh',
                },
            })
            setCartItems([...cartItems, { id: item.id, image: item.image, name: item.name, price: product.price * quantity, quantity: quantity, picture: item.picture, unitPrice: item.price }])
            localStorage.setItem("cartItems",JSON.stringify([...cartItems, { id: item.id,image:item.image, name: item.name, price: item.price, quantity: item.quantity, picture: item.picture, unitPrice: item.price }]))
        }

    }

  
    const backtoMove = () => {
        history.push("/layout")
    }

    const gotoCart = () => {
        history.push("/layout")
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <div className="grid  grid-cols-6">

            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">
                <div className="mx-3.5 my-4 flex justify-between items-center">
                    <div className="flex items-center" >
                        <LeftOutlined style={{ color: "#54B175" }} onClick={backtoMove} />
                        <a href="#" onClick={backtoMove} style={{ color: "#54B175", marginLeft: "8px" }} >Back  </a>
                    </div>
                    <div>
                        <p className="text-black-deep text-md font-semibold mt-2">Fruits Bundle</p>
                    </div>
                    <div className="flex" style={{ color: "#54B175", fontSize: "18px" }}>
                        {cartItems.length == 0 ? "" : <p className="bg-green-deep text-white w-5 h-5 rounded-full flex justify-center items-center relative -top-3 left-3 text-xs">{cartItems.length} </p>}
                        <ShoppingCartOutlined style={{ marginRight: "12px" }} />

                        <ShareAltOutlined />
                    </div>
                </div>




                <Carousel className="h-80 w-full rounded-xl" responsive={responsive}
                    showDots={true}
                    removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                >

                    {product.image.map((item, index) => {
                        return (
                            <div>
                                <img src={item} alt="erron" className="h-full w-full rounded-xl" />
                            </div>
                        )
                    })}

                </Carousel>





                <div className="mx-3.5 mt-4 flex justify-between">
                    <p className="text-black-deep font-semibold font-Nunito text-lg" >Fruit's Bundle</p>
                    <HeartTwoTone twoToneColor="#54B175" style={{ fontSize: "18px" }} onClick={()=>addFavoriteProduct(product)}/>
                </div>

                <p className="font-Nunito text-xs text-black-light font-light mx-3.5">Total 10kg</p>

                <div className="mx-3.5 flex justify-between">
                    <div>
                        <p className="bg-green-light text-green-deep px-3 py-1 rounded-lg font-bold text-lg">${product.price * quantity}</p>
                    </div>
                    <div className="flex justify-between font-Nunito gap-2">
                        <div  className="mt-1" >
                            <button type="submit" style={{ background: "#E5E5EA", padding: "8px 16px", borderRadius: "8px" }} onClick={()=>setQuantity(quantity-1)} disabled={quantity ==1 ? true : false}>-</button>
                        </div>
                        <div >
                            <p style={{ background: "#FFF", padding: "8px 16px", borderRadius: "8px", border: ".5px solid #E5E5EA " }}>{quantity}</p>
                        </div>
                        <div  className="mt-1">
                            <button type="submit" style={{ background: "#E5E5EA", padding: "8px 16px", borderRadius: "8px" }} onClick={()=>setQuantity(quantity+1)}>+</button>
                        </div>
                    </div>
                </div>

                <div className="mx-3.5 flex justify-between mt-6">
                    <p className="font-Nunito font-semibold text-base text-black-deep">Detail Items</p>
                    <EditOutlined style={{ color: "#54B175 ", fontSize: "18px" }} />
                </div>
                <div className="mx-3.5  text-black-light text-xs font-medium font-Nunito">

                    <p> Grapes (500 gr)</p>
                    <p>Apples (250 gr)</p>
                    <p>Mango (300 gr)</p>
                    <p>Jackfruit (50 gr)</p>
                    <p>Oranaes (1 kg)</p>


                </div>
                <div className="mx-3.5 gap-2 flex flex-1 mt-12 ">


                    <ShoppingCartOutlined style={{ padding: "8px", paddingTop: "20px ", border: ".5px solid #54B175", borderRadius: "8px", width: "15%", color: "#54B175", fontSize: "18px" }} onClick={gotoCart} />


                    <button className="h-14 bg-green-deep  flex-1 rounded-lg text-white font-semibold text-lg font-Nunito" onClick={() => addItems(product)}> Bay Now</button>



                </div>

                <div className="flex justify-center items-center sm:mt-6">
                    <div className="bg-black-deep w-32 h-1.5 rounded-full mt-4"></div>
                </div>
            </div>



        </div>
    );
};

export default FruitBandle;