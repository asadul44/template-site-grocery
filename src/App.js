import React from 'react';
import './index.css'
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-multi-carousel/lib/styles.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoute from './Container/MyRoute';
import { changeAppMode } from './Store2/Action';
import { useStore } from './Store2/Store';


const App = () => {

  const [state] = useStore();
  const [, dispatch] = useStore();
  const { darkMode } = state;

  const handleChange = () => {
    
    dispatch(changeAppMode())

  }

  return (
    <div style={{ background: darkMode ? "black" : "white", color: darkMode ? "#FEBF43" : "black", minHeight: "100vh" }} className="">


      <div className="flex justify-end ">
        <button className="fixed pt-32 pr-8 z-50" type="submit" onClick={handleChange}> {darkMode ? <img src="./image/day.png" className="w-4 h-4 rounded-full" /> : <img src="./image/night.png" className="w-5 h-5 rounded-full" />} </button>
      </div>

      <Router>
        <MyRoute />
      </Router>



    </div>
  );
};

export default App;
