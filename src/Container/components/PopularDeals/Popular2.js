import React from 'react';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import CategoriesData from '../../../CategoriesData';

const Popular2 = () => {
    const { categories } = CategoriesData;
    return (
        <div className=" grid grid-cols-6 ">
            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-2 lg:col-span-4">
                <div className="mx-3.5 mt-2 flex justify-between items-center">
                    <div className="flex items-center" >
                        <LeftOutlined style={{ color: "#54B175" }} />
                        <a href="#" style={{ color: "#54B175", marginLeft: "8px" }} >Back  </a>
                    </div>
                    <p className="text-black-deep text-md font-semibold pt-3 font-Nunito ">Popular Deals</p>
                    <SearchOutlined style={{ color: "#54B175", fontSize: "16px", fontWeight: "bold" }} />
                </div>

                <div className="mx-4 grid grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-8 ">

                    {categories.map((item, index) => {
                        return (
                            <div className="h-56 md:h-96 bg-white shadow-2xl rounded-md ">
                                <div className="m-2 bg-black-light rounded-md h-28 md:h-56 flex items-center justify-center ">
                                    img
                                </div>
                                <p className="font-Nunito text-black-deep text-xs font-bold mx-2">Dragon Fruits</p>
                                <p className="font-Nunito text-black-light text-xs mx-2">200gm</p>
                                <div className="mx-2 flex justify-between items-center">
                                    <p className="font-Nunito text-base font-bold text-black-deep">$45</p>
                                    <p className="px-2.5 py-.5 bg-green-deep text-white rounded-md font-Nunito text-lg font-bold">+</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    );
};

export default Popular2;