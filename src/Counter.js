import React from 'react';
import {useState} from 'react';
import './Counter.css'
const Counter=()=>{
    const[count,setCount]=useState(true); 
    function change(){
        setCount(!count)
        console.log(count)
    }


    return(
        <>
        <div className='Counter'>
            <h1>{count?"true":"false"}</h1>
            <div className={count?"box-white":"box-dark"}>d</div>
            <button className="btn" onClick={change}>dark/white</button>
            


        </div>
        </>
    )
}
export default Counter;