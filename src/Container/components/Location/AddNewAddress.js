import React from 'react';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { Divider, Input } from 'antd';

const AddNewAddress = () => {

    const history = useHistory();

    const backtoMove = () => {
        history.push('/chooseAddress')
    }
    return (
        <div className="w-screen h-screen">

            <LeftOutlined style={{ color: "#54B175", paddingLeft: "8px", marginTop: "16px" }} onClick={backtoMove} />

            <div className="flex justify-between mx-3.5 mt-8 ">
                <p className="font-Nunito text-black-deep text-xl font-bold">Add New Address</p>
                <p>img</p>
            </div>
            <p className="mx-3.5 text-black-light font-normal text-base" >We will find a grocery near your home address</p>
            <div className="flex mx-3.5 relative">

                <Input placeholder="Enter Address" className="h-14 flex-1" style={{ paddingLeft: "30px", background: "#EFEFF0", border: "none" }} />
                <SearchOutlined style={{ color: "#22292E", fontSize: "16px", fontWeight: "bold", position: "absolute", left: "12px", top: "20px" }} />



            </div>

            <div className="mx-3.5">

                <Divider />

            </div>

            <div className="flex mx-3.5 items-center">
                <p >img</p>
                <div className="ml-4">
                    <p className="text-lg font-Nunito font-semibold text-black-deep">Current Location</p>
                    <p className="text-base font-Nunito font-medium text-black-light">Planet Namex Street 989</p>
                </div>
            </div>




        </div>
    );
};

export default AddNewAddress;