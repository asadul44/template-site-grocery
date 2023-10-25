import React from 'react';
import { LeftOutlined, ShoppingCartOutlined, ShareAltOutlined, HeartTwoTone, EditOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import CategoriesData from './../../../CategoriesData';

const DragonFruits2 = () => {

    const { categories } = CategoriesData;
    return (
        <div style={{ background: "#FBFBFB" }}>
            <div className="mx-3.5 mt-2 flex justify-between items-center">
                <div className="flex items-center" >
                    <LeftOutlined style={{ color: "#54B175" }} />
                    <a href="#" style={{ color: "#54B175", marginLeft: "8px" }} >Back  </a>
                </div>
                <div>
                    <p className="text-black-deep text-md font-semibold mt-2">Fruits Bundle</p>
                </div>
                <div className="flex" style={{ color: "#54B175", fontSize: "18px" }}>
                    <ShoppingCartOutlined style={{ marginRight: "12px" }} />
                    <ShareAltOutlined />
                </div>
            </div>

            <div className="mx-4 flex justify-between h-8  gap-4 bg-gray-light rounded-md mt-6">
                <div className="flex-1    text-black-deep  font-Nunito font-medium text-sm rounded-md flex justify-center items-center"><button>Detail Items</button></div>
                <Divider type="vertical" style={{ fontSize: "24px", fontWeight: "8000", marginTop: "6px", backgroundColor: "#8A8A8E" }} />
                <div className="flex-1 m-1   text-black-deep bg-white font-Nunito font-medium text-sm rounded-md flex justify-center items-center"><button>Reviews</button></div>
            </div>

            <div className="mx-4 bg-white  rounded-md">

                <div className=" mt-8 flex justify-between p-2 ">

                    <div className="">
                        <div className="w-12 h-12 rounded-full bg-gray-light"> </div>
                    </div>


                    <div className="-ml-12">
                        <p className="text-lg text-black-deep font-Nunito font-bold">Shoo Thar Mien</p>
                        <p className="-mt-4 text-sm text-black-light font-Nunito font-normal">* * * * * 29 February, 2099 </p>
                    </div>
                    <div className="mr-8">
                        <div className="mb-1 w-1 h-1 bg-black-deep rounded-full"></div>
                        <div className="mb-1 w-1 h-1 bg-black-deep rounded-full"></div>
                        <div className="w-1 h-1 bg-black-deep rounded-full"></div>
                    </div>
                </div>
                <p className="mx-6 pb-2 -mt-5 text-sm text-black-light font-Nunito font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div className="mx-4 bg-white -mt-4 rounded-md">

                <div className=" mt-8 flex justify-between p-2 ">

                    <div className="">
                        <div className="w-12 h-12 rounded-full bg-gray-light"> </div>
                    </div>


                    <div className="-ml-12">
                        <p className="text-lg text-black-deep font-Nunito font-bold">Shoo Thar Mien</p>
                        <p className="-mt-4 text-sm text-black-light font-Nunito font-normal">* * * * * 29 February, 2099 </p>
                    </div>
                    <div className="mr-8">
                        <div className="mb-1 w-1 h-1 bg-black-deep rounded-full"></div>
                        <div className="mb-1 w-1 h-1 bg-black-deep rounded-full"></div>
                        <div className="w-1 h-1 bg-black-deep rounded-full"></div>
                    </div>
                </div>
                <p className="mx-6 pb-2 -mt-5 text-sm text-black-light font-Nunito font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>

            <div className="text-green-deep border border-green-deep flex justify-center items-center rounded-lg mt-10 sm:mt-16 mx-3.5 h-14  ">
                <button type="submit" className="text-lg font-semibold" >See All Reviews</button>
            </div>
            <div className="mx-4">
                <Divider style={{ background: "#E5E5EA" }} />
            </div>

            <div className="mx-4 flex justify-between">
                <p className="text-lg text-black-deep font-Nunito font-bold">More Like this</p>
                <p className="text-base text-green-deep  font-normal">See All</p>
            </div>

            {/* see all items  */}

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

            <div className="mx-3.5 gap-2 flex flex-1 mt-4 ">
                <ShoppingCartOutlined style={{ padding: "8px", paddingTop: "20px ", border: ".5px solid #54B175", borderRadius: "8px", width: "15%", color: "#54B175", fontSize: "18px" }} />
                <button className="h-14 bg-green-deep  flex-1 rounded-lg text-white font-bold font-Nunito"> Bay Now</button>
            </div>

            <div className="flex justify-center items-center">
                <div className="bg-black-deep w-32 h-1.5 rounded-full mt-4"></div>
            </div>





        </div>
    );
};

export default DragonFruits2;