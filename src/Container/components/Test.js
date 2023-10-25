import React, { useState } from 'react';
import {connect} from "react-redux"
import { useHistory } from 'react-router-dom';



const Test = (props) => {

  
   let history = useHistory()

   const goto = ()=>{
       history.push('/test2')
   }

 
    
    return (
        <div>

            <h1>this is count : {props.count} </h1>
           
             <h1>my name is {props.name[0]} </h1>
            <br />

          
          
             <button onClick={goto} >next</button>

        </div>
    );
};

function mapStateToProp (state){
    return{
        count : state.count,
        name : state.name
    }
}


export default connect(mapStateToProp)(Test);