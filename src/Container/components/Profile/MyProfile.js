import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LeftOutlined, CameraOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

const MyProfile = () => {

    let [image, setImage] = useState(null);

    let history = useHistory();

    const backtoMove = () => {
        history.push("/layout")
    }

    const onImageChange = (e) => {

        let img = e.target.files[0];
        setImage(URL.createObjectURL(img));

    };
    return (
        <div className="grid  grid-cols-6">
            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">


                <div className="pt-4 pl-2 flex justify-between ">
                    <LeftOutlined style={{ color: "#54B175" }} onClick={backtoMove} />
                    <p className="text-center -mt-1  text-black-deep font-bold font-Nunito text-md">My Profile</p>
                    <p></p>
                </div>
                <div className=" flex justify-center items-center pt-12">
                    <img className="bg-gray-light w-28 h-28 rounded-full flex justify-center items-center" src={image} alt="img" />
                    <div className="bg-green-deep w-9 h-9 rounded-full flex justify-center items-center -ml-8 mt-16 cursor-pointer">
                        <label style={{}} for="file-input"><CameraOutlined style={{ color: "white", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} /></label>
                        <input id="file-input" type="file" name="myImage" onChange={(e) => onImageChange(e)} style={{ display: "none" }} />
                    </div>
                </div>
                <div className="mx-4">
                    <Divider style={{ borderBottom: "1px solid #E5E5EA" }} />
                </div>

                <div className="mx-4 flex justify-between">
                    <p className="font-Nunito text-black-light font-normal">Full name</p>
                    <p className="font-Nunito text-black-deep font-bold">Shoo Phar Nhoe</p>
                </div>
                <div className="mx-4 flex justify-between">
                    <p className="font-Nunito text-black-light font-normal">Birthdate</p>
                    <p className="font-Nunito text-black-deep font-bold">29 February 1200</p>
                </div>
                <div className="mx-4 flex justify-between">
                    <p className="font-Nunito text-black-light font-normal">Gender</p>
                    <p className="font-Nunito text-black-deep font-bold">Male</p>
                </div>
                <div className="mx-4 flex justify-between">
                    <p className="font-Nunito text-black-light font-normal">Email</p>
                    <p className="font-Nunito text-black-deep font-bold">shoophar@email.com</p>
                </div>
                <div className="mx-4 flex justify-between">
                    <p className="font-Nunito text-black-light font-normal">Phone number</p>
                    <p className="font-Nunito text-black-deep font-bold">(+78) 8989 8787</p>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;