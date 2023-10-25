
import React from 'react';
import { Divider, Input, Select } from 'antd';
import { LeftOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom';





const SignUp = () => {

    const history = useHistory();

    const handalClick = () => {
        history.push("/login")
    }

    return (
        <div className="grid  grid-cols-6">

            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">


                <LeftOutlined style={{ color: "#54B175", marginTop: "16px", paddingLeft: "8px" }} onClick={handalClick} />

                <p className="font-Nunito font-bold text-xl mx-3.5 mt-2">Sign up to Continue!</p>
                <div className="flex flex-col mt-12 ">
                    <button type="submit" className="pl-4 text-green-deep bg-green-light h-14 mx-3.5 rounded-lg text-left font-Nunito text-lg font-bold">Sign Up with Facebook</button>
                    <button type="submit" className="pl-4 text-green-deep bg-green-light h-14 mx-3.5 rounded-lg text-left mt-6 font-Nunito text-lg font-bold">Sign Up with Google</button>
                </div>

                <div className="mx-3.5 ">
                    <Divider orientation="center" > <p className="font-Nunito text-lg mt-4 text-black-light"> OR</p> </Divider>
                </div>

                <div className="mx-3.5 font-Nunito">

                    <Input placeholder="Your Name" className="h-14" />
                    <Input placeholder="Email Address" className="h-14 mt-8 " style={{ marginTop: "32px" }} />
                    <Input.Password placeholder="Password" className="h-14 mt-8" />

                </div>
                <div className="bg-green-deep flex justify-center items-center rounded-lg mt-10 sm:mt-16 mx-3.5 h-14  ">

                    <button type="submit" className="text-white font-Nunito text-lg font-medium" onClick={handalClick}>Sign Up</button>

                </div>

                <p className="font-Nunito text-md text-center mt-6 font-bold text-black-light">Have an account? <span onClick={handalClick} className="text-green-deep cursor-pointer">Login</span></p>
                <div className="flex justify-center items-center">
                    <div className="bg-black-deep w-32 h-1.5 rounded-full mt-2 mb-2"></div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;