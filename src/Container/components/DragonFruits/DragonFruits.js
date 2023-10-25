import React from 'react';
import { LeftOutlined, ShoppingCartOutlined, ShareAltOutlined, HeartTwoTone, EditOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

const GragonFruits = () => {
    return (
        <div className="grid  grid-cols-6">

            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">
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

                <div className="h-80 bg-green-light">

                </div>
                <div className="mx-3.5 mt-4 flex justify-between">
                    <p className="text-black-deep font-semibold font-Nunito text-lg" >Fruit's Bundle</p>
                    <HeartTwoTone twoToneColor="#54B175" style={{ fontSize: "18px" }} />
                </div>

                <p className="font-Nunito text-xs text-black-light font-light mx-3.5 ">200gr</p>

                <div className="mx-3.5 flex justify-between">
                    <div className="flex gap-2">
                        <p className="bg-green-light text-red px-2 py-1 h-6 rounded-lg font-normal text-xs line-through">$126</p>
                        <p className="bg-green-light text-green-deep px-3 py-1 rounded-lg font-bold text-lg">$56</p>
                    </div>
                    <div className="flex justify-between font-Nunito gap-2">
                        <div className="cursor-pointer">
                            <p style={{ background: "#E5E5EA", padding: "8px 16px", borderRadius: "8px" }}>-</p>
                        </div>
                        <div className="cursor-pointer">
                            <p style={{ background: "#FFF", padding: "8px 16px", borderRadius: "8px", border: ".5px solid #E5E5EA " }}>1</p>
                        </div>
                        <div className="cursor-pointer">
                            <p style={{ background: "#E5E5EA", padding: "8px 16px", borderRadius: "8px" }}>+</p>
                        </div>
                    </div>
                </div>

                <div className="mx-4 flex justify-between h-8 mt-2  gap-4 bg-gray-light rounded-md">
                    <div className="flex-1 m-1   text-black-deep bg-white font-Nunito font-medium text-sm rounded-md flex justify-center items-center"><button>Detail Items</button></div>
                    <Divider type="vertical" style={{ fontSize: "24px", fontWeight: "8000", marginTop: "6px", backgroundColor: "#8A8A8E" }} />
                    <div className="flex-1   text-black-deep  font-Nunito font-medium text-sm rounded-md flex justify-center items-center"><button>Reviews</button></div>
                </div>

                <div className="mx-3.5  text-black-light text-xs font-medium font-Nunito">

                    <p className="font-Nunito text-black-light font-normal text-xs mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>

                </div>

                <div className="mx-3.5 gap-2 flex flex-1 mt-4 ">

                    <ShoppingCartOutlined style={{ padding: "8px", paddingTop: "20px ", border: ".5px solid #54B175", borderRadius: "8px", width: "15%", color: "#54B175", fontSize: "18px" }} />
                    <button className="h-14 bg-green-deep  flex-1 rounded-lg text-white font-bold font-Nunito"> Bay Now</button>

                </div>

                <div className="flex justify-center items-center">
                    <div className="bg-black-deep w-32 h-1.5 rounded-full mt-4"></div>
                </div>
            </div>

        </div>
    );
};

export default GragonFruits;