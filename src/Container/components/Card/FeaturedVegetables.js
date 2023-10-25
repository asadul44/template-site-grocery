import React from 'react';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import CategoriesData from './../../../CategoriesData';
import { useHistory } from 'react-router-dom';

const FeaturedVegetables = () => {

    const { categories } = CategoriesData;
    let history = useHistory();

    const backToMove = () =>{
        history.push("/layout")
    }
    return (
        <div className="grid grid-cols-6">

            <div style={{ background: "#FBFBFB" }} className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">
                <div className="mx-3.5 mt-2 flex justify-between items-center">
                    <div className="flex items-center" >
                        <LeftOutlined style={{ color: "#54B175" }} onClick={backToMove} />
                        <a href="#" style={{ color: "#54B175", marginLeft: "8px" }}  onClick={backToMove}>Back  </a>
                    </div>
                    <p className="text-black-deep text-md font-semibold pt-2 font-Nunito ">Featured Vegetables</p>
                    <SearchOutlined style={{ color: "#54B175", fontSize: "16px", fontWeight: "bold" }} />
                </div>

                <div className="grid grid-cols-1 mt-4">
                    {categories.map((item, index) => {
                        return (
                            <div className="mb-6  ">
                                <div className="mx-4 grid grid-cols-10 bg-white rounded-md h-24  ">
                                    <div className="col-start-1 col-span-3 ">
                                        <div className="bg-gray-light m-2 rounded-md h-20 flex justify-center items-center">
                                        <img src={item.picture}  alt="error" className="h-full w-full" />
                                        </div>
                                    </div>
                                    <div className="col-start-4 col-span-5  ">

                                        <p className="bg-red rounded-full mt-4 p-.5 w-20 text-white flex justify-center font-Nunito "> Disc 40% </p>
                                        <p className="font-Nunito font-bold text-black-deep text-md"> {item.title} Fruit</p>
                                        <p className="font-Nunito font-normal  text-black-light text-xs">200gm</p>

                                    </div>
                                    <div className="col-end-11  col-span-2 text-center  mt-8" >
                                        <p className="font-Nunito font-normal  text-xs line-through text-red">$90</p>
                                        <p className="font-bold text-black-deep font-Nunito text-lg ">$45</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    );
};

export default FeaturedVegetables;