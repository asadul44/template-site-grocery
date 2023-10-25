import React from 'react';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import SpecialBandleData from '../../../SpecialBandleData';
import { useHistory } from 'react-router-dom';


const SpecialsDeals = () => {

    const { specialBandle } = SpecialBandleData;
    let history = useHistory();

    const gotoBack = () => {
        history.push('/layout')
    }

    const gotoSpecialDeals = () => {
        history.push('/fruitBundle')
    }

    return (
        <div className="grid grid-cols-6" style={{minHeight:"100vh"}}>
            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-2 lg:col-span-4 mb-8">
                <div className="mx-3.5 mt-2 flex justify-between items-center">
                    <div className="flex items-center" >
                        <LeftOutlined style={{ color: "#54B175" }} onClick={gotoBack} />
                        <a href="#" style={{ color: "#54B175", marginLeft: "8px" }} onClick={gotoBack}>Back  </a>
                    </div>
                    <p className="text-black-deep text-md font-semibold pt-3 font-Nunito ">Special Deals for You</p>
                    <SearchOutlined style={{ color: "#54B175", fontSize: "16px", fontWeight: "bold" }} />
                </div>

                <div className="mx-4 md:mx-6 lg:mx-8 grid  lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 ">
                    {specialBandle.map((item, index) => {
                        return (
                            <div className="mx-4 bg-gradient-to-b from-gray-light via-black-light to-black-deep h-48 rounded-t-md " style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                <p className="mx-4 text-black-deep text-lg font-Nunito font-bold">Fresh Fruit for You</p>
                                <p className="mx-4 text-black-deep text-sm font-Nunito font-normal">Fresh fruit Everday we Serve to You</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
};

export default SpecialsDeals;