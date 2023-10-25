import React,{useEffect} from 'react';
import { useGlobalState } from '../../../store';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import CategoriesData from './../../../CategoriesData';
import ProductData from '../../../ProductData';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import SpecialBandleData from '../../../SpecialBandleData';
import { message } from 'antd';
import { isMobile } from "react-device-detect";



const Home = (props) => {



    const [cartItems, setCartItems] = useGlobalState("cartItems");
    const [searchTerm, setSearchTerm] = useGlobalState("searchTerm");
    let { categories } = CategoriesData;
    let { products } = ProductData;
    let { specialBandle } = SpecialBandleData;
    let history = useHistory();

    console.log(categories.id, '/////')

//    useEffect(() => {
       
//     localStorage.setItem("cartItems",JSON.stringify(cartItems))
//    }, [cartItems])


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
            
            setCartItems([...cartItems, { id: item.id,image:item.image, name: item.name, price: item.price, quantity: item.quantity, picture: item.picture, unitPrice: item.price }])
           
           
            localStorage.setItem("cartItems",JSON.stringify([...cartItems, { id: item.id,image:item.image, name: item.name, price: item.price, quantity: item.quantity, picture: item.picture, unitPrice: item.price }]))
           
        }


    }

    // useEffect(() => {
    //     saveToLocal();
    // }, [cartItems])

    const gotoCategories = () => {
        history.push('/categories')
    }
    const gotospecialDeals = () => {
        history.push('/specialDeals')
    }
    const gotosPopularDeals = () => {
        history.push('/popular1')
    }
    const goToDetails = (item) =>{
        history.push({
            pathname : "/fruitBundle",
            state : {
                item : item,
              
            }
        })
    }


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
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

    return (
        <div className="sm:mx-12">



            <div className="sm:mx-12">
                <div className="mx-4 flex justify-between mt-6">
                    <p className="text-base text-black-deep font-semibold font-Nunito">Planet Namex 989</p>
                    {isMobile ? <SearchOutlined style={{ color: "#54B175", fontSize: "18px", fontWeight: "bold", marginTop: "4px" }} onClick={() => props.setDisplay(false)} /> :""}
                </div>
                <p className="mx-4 text-sm text-black-light font-normal font-Nunito ">Norristown, Pennsylvania, 19403</p>

                <div className="mx-4 flex justify-between mb-4 ">
                    <p className="text-lg text-black-deep font-bold font-Nunito">Categories</p>
                    <button type="submit" className="text-base text-green-deep font-normal" onClick={gotoCategories}> See All </button>
                </div>

                <Carousel responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                   

                >

                    {
                        categories.map((item, index) => {
                            return (
                                <div >

                                    <div className="ml-8 flex flex-col items-center justify-center " key={index}>
                                        <div className="w-16 h-16 rounded-full flex justify-center items-center bg-gray-light" style={{ background: item.color }} >
                                            <img src={item.image} alt="error" />

                                        </div>
                                        <p>{item.name}</p>
                                    </div>

                                </div>
                            )
                        })
                    }

                </Carousel>



                <div className="mx-4 flex justify-between mb-4 ">
                    <p className="text-lg text-black-deep font-bold font-Nunito">Special Deals for You</p>
                    <button type="submit" className="text-base text-green-deep font-normal" onClick={gotospecialDeals}>See All</button>
                </div>

                <Carousel responsive={responsive2}>
                    {
                        specialBandle.map((item, index) => {
                            return (
                                <div className="mx-4 bg-gradient-to-b from-gray-light via-black-light to-black-deep h-48 rounded-t-md " style={{ backgroundImage:`url(${item.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <p className="mx-4 text-black-deep text-lg font-Nunito font-bold">Fresh Fruit for You</p>
                                    <p className="mx-4 text-black-deep text-sm font-Nunito font-normal">Fresh fruit Everday we Serve to You</p>
                                </div>
                            )
                        })
                    }
                </Carousel>



                <div className="mx-4 flex justify-between mt-4 mb-4">
                    <p className="text-lg text-black-deep font-bold font-Nunito">Popular Deals</p>
                    <button className="text-base text-green-deep font-normal" onClick={gotosPopularDeals}>See All</button>
                </div>
            </div>
            <div className="mx-4 grid grid-cols-2 sm:grid-cols-2 sm:mx-12  lg:grid-cols-4  gap-4 lg:gap-8 ">

                {products.filter((product,key)=>{
                    if(searchTerm == ""){
                        return product
                    }else if(product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return product
                    }
                }).map((item, index) => {
                    return (
                        <div className="h-56 md:h-96 bg-white shadow-2xl rounded-md " >
                            <div className="m-2 bg-black-light rounded-md h-28 md:h-56 flex items-center justify-center ">
                                <img src={item.picture} alt="error" className="h-full w-full"  onClick={()=>goToDetails(item)} />
                            </div>
                            <p className="font-Nunito text-black-deep text-xs font-bold mx-2">{item.name} Fruits</p>
                            <p className="font-Nunito text-black-light text-xs mx-2 mt-2">200gm</p>
                            <div className="mx-2 flex justify-between items-center">
                                <p className="font-Nunito text-base font-bold text-black-deep">${item.price}</p>
                                

                                <button type="submit" className="px-2.5 py-.5 bg-green-deep text-white rounded-md font-Nunito text-lg font-bold" onClick={() => addItems(item)}>+</button>
                            </div>
                        </div>
                    )
                })}

            </div>


        </div>
    );
};

export default Home;