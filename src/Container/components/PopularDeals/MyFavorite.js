import React from 'react';
import { useHistory } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { useGlobalState } from '../../../store';

const MyFavorite = () => {
    
    const [favoriteProduct, setFavoriteProduct] = useGlobalState('favoriteProduct');
    return (
        <div style={{ background: "#FBFBFB" }} className="grid  grid-cols-6">

            <div  className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">
                <div className="mx-3.5 mt-2 flex justify-between items-center">

                    <p className="text-black-deep text-lg font-bold pt-2 font-Nunito ">My Favorite</p>
                    <SearchOutlined style={{ color: "#54B175", fontSize: "16px", fontWeight: "bold" }} />
                </div>

                <div className="grid grid-cols-1 gap-4 mt-4">
                    {favoriteProduct.map((item, index) => {
                        return (
                            <div className="mb-6  ">
                                <div className="mx-4 grid grid-cols-10 gap-4 mb-6 bg-white rounded-md h-24  ">
                                    <div className="col-start-1 col-span-3 ">
                                        <div className="bg-gray-light m-2 rounded-md h-20 flex justify-center items-center">
                                           <img src={item.picture}  alt="error" className="h-full w-full" />
                                        </div>
                                    </div>
                                    <div className="col-start-4 col-span-5  ">

                                        <p className="bg-red rounded-full mt-2 p-.5 w-20 text-white flex justify-center font-Nunito "> Disc 40% </p>
                                        <p className="font-Nunito font-bold text-black-deep text-md"> {item.title} Fruit</p>
                                        <p className="font-Nunito font-normal  text-black-light text-xs">200gm</p>

                                    </div>
                                    <div className="col-end-11  col-span-2 text-center  mt-8" >
                                        <p className="font-Nunito font-normal  text-xs line-through text-red">$90</p>
                                        <p className="font-bold text-black-deep font-Nunito text-lg ">$45</p>
                                    </div>
                                </div>
                                <div className="mx-4 flex justify-between h-14 gap-4">
                                    <div className="flex-1  border border-green-deep text-green-deep font-Nunito font-bold text-lg rounded-md flex justify-center items-center"><button>Remove</button></div>
                                    <div className="flex-1   text-white bg-green-deep font-Nunito font-bold text-lg rounded-md flex justify-center items-center"><button>Add to Cart</button></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    );
};

export default MyFavorite;