import React, { useState,useCallback } from 'react';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Input } from 'antd';

const ChooseYourAddress = () => {
    
    const [viewport, setViewport] = useState({
        latitude: 23.8103,
        longitude: 90.4125,
        zoom: 8,
        width :" 100%",
        height:"320px",
        pitch: 50
    });
    const [marker, setMarker] = useState({
        latitude: 23.748,
        longitude: 90.4122
      });
      const [events, logEvents] = useState({});

      const onMarkerDragStart = useCallback(event => {
        logEvents(_events => ({..._events, onDragStart: event.lngLat}));
      }, []);
    
      const onMarkerDrag = useCallback(event => {
        logEvents(_events => ({..._events, onDrag: event.lngLat}));
      }, []);
    
      const onMarkerDragEnd = useCallback(event => {
        logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
        setMarker({
          longitude: event.lngLat[0],
          latitude: event.lngLat[1]
        });
      }, []);

    // const [center, setCenter] = useState({
    //     lat: 23.8103,
    //     lng: 90.4125
    // })
    const [zoom, setZoom] = useState(14)
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };

    const history = useHistory();
    const backtoMove = () => {
        history.push("/addAddress")
    }
    const handalClick = () => {
        alert('Successfully Address added')
        history.push('/layout')
    }
    return (
        <div className="grid  grid-cols-6">
            <div className="col-start-1 col-span-6 sm:col-start-2 sm:col-span-4 lg:col-start-3 lg:col-span-2 ">



                <div  >

                    <div className="pt-4 pl-2 flex justify-between ">
                        <LeftOutlined style={{ color: "#54B175" }} onClick={backtoMove} />
                        <p className="text-center -mt-1 text-black-deep font-normal font-Nunito text-md">Choose your Address</p>
                        <p></p>
                    </div>


                    <div className=" flex items-center justify-center w-full h-80">

                        {/* <GoogleMapReact
                            defaultCenter={center}
                            defaultZoom={zoom}>
                        </GoogleMapReact> */}

                        <ReactMapGL
                            {...viewport}
                            
                           mapStyle="mapbox://styles/mdsaddamhossain/cktpkaw9j0l5f17ogmohpjmbu"
                            onViewportChange={(viewport) => setViewport(viewport)}
                            mapboxApiAccessToken={"pk.eyJ1IjoibWRzYWRkYW1ob3NzYWluIiwiYSI6ImNrdHBkOGZyOTBsamkydXBtZGZvemdsaGkifQ.1xe6elvzqbfDw1H2fsBx_w"}
                        >
                            <Marker latitude={23.748} longitude={90.4122}
                            
                            longitude={marker.longitude}
                            latitude={marker.latitude}
                            offsetTop={-20}
                            offsetLeft={-10}
                            draggable
                            onDragStart={onMarkerDragStart}
                            onDrag={onMarkerDrag}
                            onDragEnd={onMarkerDragEnd}
                            >
                                <img src="https://icon-library.com/images/location-icon-transparent-background/location-icon-transparent-background-7.jpg" width="50px" height="80px" />
                            </Marker>
                        </ReactMapGL>

                    </div>

                </div>
                <div className="">

                    <div className="">
                        <div className="flex justify-between mx-3.5 mt-4">
                            <p className="text-xl text-black-deep font-semibold"> Planet Namex 989</p>
                            <SearchOutlined style={{ color: "#22292E", fontSize: "16px", fontWeight: "bold" }} />
                        </div>
                        <p className="mx-3.5 font-normal text-black-light text-xs">Norristown, Pennsylvania, 19403</p>

                        <div className="mx-3.5 text-black-light text-sm font-normal font-Nunito">
                            <p  >Detail</p>
                            <p>Address</p>
                            <Input placeholder="write down the building, apartment or office.." className="h-14" />
                        </div>

                        <div className="bg-green-deep flex justify-center items-center rounded-lg mt-10 sm:mt-16 mx-3.5 h-14  ">

                            <button type="submit" className="text-white font-Nunito text-lg font-medium" onClick={handalClick}>Add Address</button>

                        </div>


                        <div className="flex justify-center items-center">
                            <div className="bg-black-deep w-32 h-1.5 rounded-full mt-4"></div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ChooseYourAddress;