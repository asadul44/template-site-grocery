import React from 'react';
import ProductData from './../ProductData';


const TeamDesign = () => {

    let { products } = ProductData;

    return (
        <div className="mx-4 md:mx-12 lg:mx-64 mt-20">

            <div className="grid grid-cols-4 gap-8">

                {products.map((item, index) => {
                    return (

                        <div className="col-span-4 md:col-span-2 lg:col-span-1 ">

                            <div className="flex justify-center items-center flex-col">
                                <div className="z-20 relative">
                                    <img src="./image/lichi.jpg" className="w-32 h-32 rounded-full" style={{ border: "8px solid #E4F3EA" }} />
                                </div>
                                <div className=" text-center bg-white w-full hover:bg-blue-deep hover:text-white  -mt-16 relative z-10 shadow-md rounded-md">

                                    <p className="mt-20">Name of Employee</p>
                                    <p> Designation </p>
                                    <div className="flex gap-2 justify-center items-center">
                                        <div className="bg-red text-white flex justify-center items-center w-8 h-8 rounded-full">face</div>
                                        <div className="bg-red text-white flex justify-center items-center w-8 h-8 rounded-full">twe</div>
                                        <div className="bg-red text-white flex justify-center items-center w-8 h-8 rounded-full">ins</div>
                                        <div className="bg-red text-white flex justify-center items-center w-8 h-8 rounded-full">you</div>
                                    </div>

                                    <p className="mx-5 p-6">Kasd ipsum no justo elitr amet sit invidunt, lorem sit sed diam et lorem at. Invidunt ut at dolor invidunt. </p>


                                </div>
                            </div>

                        </div>

                    )
                })}

            </div>


            <div className="grid grid-cols-3 gap-8 mt-12">

                <div className="col-span-3 md:col-span-2 lg:col-span-1 ">
                    <div className="w-8 h-8 bg-red rounded-full flex justify-center items-center ml-5">
                        <p >qu</p>
                    </div>
                    <div className="col-span-3 md:col-span-2 lg:col-span-1 p-6 shadow-md -mt-4" >

                        <p>Sadipscing dolor dolore justo amet ea justo amet ut, sanctus et magna duo erat et sanctus at ipsum et. Et sed aliquyam elitr gubergren labore vero stet. Et et et stet dolor amet vero stet gubergren, dolor justo ipsum et. </p>

                        <div className="flex gap-8">
                            <div>
                                <img src="./image/lichi.jpg" className="w-16 h-16 rounded-full border-3 " />
                            </div>
                            <div>
                                <p>name</p>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-2 lg:col-span-1 ">
                    <div className="w-8 h-8 bg-red rounded-full flex justify-center items-center ml-5">
                        <p >qu</p>
                    </div>
                    <div className="col-span-3 md:col-span-2 lg:col-span-1 p-6 shadow-md -mt-4" >

                        <p>Sadipscing dolor dolore justo amet ea justo amet ut, sanctus et magna duo erat et sanctus at ipsum et. Et sed aliquyam elitr gubergren labore vero stet. Et et et stet dolor amet vero stet gubergren, dolor justo ipsum et. </p>

                        <div className="flex gap-8">
                            <div>
                                <img src="./image/lichi.jpg" className="w-16 h-16 rounded-full border-3 " />
                            </div>
                            <div>
                                <p>name</p>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-2 lg:col-span-1 ">
                    <div className="w-8 h-8 bg-red rounded-full flex justify-center items-center ml-5">
                        <p >qu</p>
                    </div>
                    <div className="col-span-3 md:col-span-2 lg:col-span-1 p-6 shadow-md -mt-4" >

                        <p>Sadipscing dolor dolore justo amet ea justo amet ut, sanctus et magna duo erat et sanctus at ipsum et. Et sed aliquyam elitr gubergren labore vero stet. Et et et stet dolor amet vero stet gubergren, dolor justo ipsum et. </p>

                        <div className="flex gap-8">
                            <div>
                                <img src="./image/lichi.jpg" className="w-16 h-16 rounded-full border-3 " />
                            </div>
                            <div>
                                <p>name</p>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-2 lg:col-span-1 ">
                    <div className="w-8 h-8 bg-red rounded-full flex justify-center items-center ml-5">
                        <p >qu</p>
                    </div>
                    <div className="col-span-3 md:col-span-2 lg:col-span-1 p-6 shadow-md -mt-4" >

                        <p>Sadipscing dolor dolore justo amet ea justo amet ut, sanctus et magna duo erat et sanctus at ipsum et. Et sed aliquyam elitr gubergren labore vero stet. Et et et stet dolor amet vero stet gubergren, dolor justo ipsum et. </p>

                        <div className="flex gap-8">
                            <div>
                                <img src="./image/lichi.jpg" className="w-16 h-16 rounded-full border-3 " />
                            </div>
                            <div>
                                <p>name</p>
                                <p>Designation</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>






        </div>
    );
};

export default TeamDesign;
