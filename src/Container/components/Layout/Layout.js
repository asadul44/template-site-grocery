import React, { useState,useEffect } from 'react';
import { TabBar } from 'antd-mobile';
import { useGlobalState } from '../../../store';
import { isMobile } from "react-device-detect";
import { HomeOutlined, StarOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import "./Layout.css"
import Home from "./Home"
import MyFavorite from './../PopularDeals/MyFavorite';
import Cart from './../Cart/Cart';
import Profile from './../Profile/Profile';
import HomeSearch from './HomeSearch';
import MyFavorite2 from './../PopularDeals/MyFavorite2';
import Header from './Header';

const Layout = () => {

    const [cartItems, setCartItems] = useGlobalState('cartItems');
    const [favoriteProduct, setFavoriteProduct] = useGlobalState('favoriteProduct');
    const [selectedTab, setSelectedTab] = useState('home-tab')
    const [fullScreen, setFullScreen] = useState(true)
    let [numberOfCart, setNmberOfCart] = useState(0)
    const [display, setDisplay] = useState(true);
    const [isEmpty] = useState(false);

   

     useEffect(() => {
        let data = localStorage.getItem("cartItems");
        if(data){
            setNmberOfCart(JSON.parse(data).length)   
        }else{
            setCartItems([])
        }
               
    }, [])



    // useEffect(() => {
    //  let user =   localStorage.getItem("user")
    //  let loginSta =  localStorage.getItem("loginStatus")
    //  console.log(user,"user...")
    //  console.log(loginSta,"LOGINGSTATUS...")
    // }, [])

    let homeIcon = <HomeOutlined />;
    let favoriteIcon = <StarOutlined />;
    let cartIcon = <ShoppingCartOutlined />;
    let userIcon = <UserOutlined />;

    const myComponent = () => {
        if (isMobile) {
            return (
                <div style={fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#54B175"
                        barTintColor="white"

                    >

                        <TabBar.Item
                            title="Home"
                            key="home"
                            icon={homeIcon}
                            selectedIcon={<div className=" text-green-deep">{homeIcon} </div>}
                            selected={selectedTab === 'home-tab'}
                            onPress={() => {
                                setSelectedTab('home-tab')
                            }}
                            data-seed="logId"
                        >


                            {display ? <Home setDisplay={setDisplay} /> : <HomeSearch setDisplay={setDisplay} />}

                        </TabBar.Item>


                        <TabBar.Item
                            icon={favoriteIcon}
                            selectedIcon={<div className=" text-green-deep">{favoriteIcon} </div>}
                            title="Favorite"
                            key="favorite"
                            selected={selectedTab === 'favorite-tab'}

                            onPress={() => {
                                setSelectedTab('favorite-tab')
                            }}
                            data-seed="logId1"
                        >



                            {favoriteProduct.length == 0 ? <MyFavorite2 /> : <MyFavorite />}
                        </TabBar.Item>

                        <TabBar.Item

                            icon={cartIcon}

                            selectedIcon={<div className=" text-green-deep">{cartIcon} </div>}
                            title="Cart"
                            key="cart"
                            selected={selectedTab === 'cart-tab'}
                            badge={cartItems.length}
                            onPress={() => {
                                setSelectedTab('cart-tab')

                            }}
                            data-seed="logId1"
                        >
                            <Cart />
                        </TabBar.Item>

                        <TabBar.Item
                            icon={userIcon}
                            selectedIcon={<div className=" text-green-deep">{userIcon} </div>}
                            title="Profile"
                            key="profile"
                            selected={selectedTab === 'profile-tab'}
                            onPress={() => {
                                setSelectedTab('profile-tab')
                            }}
                            data-seed="logId1"
                        >
                            <Profile />

                        </TabBar.Item>

                    </TabBar>
                </div>

            )
        } else {
            return (
                <div>
                    <div style={{ position: "sticky", top: 0, zIndex: 9999 }}>
                        
                        <Header numberOfOrder={cartItems.length} />

                    </div>

                    <Home />


                </div>
            )
        }
    }


    return (
        <div>
            {myComponent()}
        </div>
    );
};

export default Layout;