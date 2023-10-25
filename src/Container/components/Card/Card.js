import React from 'react';
import { Tabs, Radio } from 'antd';
import "./Card.css"
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import CategoriesData from './../../../CategoriesData';


const { TabPane } = Tabs;

const Card = () => {

    let {categories} = CategoriesData;


    return (
        <div className="mx-4 sm:mx-8 lg:mx-12">
            <div className=" mt-2 flex justify-between items-center">
                <div className="flex items-center" >
                    <LeftOutlined style={{ color: "#54B175" }} />
                    <a href="#" style={{ color: "#54B175", marginLeft: "8px" }} >Back  </a>
                </div>
                <p className="text-black-deep text-md font-semibold pt-3 font-Nunito ">Fruits</p>
                <SearchOutlined style={{ color: "#54B175", fontSize: "16px", fontWeight: "bold" }} />
            </div>
            <div className="">


                <Tabs defaultActiveKey="1" type="card"  >
                    <TabPane tab="All" key="1">
                        <div className=" grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4  gap-4 lg:gap-8 ">

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
                    </TabPane>
                    <TabPane tab="Apple" key="2">
                        Content of card tab 2
                    </TabPane>
                    <TabPane tab="Avocado" key="3">
                        Content of card tab 3
                    </TabPane>
                    <TabPane tab="Banana" key="4">
                        Content of card tab 4
                    </TabPane>
                </Tabs>


            </div>


        </div>
    );
};

export default Card;