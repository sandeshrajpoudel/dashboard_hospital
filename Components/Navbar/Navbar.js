import React from "react";
import "./navbar.css";
import {
  MdOutlineEditNotifications,
  MdManageSearch,
  MdSettings,
  
} from "react-icons/md";
import Profile from "../../assets/profile.png";
import { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Navbar = () => {
  const [sideNav, setsideNav] = useState(false);
  return (
    <div className="main">
     
      <div className="intro">
        Hi Admin,&nbsp;
        <span>Welcome to Dashboard...</span>
      </div>
      
      <div className="search">
        <input type="text" placeholder="Search..." />
        <span><MdManageSearch/></span>
      </div>

      <div className="navbar">
        <MdOutlineEditNotifications title="Notifications" />
        <MdSettings title="settings" />
        <div className="profile">
          <img src={Profile} alt="pp" title="Profile" />
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
