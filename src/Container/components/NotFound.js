import React from 'react';

const NotFound = () => {
    return (
        <div className="mx-4 flex items-center justify-center mt-32 flex-col">

            <img src="./image/notFound.gif" alt="error" className="rounded-2xl" />
            <button  className="mt-8 bg-purple-600 text-white p-2 rounded-md hover:bg-purple-900 "> Home page</button>
        </div>
    );
};

export default NotFound;