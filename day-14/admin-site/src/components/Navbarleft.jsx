import React from "react";
import { useState } from "react";
import "./navLeft.css";
import { Link } from "react-router-dom";
import { Gauge } from "lucide-react";
import "../App.css";
import { sidebarItems } from "./sidebar";

const Navbarleft = () => {
  const navItems = sidebarItems;
  // const [Open, setOpen] = useState(false)
  return (
    <div className="sidebar">
      <div className="BD">
        <h1>@BrandonTech</h1>
      </div>
      <Link className="dash" to={"/dashboard"}>
        <Gauge className="icons" />
        Dashboard
      </Link>

      <div className="sidebar_items">
        {sidebarItems.map((sideItem, id) => {
          return (
            <div key={id} className="theme">
              <h3>{sideItem.text}</h3>
              <div>
                <ul>
                  {sideItem.items.map((item, id) => {
                    return (
                      <li key={id}>
                        <Link to={item.Link}>
                          <item.icon />
                          {item.Theme}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}

        {/* {navItems.map((navItem, index) =>
          <div key={index}>
            <div className="text"><p >{navItem.text}</p></div>
            {navItem.items.map((item, idx) =>
              item.dropdown ? {...
          <sidebarItems navItems = { item } key = { idx } />

        } : (
              <sidebarItems sidebarItems={item} key={idx} />
            )
        )}
          </div>
        )} */}
      </div>

      {/*      
      <div className='theme'><p>THEME</p></div>
      <div className='Theme'><Link className="color" to={"/Colors"}><Droplet className='icons' />Colors</Link></div>
      <div className='Theme'><Link className="topo" to={"/Topography"}><Pencil className='icons' />Topograhpy</Link></div>
      <div className='theme'><p>COMPONENTS</p></div>

      <div className='drop-main'  >
      
          <button onClick={() => setOpen((prev) => !prev )} className='base'>
          <Puzzle/>Base 
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
      </div>

      <div className='drop-main'  >
      
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
    </div>
  );
};

export default Navbarleft;
