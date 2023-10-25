import React from 'react';
import CategoriesData from '../../../CategoriesData';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';


const Categories = () => {
    const { categories } = CategoriesData;
    const history = useHistory();
    const backtoMove = () => {
        history.push('/layout')
    }
    return (
        <div className="sm:mx-12" style={{minHeight:"100vh"}}>
            <div className="mx-3.5 mt-2 flex justify-between items-center">
                <div className="flex items-center" >
                    <LeftOutlined style={{ color: "#54B175" }} onClick={backtoMove} />
                    <a href="#" onClick={backtoMove} style={{ color: "#54B175", marginLeft: "8px" }} >Back  </a>
                </div>
                <p className="text-black-deep text-md font-semibold pt-2 font-Nunito ">Categories</p>
                <SearchOutlined style={{ color: "#54B175", fontSize: "16px", fontWeight: "bold" }} />
            </div>

            <div className="grid  grid-cols-6">

                <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-2 lg:col-span-4">
                    <div className="grid gap-12  mx-4 mt-8 sm:mx-16  lg:mx-48 grid-cols-3 md:grid-cols-3 lg:grid-cols-4 ">
                        {
                            categories.map((item, index) => {
                                return (
                                    <div className="flex justify-center flex-col items-center">

                                        <div className="w-16 h-16 rounded-full bg-green-light flex justify-center items-center">
                                            <img src={item.image} alt="error" />
                                        </div>
                                        <p className="font-Nunito text-xs mt-4">{item.name}</p>


                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="bg-black-deep w-32 h-1.5 rounded-full my-4"></div>
            </div>

        </div>
    );
};

export default Categories;