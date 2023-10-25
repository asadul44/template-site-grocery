import React, { useState,useEffect } from 'react';
import { useGlobalState } from '../../../store';
import { CameraOutlined, RightOutlined ,UserOutlined,EnvironmentOutlined,BellOutlined,CheckCircleOutlined} from '@ant-design/icons';
import { Divider, Upload } from 'antd';
import { useHistory } from 'react-router-dom';

const Profile = () => {

    const [currentUser, setCurrentUser] = useGlobalState('currentUser');
    let [image, setImage] = useState(null);
    let history = useHistory();
    

    useEffect(() => {
        const user = localStorage.getItem("user")
        if(user){
            setCurrentUser(JSON.parse(user))   
        }else{
            setCurrentUser({})
        }
               
    }, [])

    const gotoMyProfile = () => {
        history.push("/myProfile")
    }
    const gotoLocation = () => {
        history.push("/chooseAddress")
    }
    const gotoStartPage = () => {
        localStorage.clear();
        history.push("/")
    }

    const onImageChange = (e) => {

        let img = e.target.files[0];
        setImage(URL.createObjectURL(img));

    };
    return (
        <div className="grid  grid-cols-6">

            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">
                <div>
                    <div className=" flex justify-center items-center pt-12">
                        <img className="bg-gray-light w-28 h-28 rounded-full flex justify-center items-center" src={currentUser.image || image} alt="img" />
                        <div className="bg-green-deep w-9 h-9 rounded-full flex justify-center items-center -ml-8 mt-16 cursor-pointer">
                            <label for="file-input"><CameraOutlined style={{ color: "white", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }} /></label>
                            <input id="file-input" type="file" name="myImage" onChange={(e) => onImageChange(e)} style={{ display: "none" }} />
                        </div>
                    </div>
                    <div className="mx-4 text-center">
                        <p className="font-bold text-2xl text-black-deep font-Nunito mt-4 "> {currentUser.name}</p>
                        <p className="font-normal text-sm text-black-light font-Nunito  ">{currentUser.email}</p>


                    </div>

                    <div className="mx-4 flex justify-center items-center bg-white mb-3 h-20">
                        <div className="w-1/5 " > <p className="bg-green-light flex justify-center items-center  rounded-xl  w-16 h-16  ml-2">  <UserOutlined style={{color:"#54B175",fontSize:"24px"}} /></p>  </div>
                        <div className="w-3/5"><p className="text-black-deep font-bold text-lg font-Nunito mt-2 ml-2 ">My Profile</p></div>
                        <div className="w-1/5 text-right"> <RightOutlined style={{ color: "#22292E", fontSize: "18px", cursor: "pointer" }} onClick={gotoMyProfile} /></div>
                    </div>
                    <div className="mx-4 flex justify-center items-center bg-white mb-3  h-20">
                        <div className="w-1/5 m-2"> <p className="bg-orange-light flex justify-center items-center  rounded-xl   w-16 h-16  "> <EnvironmentOutlined  style={{color:"#FE6E4C",fontSize:"24px"}}/> </p>  </div>
                        <div className="w-3/5"><p className="text-black-deep font-bold text-lg font-Nunito mt-2 ">My Address</p></div>
                        <div className="w-1/5 text-right"> <RightOutlined style={{ color: "#22292E", fontSize: "18px" }} onClick={gotoLocation} /></div>
                    </div>
                    <div className="mx-4 flex justify-center items-center bg-white mb-3  h-20">
                        <div className="w-1/5 m-2"> <p className="bg-yellow-light flex justify-center items-center  rounded-xl  w-16 h-16  "> <BellOutlined   style={{color:"#FEBF43",fontSize:"24px"}}/> </p>  </div>
                        <div className="w-3/5"><p className="text-black-deep font-bold text-lg font-Nunito mt-2 ">Notification</p></div>
                        <div className="w-1/5 text-right"> <RightOutlined style={{ color: "#22292E", fontSize: "18px" }} /></div>
                    </div>
                    <div className="mx-4 flex justify-center items-center bg-white mb-3  h-20">
                        <div className="w-1/5 m-2"> <p className="bg-purple-light flex justify-center items-center  rounded-xl  w-16 h-16  ">  <CheckCircleOutlined   style={{color:"#9B81E5",fontSize:"24px"}}/></p>  </div>
                        <div className="w-3/5"><p className="text-black-deep font-bold text-lg font-Nunito mt-2 ">Help Center</p></div>
                        <div className="w-1/5 text-right"> <RightOutlined style={{ color: "#22292E", fontSize: "18px" }} /></div>
                    </div>
                    <div className="mx-4 flex justify-center items-center bg-white  h-20">
                        <div className="w-1/5 m-2">
                            <p className="bg-orange-light flex justify-center items-center  rounded-xl  w-16 h-16 ">
                                <RightOutlined style={{ color: "#FE6E4C", fontSize: "24px" }} />
                            </p>  </div>
                        <div className="w-3/5"><button type="submit" className="text-black-deep font-bold text-lg font-Nunito mt-2 " onClick={gotoStartPage}>Log Out</button></div>
                        <div className="w-1/5 text-right"> </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Profile;