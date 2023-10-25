import React from 'react';
import Test from './components/Test';
import {Route , Switch } from 'react-router-dom'
import Page1 from './components/StartingPage/Page1';
import NotFound from './components/NotFound';
import Page2 from './components/StartingPage/Page2';
import Page3 from './components/StartingPage/Page3';
import Page4 from './components/StartingPage/Page4';
import Login from './components/LoginAndSignUp/Login';
import SignUp from './components/LoginAndSignUp/SignUp';
import Home from './components/Layout/Home';
import HomeSearch from './components/Layout/HomeSearch';
import AddNewAddress from './components/Location/AddNewAddress';
import ChooseYourAddress from './components/Location/ChooseYourAddress';
import FruitBandle from './components/Layout/FruitBandle/FruitBandle';
import Categories from './components/Categories/Categories';
import Popular1 from './components/PopularDeals/Popular1';
import Popular2 from './components/PopularDeals/Popular2';
import MyFavorite from './components/PopularDeals/MyFavorite';
import MyFavorite2 from './components/PopularDeals/MyFavorite2';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import MyProfile from './components/Profile/MyProfile';
import OrderSuccess from './components/Checkout/OrderSuccess';
import Card from './components/Card/Card';
import SpecialsDeals from './components/SpecialDeals/SpecialsDeals';
import DragonFruits from "./components/DragonFruits/DragonFruits"
import DragonFruits2 from './components/DragonFruits/DragonFruits2';
import OrderSummary from './components/Checkout/OrderSummary';
import CheckOut from './components/Checkout/CheckOut';
import FeaturedVegetables from './components/Card/FeaturedVegetables';
import Layout from './components/Layout/Layout';
import GoogleMap from './components/Location/GoogleMap';
import TeamDesign from './TeamDesign';
import MyFooter from './components/Layout/MyFooter';



const MyRoute = () => {
    return (
        <div>

            <Switch>
                <Route exact path="/" component={Page1}  />
                <Route  path="/page2" component={Page2}  />
                <Route  path="/page3" component={Page3}  />
                <Route  path="/page4" component={Page4}  />
                <Route  path="/login" component={Login}  />
                <Route  path="/signUp" component={SignUp}  />
                <Route  path="/home" component={Home}  />
                <Route  path="/homeSearch" component={HomeSearch}  />
                <Route  path="/layout" component={Layout}  />
                <Route  path="/fruitBundle" component={FruitBandle}  />
                <Route  path="/addAddress" component={AddNewAddress}  />
                <Route  path="/chooseAddress" component={ChooseYourAddress}  />
                <Route  path="/categories" component={Categories}  />
                <Route  path="/popular1" component={Popular1}  />
                <Route  path="/popular2" component={Popular2}  />
                <Route  path="/myFavorite" component={MyFavorite}  />
                <Route  path="/myFavorite2" component={MyFavorite2}  />
                <Route  path="/cart" component={Cart}  />
                <Route  path="/profile" component={Profile}  />
                <Route  path="/myProfile" component={MyProfile}  />
                <Route  path="/orderSuccess" component={OrderSuccess}  />
                <Route  path="/card" component={Card}  />
                <Route  path="/specialDeals" component={SpecialsDeals}  />
                <Route  path="/dragonFruits" component={DragonFruits}  />
                <Route  path="/dragonFruits2" component={DragonFruits2}  />
                <Route  path="/orderSummary" component={OrderSummary}  />
                <Route  path="/checkOut" component={CheckOut}  />
                <Route  path="/googleMap" component={GoogleMap}  />
                <Route  path="/featuredVegetables" component={FeaturedVegetables}  />
                <Route  path="/test" component={Test}  />
                <Route  path="/team-design" component={TeamDesign}  />
                <Route   component={NotFound}  />
            </Switch>

            <MyFooter />

            
        </div>
    );
};

export default MyRoute;