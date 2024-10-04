import React, { useState } from "react";
import "../components/Calender.css";
import { Link } from "react-router-dom";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Meeting",
    start: new Date(2024, 9, 6, 10, 0),
    end: new Date(2024, 9, 6, 12, 0),
  },
  {
    title: "Lunch",
    start: new Date(2024, 9, 7, 12, 0),
    end: new Date(2024, 9, 7, 13, 0),
  },
];

const Calender = () => {
  return (
    <div className="Calender-main">
      <div>
        <h1> Calender</h1>
        <Link className="home" to={"/home"}>
          Home
        </Link>
        <span>/</span>
        <Link className="home" to={"/home"}>
          Plugins
        </Link>
      </div>
      <div className="Calender-div m-4 ">
        <div className="fullcalender h-8 pl-4">Full Calender</div>
        <div className="Calender ">
          <div style={{ height: "500px" }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 900, padding: '2rem', color:'skyblue'}}
              defaultView="month"
              popup={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
