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
      <div className="flex pl-4 gap-12 h-screen m-4 bg-white">
          {colorItems.map((color, index) =>
            <div className="" style={{}}>
              <div className="h-40 w-40 rounded " style={{background:color.bg,
            marginTop:"2rem" 
          }}>
            
          </div>
          <div>
          {color.name} <br />
          <h3 className="p-4 border-b-2 " style={{}}><span className="" style={{color:"gray"}}>HEX:</span> <span className="p-4">{color.hex} </span><br /></h3>
          <h3 className="p-4 border-b-2"><span className="" style={{color:"grey"}}>RGB:</span> <span className="p-4">{color.rgb}</span></h3>
          </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Colors;
