import React from "react";
import { useEffect } from "react";
import { useState,  } from "react";
import watch from '../../assets/watch.png';

import "./clock.css";
const Clock = () => {
  let day = new Date().getDate();
  let year = new Date().getFullYear();
  let month = new Date().getMonth();
    const [timeNow, settimeNow]= useState(0);
   useEffect(()=>{
setInterval(()=>{   
     let time = new Date().toLocaleTimeString();
     settimeNow(time);
},1000)
   },[]);

  return (
    <div className="clock">
        <div className="inner">
        <h2>{timeNow}</h2>
        <span> {day}-{month+1}-{year}</span>

        </div>
    </div>
  );
};

export default Clock;
