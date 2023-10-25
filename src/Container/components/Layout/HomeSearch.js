import React from 'react';
import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import { useGlobalState } from '../../../store';
import { useHistory } from 'react-router-dom';
import SpecialBandleData from '../../../SpecialBandleData';
import Carousel from 'react-multi-carousel';
import ProductData from '../../../ProductData';
import { Input,message } from 'antd';

const HomeSearch = (props) => {

    const [cartItems, setCartItems] = useGlobalState('cartItems');
    const [searchTerm, setSearchTerm] = useGlobalState('searchTerm');
    let { products } = ProductData;
    let history = useHistory();
    let { specialBandle } = SpecialBandleData;

    const gotoFeturedVegetables = () => {
        history.push('/featuredVegetables')
    }
    const gotoSpecialBundle = () => {
        history.push('/fruitBundle')
    }

    const responsive2 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
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
              localStorage.setItem("cartItems",JSON.stringify([...cartItems, { id: item.id,image:item.image, name: item.name, price: item.price, quantity: item.quantity, picture: item.picture, unitPrice: item.price }]))
            }
           
    }
    return (
        <div className="sm:mx-12">
            <div className="mx-4 flex justify-between mt-6 ">
                <SearchOutlined className="relative mt-1  z-50 ml-2 text-lg text-black-light" onClick={() => props.setDisplay(true)} />
                <Input placeholder="Search for Anything" style={{ marginRight: "12px", marginLeft: "-26px", height: "36px", paddingLeft: "30px", background: "#E5E5EA" }} onChange={(event)=>setSearchTerm(event.target.value)}/>

                <BellOutlined style={{ color: "#54B175", fontSize: "18px", fontWeight: "bold", marginTop: "4px" }} />
            </div>


            <Carousel responsive={responsive2} className="mt-8">
                {
                    specialBandle.map((item, index) => {
                        return (
                            <div className="mx-4 bg-gradient-to-b from-gray-light via-black-light to-black-deep h-48 rounded-t-md " style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <p className="mx-4 text-black-deep text-lg font-Nunito font-bold">Fresh Fruit for You</p>
                                <p className="mx-4 text-black-deep text-sm font-Nunito font-normal">Fresh fruit Everday we Serve to You</p>
                            </div>
                        )
                    })
                }
            </Carousel>

            <div className="mx-4 flex justify-between mt-4 ">
                <p className="text-lg text-black-deep font-bold font-Nunito">Featured Vegetables</p>
                <button className="text-base text-green-deep font-normal" onClick={gotoFeturedVegetables}>See All</button>
            </div>
            <div className="mx-4 grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  gap-4 lg:gap-8 ">

                {products.filter((product,key)=>{
                    if(searchTerm == ""){
                        return product
                    }else if(product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return product
                    }
                }).map((item, index) => {
                    return (
                        <div className="h-56 md:h-96 bg-white shadow-2xl rounded-md ">
                            <div className="m-2 bg-black-light rounded-md h-28 md:h-56 flex items-center justify-center ">
                                <img src={item.picture} alt="error" className="h-full w-full" />
                            </div>
                            <p className="font-Nunito text-black-deep text-xs font-bold mx-2">{item.name} Fruits</p>
                            <p className="font-Nunito text-black-light text-xs mx-2">200gm</p>
                            <div className="mx-2 flex justify-between items-center">
                                <p className="font-Nunito text-base font-bold text-black-deep">${item.price}</p>
                                <button type="submit" className="px-2.5 py-.5 bg-green-deep text-white rounded-md font-Nunito text-lg font-bold" onClick={()=>addItems(item)}>+</button>
                            </div>
                        </div>
                    )
                })}

            </div>

            {/* <div className="mx-4 flex justify-between mt-4 ">
                <p className="text-lg text-black-deep font-bold font-Nunito">Special Bundle</p>
                <button className="text-base text-green-deep font-normal" onClick={gotoSpecialBundle}>See All</button>
            </div> */}

            {/* <div className="mx-4 grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  gap-4 lg:gap-8 ">

                {products.map((item, index) => {
                    return (
                        <div className="h-56 md:h-96 bg-white shadow-2xl rounded-md ">
                            <div className="m-2 bg-black-light rounded-md h-28 md:h-56 flex items-center justify-center ">
                                <img src={item.picture} alt="error" className="h-full w-full" />
                            </div>
                            <p className="font-Nunito text-black-deep text-xs font-bold mx-2">{item.name} Fruits</p>
                            <p className="font-Nunito text-black-light text-xs mx-2">200gm</p>
                            <div className="mx-2 flex justify-between items-center">
                                <p className="font-Nunito text-base font-bold text-black-deep">${item.price}</p>
                                <button type="submit" className="px-2.5 py-.5 bg-green-deep text-white rounded-md font-Nunito text-lg font-bold" onClick={()=>addItems(item)}>+</button>
                            </div>
                        </div>
                    )
                })}

            </div> */}


        </div>
    );
};

export default HomeSearch;