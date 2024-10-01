import React from "react";
import "./navLeft.css";
import "../App.css";
import { sidebarItems } from "./sidebar";
import Sidebar from "./Sidebar/Sidebar";

const Navbarleft = ({opennav}) => {
  const navItems = sidebarItems;
  return (
    <div className={`sidebar ${opennav ? 'open':'close'}`}>
      <div className="BD">
        <h1>@BrandonTech</h1>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbarleft;
