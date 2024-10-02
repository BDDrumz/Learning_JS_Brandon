import React from "react";
import "../App.css";
import "../components/ColorItems";
import { Link } from "react-router-dom";
import colorItems from "./ColorItems";
import "../Colors.css"

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

      <div className="theme-text flex text-center pl-4 m-4 p-2  rounded ">
        Theme Colors
      </div>
      <div className=" flex  theme-div  pl-4 gap-12 h-screen m-4 ">
          <div className="">Theme Colors</div>
          {colorItems.map((color, index) =>
            <div className="" style={{}}>
              <div className="h-40 w-40 rounded " style={{background:color.bg,
            marginTop:"1rem" 
          }}>
            
          </div>
          <div className="themes-text">
          {color.name} <br />
          <h3 className="p-4 border-b-2 " style={{color:"var(--text-color)"}}><span className="" style={{color:"gray"}}>HEX:</span> <span className="p-4">{color.hex} </span><br /></h3>
          <h3 className="p-4 border-b-2"><span className="" style={{color:"grey"}}>RGB:</span> <span className="p-4">{color.rgb}</span></h3>
          </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Colors;
