import React from 'react';
import { useHistory } from 'react-router-dom';

const EmptyCart = () => {

    let history = useHistory();

    const handleClick = () =>{
        history.push('/layout')
    }
    return (
        <div>

            <div className="flex justify-center items-center h-64 mx-3.5 mt-32">
                <img src="./image/empty.gif" className="w-80" alt="error" />
            </div>
            <p className="mx-3.5 text-center font-Nunito font-bold text-2xl text-black-deep mt-4">Oops your Cartlist is empty!</p>
            <p className="mx-8 text-center font-Nunito font-normal text-black-light mt-4 text-sm">It seems nothing in here, Explore more and shortlist some item</p>

        </div>
    );
};

export default EmptyCart;