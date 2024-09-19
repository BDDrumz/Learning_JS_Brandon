import React from "react";
import { useState } from "react";
import "./navLeft.css";
import { Link } from "react-router-dom";
import {
  Gauge,
  Droplet,
  Pencil,
  Puzzle,
  ChevronDown,
  ChevronUp,
  Circle,
  Send,
} from "lucide-react";
import Accodion from "./Accodion";
import "../App.css";

const Navbarleft = () => {
  const [Open, setOpen] = useState(false);
  return (
    <nav>
      <div className="BD">
        <h1>@BrandonTech</h1>
      </div>
      <Link className="dash" to={"/dashboard"}>
        <Gauge className="icons" />
        Dashboard
      </Link>
      <div className="theme">
        <p>THEME</p>
      </div>
      <div className="Theme">
        <Link className="color" to={"/Colors"}>
          <Droplet className="icons" />
          Colors
        </Link>
      </div>
      <div className="Theme">
        <Link className="topo" to={"/Topography"}>
          <Pencil className="icons" />
          Topograhpy
        </Link>
      </div>
      <div className="theme">
        <p>COMPONENTS</p>
      </div>

      <div className="drop-main">
        <button onClick={() => setOpen((prev) => !prev)} className="base">
          <Puzzle />
          Base
          {!Open ? (
            <ChevronDown className="drop-icon" />
          ) : (
            <ChevronUp className="drop-icon" />
          )}
        </button>
        {Open && (
          <div className="drop-items">
            <Link to={"/Accodion"} className="links">
              {" "}
              <Circle className="circle" />
              Accodion{" "}
            </Link>
          </div>
        )}
      </div>

      {/* <div className='drop-main'  >
      
          <button onClick={() => setOpen((prev) => !prev )} className='button'>
          <Send className='send' />Buttons 
          {!Open ? (
            <ChevronDown className='drop-icon' />
          ):(
            <ChevronUp className='drop-icon'/>
          )}
          </button>
          {Open && (
            <div className='drop-items'>
              <Link to={'/Accodion'} className='links'> <Circle className='circle'/>Accodion </Link>
            </div>
          )}
      </div> */}
    </nav>
  );
};

export default Navbarleft;
