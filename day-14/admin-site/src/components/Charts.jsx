import React from "react";
import "../components/Charts.css";
import { Link } from "react-router-dom";
import { Bar, Line, Pie, Doughnut, Chart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Data",
        data: [100, 17, 58, 30, 58, 95, 87],
        backgroundColor: "transparent",
        borderColor: "skyblue",
        fill: true,
        borderWidth: 2,
      },
      {
        label: "My First Data",
        data: [43, 61, 74, 21, 43, 87, 97],
        backgroundColor: "transparent",
        borderColor: "blue",
        fill: true,
        borderWidth: 2,
      },
    ],
  };
  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Data",
        data: [100, 40, 20, 15, 38, 10, 40, 38],
        backgroundColor: "rgb(214, 88, 88)",
        borderColor: "transparent",
        fill: true,
        borderWidth: 2,
      },
    ],
  };
  const data3 = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Red",
        Data: [300, 50, 100],
        backgroundColor: ["red", "blue", "yellow"],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "pie",
    data: data3,
  };

  const options = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        type: "linear",
      },
    },
  };
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
        <div className="chart h-fit" style={{  }}>
          <div className=" flex justify-between items-center p-4 h-8 border-b-2 bg-stone-400">
            <h3>Bar Chart</h3>
            <h3>Docs</h3>
          </div>
          <div className="p-4">
            <Bar data={data1} options={options} />
          </div>
        </div>
        <div className="chart h-fit  " style={{  }}>
          <div className=" flex items-center p-4 h-8 border-b-2 bg-stone-400">
            <h3>Line Chart</h3>
          </div>
          <div className="p-4">
            <Line data={data} options={options} />
          </div>
        </div>
        <div className="chart h-fit " style={{  }}>
          <div className="flex items-center p-4 h-8 border-b-2 bg-stone-400">
            <h3>Doughnut Chart</h3>
          </div>
          <div className="p-4">
            <DoughnutChart />
          </div>
        </div>
        <div className="chart h-full  " style={{  }}>
          <div className="flex items-center p-4 h-8 border-b-2 bg-stone-400">
            <h3>Pie Chart</h3>
          </div>
          <div className="p-4">
            <PieChart />
          </div>
        </div>
        <div className="chart  h-full " style={{ }}>
          <div className="flex items-center p-4 h-8 border-b-2 bg-stone-400">
            <h3>Polar Area Chart</h3>
          </div>
          <div>
            Polar Chart here
          </div>
        </div>
        <div className="chart  h-ful  " style={{ width: "48%" }}>
          <div className="flex items-center p-4 h-8 border-b-2 bg-stone-400">
            <h3>Radar Chart</h3>
          </div>
          Radar Chart here
        </div>
      </div>
    </div>
  );
};


// component for the bar chart

// component for the line chart 


// component for the pie chart
const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My first dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "pie",
    data: data,
  };

  return (
    <div className="w-90 h-90">
      <Pie data={data} />
    </div>
  );
};

// component for the doughnut chart
const DoughnutChart = () => {
  const data = {
    labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
    datasets: [
      {
        label: "My first dataset",
        data: [100, 30, 300, 20,],
        backgroundColor: [
          "green",
          "red",
          "skyblue",
          "brown",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
  };

  return (
    <div className="w-90 h-90">
      <Doughnut data={data} />
    </div>
  );
};
//component for the polar Chart chart
// const PolarChart = () => {
//   const data = React.useMemo(
//   ()=> [
//     {
//       label:"Series 1" ,
//       data:[
//         [ 0,10 ],
//         [1.20],
//         [2.30],
//         [3,40],
//         [4,50],
//       ],
//     },
//   ],[]
//   );
  
//   const axes = React.useMemo(
//     ()=>[
//       {primary:true, type:'linear',
//         position:'bottom'
//       },
//       {
//         type:'linear', position:'left'
//       },
//     ],
//     []
//   );

//   return (
//     <div className="w-90 h-90">
//       <Chart data={data} axes={axes} />
//     </div>
//   );
// };

export default Charts;
