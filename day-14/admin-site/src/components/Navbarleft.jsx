import React from "react";
import { useState } from "react";
import "./navLeft.css";
import { Link } from "react-router-dom";
import { Gauge} from "lucide-react";
import "../App.css";
import { sidebarItems } from "./sidebar";
import Sidebar from "./Sidebar/Sidebar";

const Navbarleft = () => {
  const navItems = sidebarItems;
  // const [Open, setOpen] = useState(false)
  return (
    <div className="sidebar">
      <div className="BD">
        <h1>@BrandonTech</h1>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbarleft;
