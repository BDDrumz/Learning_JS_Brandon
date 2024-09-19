import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import "../App.css";
import { CategoryScale } from "chart.js";
import { Chart, registerables } from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import {
  UsersRound,
  ShoppingCart,
  MoveDown,
  MoveUp,
  UserRoundPlus,
  Users,
  EllipsisVertical,
} from "lucide-react";
import Data from "./profile-data";
Chart.register(CategoryScale, ...registerables);
function Index() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Dec",
    ],
    datasets: [
      {
        label: "Users",
        data: [75, 78, 79, 48, 30, 15, 40, 80, 74, 24, 100],
        backgroundColor: "skyblue",
        borderColor: "black",
        borderWidth: 0.3,
        tension: 0.1,
      },
      {
        label: "New Users",
        date: [75, 78, 79, 45, 30, 19, 45, 90, 70, 25, 15, 100],
        backgroundColor: "blue",
        borderColor: "green",
        borderWidth: 0.3,
        tension: 0.1,
      },
    ],
  };
  const data_2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Datasets",
        data: [70, 73, 68, 63, 65],
        fill: true,
        borderColor: "rgb(75,192,192)",
        tension: 0.1,
      },
      {
        label: "New Users",
        date: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgb(1, 183, 255)",
        borderColor: "white",
        borderWidth: 0.3,
        fill: true,
        tension: 0.1,
      },
    ],
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
    <div className="dashboard-main">
      <div>
        <h1> Dashboard</h1>
        <Link className="home" to={"/home"}>
          Home{" "}
        </Link>
      </div>
      <div className="sale-main">
        <div className="sale-left">
          <div className="s-left1">
            <h3> Sale</h3>
            <p>January - July 2023</p>
            <div>
              {" "}
              <Line data={data_2} options={options} />
            </div>
          </div>

          <div className="s-left2">
            <div className="s-left3">
              <div className="left-icons-main">
                <p>Customers</p>
                <UsersRound className="left-icons" />
              </div>
              <h3 className="left-text">44.725</h3>
              <p className="left-text1">
                (-12.4% <MoveDown className="arrows" />)
              </p>
            </div>
            <div className="s-left4">
              <div className="left-icons-main">
                {" "}
                <p>Orders </p>
                <ShoppingCart className="left-icons" />
              </div>
              <h3 className="left-text">385</h3>
              <p className="left-text2">
                (17.2% <MoveUp className="arrows" />){" "}
              </p>
            </div>
          </div>
        </div>
        <div className="sale-right">
          <h3>Traffic</h3>
          <p>January 01, 2023 - December 31, 2023</p>
          <div className="bar-graph">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>

      <div className="users-main">
        <div className="users-left">
          <div className="users">
            <div>
              {" "}
              <h2>Users</h2>
              <p>1.232.150 registered users</p>
            </div>
            <div>
              <button className="btn_add">
                {" "}
                <UserRoundPlus className="add_btn" />
                Add New User
              </button>
            </div>
          </div>
          <div className="users-main-profile">
            <div className="profile-head">
              <div style={{ width: "1px" }}>
                <Users />
              </div>
              <div style={{ width: "160px", marginLeft: "-50px" }}>
                <h3>User</h3>
              </div>
              <div style={{ width: "0px" }}>
                <h3>Country</h3>
              </div>
              <div style={{ width: "100px" }}>
                <h3>Usage</h3>
              </div>
              <div>
                <h3>Activity</h3>
              </div>
            </div>
            {Data.map((profile, index) => (
              <div
                className="profile-info"
                key={index}
                style={{ marginTop: ".5rem" }}
              >
                <div style={{ width: "5px" }}>
                  <img
                    src={profile.pic}
                    style={{
                      width: "50px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ width: "230px", marginLeft: "-53px" }}>
                  <b>{profile.name}</b>
                  <div>
                    {profile.type} <span>{profile.registered}</span>
                  </div>
                </div>
                <div
                  className="countyImg"
                  style={{ width: "100px", marginLeft: "-68px" }}
                >
                  {<img src={profile.country} style={{ width: "30px" }} />}
                </div>
                <div
                  className="percent"
                  style={{ width: "100px", marginLeft: "-100px" }}
                >
                  {profile.usage}
                  <div className="register">{profile.registered}</div>
                  <div className="percent_bar"></div>
                </div>
                <div>
                  <p>{profile.last}</p>
                  <h3>{profile.activity}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="users-right">
          <div className="users-num">
            <div className="users-num-info">
              <p>
                h3(-12.4% <MoveDown className="arrows" />)
              </p>
              <EllipsisVertical />
            </div>
            <span>Users</span>
          </div>
          <div className="conversation">Conversations</div>
          <div className="sessions">Sessions</div>
        </div>
      </div>
      <div className="traffic-main">
        <div className="traffic">traffic</div>
      </div>
    </div>
  );
}

export default Index;
