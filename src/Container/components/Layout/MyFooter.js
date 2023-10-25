import React from 'react';

const MyFooter = () => {
    return (
        <div>

            <div style={{ textAlign: "center", width: "100%", height: "70px", display: "flex", justifyContent: "center", alignItems: "center", background: "gray",marginTop:"20px" }}>
                <p style={{color:"white",fontFamily:"sans-serif",fontWeight:"bold"}}>
                    Copyright &copy; All rights reserved | Developed by <a href="https://bitsofts.io/" target="_blank" style={{ color: "#2FDBBC" }}> bitsofts.io</a>
                </p>
            </div>

        </div>
    );
};

export default MyFooter;
