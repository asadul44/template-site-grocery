import React from 'react';
import { useHistory } from 'react-router-dom';

const Page4 = () => {

    let history = useHistory();

    const handalClick = () => {
        history.push("/login")
    }

    return (
        <div style={{minHeight:"100vh"}}>

            <div className=" bg-green-light ">
                <p className="font-Nunito text-black-light text-base cursor-pointer text-right pt-16 pr-8 " onClick={handalClick}> Skip</p>
                <div className="mx-8 flex justify-center items-center" >
                    <img src="./image/delivery.png" alt="error" className="h-80" />
                </div>
            </div>

            <div className="grid  grid-cols-6">

                <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">

                    <p className="text-center mt-8 font-Nunito text-2xl text-black-deep"> Fast Delivery</p>
                    <p className="text-center mt-4 sm:mt-6 font-Nunito text-base text-black-light mx-3.5 ">Courier will send the groceries you buy in just 1 day, very fast like a flash!</p>
                    <div className="flex justify-center items-center mt-4">

                        <div className="w-2 h-2 rounded-full bg-black-light ml-2"> </div>
                        <div className="w-2 h-2 rounded-full bg-black-light ml-2"> </div>
                        <div className="w-12 h-2 rounded-full bg-green-deep ml-2"></div>
                    </div>

                    <div className="bg-green-deep flex justify-center items-center rounded-lg mt-8 mx-3.5 h-14 ">

                        <button type="submit" onClick={handalClick} className="text-white font-Nunito">Get Start</button>

                    </div>

                    <div className="flex justify-center items-center">
                        <div className="bg-black-deep w-32 h-1.5 rounded-full mt-8"></div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Page4;