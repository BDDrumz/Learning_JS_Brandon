import React from "react";
import { Link } from "react-router-dom";
import { Search, Menu, Sun, MailOpen, Logs, Bell, Grip } from "lucide-react";
import "./navbar.css";
import "../App.css";
import ToggleButton from "./ToggleBtn";

const Navbartop = ({togglenav}) => {
  return (
    <div className="Navbartop">
      
      <div className="nav-left">
        
        <div className="menu">
          {" "}
          <Menu onClick={togglenav}/>
        </div>
        <div className="searchbar">
          <Search className="iconSearch ml-6" />
          <input type="text" className="searchInput" placeholder="Search" />
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-item flex gap-8 items-center ">
          <Bell className="icon2" />
          <Logs className="icon2" />
          <MailOpen className="icon2" />
        </div>
        <div className="sun">
          {" "}
          <ToggleButton />{" "}
        </div>
        <img src="#" />
        <Grip className="icon2" />
      </div>
      
    </div>
  );
};

export default Navbartop;
