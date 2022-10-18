import React from 'react';
import './user.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import Profile from '../../assets/profile.png'


const User = (props) => {
  return (
    <div className="Card">
  
      <div className="list">
        <div className="listwrapper">
          <img src={props.profile} alt="PP"/>
        <div className="user">
          {props.name} 
          <span>{props.expertise}</span>
        </div>
        </div>
        <div className='dotsvertical'>
        <BsThreeDotsVertical/>

        </div>

      </div>
    </div>
  )
}

export default User;
