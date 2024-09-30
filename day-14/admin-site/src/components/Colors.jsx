import React from "react";
import "../App.css";
import "../Colors.css";
import { Link } from "react-router-dom";
import colorItems from "./Colors";

const Colors = () => {
  return (
    <div className="colors-main">
      <div>
        <h1> Colors</h1>
        <Link className="home" to={"/home"}>
          Home
        </Link>
        <span>/</span>
        <Link className="home" to={"/home"}>
          Theme
        </Link>
      </div>

      <div className="flex text-center m-4 p-1  rounded bg-slate-200">
        Theme Colors
      </div>
      <div className="flex pl-4 gap-14 h-screen m-4 bg-white">
          {colorItems.map((color, index) =>
            <div className="" style={{}}>
              <div className="h-40 w-40 rounded " style={{background:color.bg,
            marginTop:"2rem" 
          }}>
            
          </div>
          <div>
          {color.name} <br />
          <h3>HEX:{color.hex} <br /></h3>
          <h3>RGB:{color.rgb}</h3>
          </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Colors;
