import React from 'react';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import CategoriesData from '../../../CategoriesData';

const MyFavorite2 = () => {

    const { categories } = CategoriesData;
    let history =useHistory();

    const handleClick = () =>{
        history.push('/layout')
    }
    return (
        <div className="sm:mx-12">
            <div className="mx-3.5 mt-2 flex justify-between items-center">

                <p className="text-black-deep text-lg font-bold pt-2 font-Nunito ">My Favorite</p>
                <SearchOutlined style={{ color: "#54B175", fontSize: "16px", fontWeight: "bold" }} />
            </div>
            <div className="flex justify-center items-center h-64 mx-3.5 mt-6">
                <img src="./image/empty.gif" className="w-80" alt="error"  />
            </div>
            <p className="mx-3.5 text-center font-Nunito font-bold text-2xl text-black-deep mt-4">Oops your wishlist is empty!</p>
            <p className="mx-8 text-center font-Nunito font-normal text-black-light mt-4 text-sm">It seems nothing in here, Explore more and shortlist some item</p>

            <div className="bg-green-deep flex justify-center items-center rounded-lg mt-8 sm:mt-16 mx-3.5 h-14   ">
                <button type="submit" className="text-white font-Nunito text-lg font-medium" onClick={handleClick}>Start Shopping</button>
            </div>
            <div className="mx-3.5 flex justify-between my-4">
                <p className="font-Nunito font-semibold text-black-deep text-lg ">Recommendation for you</p>
                <p className="text-green-deep font-Nunito text-sm">See All</p>
            </div>

            <div className="mx-4 grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  gap-4 lg:gap-8 ">

                {
                    categories.map((item, index) => {
                        return (
                            <div className="h-72 md:h-96 bg-white shadow-xl rounded-md ">
                                <div className="m-2 bg-gray-light rounded-md h-32 md:h-56 flex items-center justify-center ">
                                    img
                                </div>
                                <p className="bg-red rounded-full mt-2 py-1 w-20 text-white flex justify-center font-Nunito mx-2 ">Disc 40%</p>
                                <p className="ml-2 text-black-deep font-bold text-lg font-Nunito">Dragon Fruit</p>
                                <p className="ml-2 text-black-light font-normal text-base font-Nunito -mt-3">200 gr</p>
                                <div className="mx-2 flex justify-around items-center -mt-4">
                                    <p className=" font-Nunito font-normal  text-xs line-through text-red">$90</p>
                                    <p className=" font-Nunito text-base font-bold text-black-deep">$45</p>
                                    <p className="px-2.5 py-.5 bg-green-deep text-white rounded-md font-Nunito text-lg font-bold">+</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    );
};

export default MyFavorite2;