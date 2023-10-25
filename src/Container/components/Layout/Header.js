import React, { useEffect } from 'react';
import { useGlobalState } from '../../../store';
import ProductData from '../../../ProductData';
import { ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';

const { Search } = Input;

const Header = ({ numberOfOrder }) => {

    let { products } = ProductData;
    const [cartItems, setCartItems] = useGlobalState('cartItems');
    const [searchTerm, setSearchTerm] = useGlobalState("searchTerm");
    const [currentUser, setCurrentUser] = useGlobalState('currentUser');
    let history = useHistory();

    const handleClick = () => {
        history.push('/profile')
    }
    const handleClickToCart = () => {
        history.push('/cart')
    }

    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            setCurrentUser(JSON.parse(user))
        } else {
            setCurrentUser({})
        }

    }, [])

    const onSearch = value =>setSearchTerm(value);

    return (
        <div className="w-screen h-24 bg-green-deep">


            <div className="mx-4 sm:mx-28 flex justify-between  items-center h-24">

                <div className="w-36 flex items-center">
                    {/* <p className="m-4 text-white text-2xl font-bold cursor-pointer"> &#9776;</p> */}
                    <img src="./image/fruitslogo.jpg" alt="error" className="w-14 h-14 bg-black-light  rounded-full" />
                </div>

                <div className="w-3/5">
                    <Search placeholder="Search Fruits by name" onSearch={onSearch} onChange={(event) => setSearchTerm(event.target.value)} enterButton />
                   
                </div>


                <div className="flex items-center">

                    <div className="mt-8 flex justify-center items-center flex-col">
                        <img src={currentUser?.image} alt="error" className="h-10 w-10 rounded-full " onClick={handleClick} />
                        <p className="text-md font-semibold text-white pb-4 ">{currentUser?.name}</p>
                    </div>


                    <div className="flex w-24 ml-8">
                        {cartItems.length == 0 ? "" : <p className="bg-white text-green-deep w-4 h-4 rounded-full flex justify-center items-center relative -top-3 left-3 text-xs">{cartItems.length} </p>}
                        <ShoppingCartOutlined style={{ marginRight: "12px", color: "white", fontSize: "18px" }} onClick={handleClickToCart} />
                    </div>
                </div>


            </div>



        </div>
    );
};

export default Header;