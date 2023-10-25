import React, { useState } from 'react';
import ReactMapGL,{ Marker} from 'react-map-gl';






const GoogleMap = (props) => {

    const [viewport, setViewport] = useState({
        latitude: 23.8103,
        longitude: 90.4125,
        zoom: 8,
        width:"100%",
        height:"100vh",
        pitch : 50
    });

    return (
        <div>
        

            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={(newView) => setViewport(newView)}
               mapboxApiAccessToken={"pk.eyJ1IjoibWRzYWRkYW1ob3NzYWluIiwiYSI6ImNrdHBkOGZyOTBsamkydXBtZGZvemdsaGkifQ.1xe6elvzqbfDw1H2fsBx_w"}
            >
             <Marker  latitude={23.748} longitude={90.4122}>
                 <img src="http://assets.stickpng.com/thumbs/5888925dbc2fc2ef3a1860ad.png"  width="50px" height="80px"/>
             </Marker>
            </ReactMapGL>



        </div>
    );
};


export default GoogleMap;
