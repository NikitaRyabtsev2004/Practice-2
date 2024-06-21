import React, { useState } from "react";
import "../styles/App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../assets/calendar.svg";

const WidgetForm = ({
  backgroundColor = "#4A90E2",
  buttonColor = "#F5A623",
  textColor = "white",
}) => {
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  return (
    <div className="widget-container" style={{ backgroundColor }}>
      <h1 style={{ color: textColor }}>
        Where does it come from? Why do we use it?
      </h1>
      <div className="text-and-iab">
        <div className="text">
          <p style={{ color: textColor }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="input-and-button">
          <div className="input-container">
            <div className="input-main">
              <div className="input-wrapper">
                <input type="text" placeholder="Depart date" />
                <img src={calendarIcon} alt="Calendar icon" />
              </div>
              <div className="input-wrapper">
                <input type="text" placeholder="Return date" />
                <img src={calendarIcon} alt="Calendar icon" />
              </div>
            </div>
          </div>
          <button
            className="button-search"
            style={{ backgroundColor: buttonColor, color: textColor }}
          >
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetForm;
