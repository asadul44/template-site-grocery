import React from 'react';
import { useHistory } from 'react-router-dom';

const Page1 = () => {

    let history = useHistory();

    const handalClick = () => {
        history.push("/page2")
    }

    return (
        <div style={{minHeight:"100vh"}}>

            <div className="mx-8 flex justify-center items-center pt-16" >
                <img src="./image/world.png" alt="error" className="h-80" />
            </div>

            <div className="grid  grid-cols-6">

                <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2">


                    <p className="mt-2 font-Nunito sm:text-center text-3xl text-black-deep mx-3.5 w-52 sm:w-full ">Welcome to Veggie Fresh</p>

                    <p className=" mt-4 font-Nunito sm:text-center text-base text-black-light mx-3.5  ">We have more than 10,000+ foods available for all of you</p>

                    <div className="bg-green-deep flex justify-center items-center rounded-lg mt-16 sm:mt-16 mx-3.5 h-14  ">

                        <button type="submit" className="text-white font-Nunito" onClick={handalClick}>Get Start</button>

                    </div>

                    <div className="flex justify-center items-center">
                        <div className="bg-black-deep w-32 h-1.5 rounded-full mt-8"></div>
                    </div>



                </div>

            </div>

        </div>
    );
};

export default Page1;