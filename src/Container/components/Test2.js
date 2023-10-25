import React from 'react';
import {connect} from "react-redux"

const Test2 = (props) => {
    return (
        <div>

            <h1>count:  {props.count}</h1>

            <button type="submit"  onClick={()=>props.add()}  >++++</button>
            <button type="submit"  onClick={()=>props.sub()}  >----</button>

            
            
        </div>
    );
};

function mapStateToProp (state){
    return{
        count : state.count,
        name : state.name
    }
}

function mapDispatchProps (dispatch){
    return{
        add : ()=>{
            dispatch({type:"ADD"})
        },
        sub : ()=>{
            dispatch({type:"SUB"})
        }
    }
}

export default connect(mapStateToProp,mapDispatchProps)(Test2);