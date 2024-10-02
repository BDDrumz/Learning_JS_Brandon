import React from "react";
import "../components/Charts.css";
import { Link } from "react-router-dom";

const Charts = () => {
  return (
    <div className="charts-main ">
      <div>
        <h1> Charts</h1>
        <Link className="home" to={"/home"}>
          Home
        </Link>
        <span>/</span>
        <Link className="home" to={"/home"}>
          Plugins
        </Link>
      </div>
      <div className="chart-graph flex flex-wrap m-4 gap-8">
        <div className="  h-80 bg-slate-700" style={{ width: "48%" }}>
          <div className="flex justify-between h-8 border-b-2 bg-slate-300">
            <h3>Bar Chart</h3>
            <h3>Docs</h3>
          </div>
          graph1
        </div>
        <div className="  h-80 bg-slate-600 " style={{ width: "48%" }}>
          <div className="flex justify-between h-8 border-b-2 bg-slate-300">
            <h3>Line Chart</h3>
          </div>
          graph 2
        </div>
        <div className="  h-80 bg-slate-600 " style={{ width: "48%" }}>
          <div className="flex justify-between h-8 border-b-2 bg-slate-300">
            <h3>Doughnut Chart</h3>
            
          </div>
          graph 3
        </div>
        <div className="  h-80 bg-slate-600 " style={{ width: "48%" }}>
          <div className="flex justify-between h-8 border-b-2 bg-slate-300">
            <h3>Pie Chart</h3>
            
          </div>
          graph 4
        </div>
        <div className="  h-80 bg-slate-600 " style={{ width: "48%" }}>
          <div className="flex justify-between h-8 border-b-2 bg-slate-300">
            <h3>Polar Area Chart</h3>
            
          </div>
          graph 5
        </div>
        <div className="  h-80 bg-slate-600 " style={{ width: "48%" }}>
          <div className="flex justify-between h-8 border-b-2 bg-slate-300">
            <h3>Radar Chart</h3>
            
          </div>
          graph 6
        </div>
      </div>
    </div>
  );
};

export default Charts;
