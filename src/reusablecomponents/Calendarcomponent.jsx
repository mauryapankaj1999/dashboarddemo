import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Searchbar from "./Searchbar";
import MeetingCard from "./MeetingCard";
export default function Calendarcomponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [search, setSearch] = useState("");

  const getFiveDays = () => {
    const days = [];
    for (let i = -2; i <= 2; i++) {
      const d = new Date(selectedDate);
      d.setDate(selectedDate.getDate() + i);
      days.push(d);
    }
    return days;
  };

  const prevDay = () => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() - 1);
    setSelectedDate(d);
  };

  const nextDay = () => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() + 1);
    setSelectedDate(d);
  };
  return (
    <>
      <div className="calendar-card">
        <div className="calendar-header">
          <div className="nav-buttons">
            <button onClick={prevDay}>‹</button>
            <h3>
              {selectedDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h3>
            <button onClick={nextDay}>›</button>
          </div>
        </div>

        <div className="days-row">
          {getFiveDays().map((day, index) => {
            const isActive = day.toDateString() === selectedDate.toDateString();

            return (
              <div
                key={index}
                className={`day-box ${isActive ? "active" : ""}`}
                onClick={() => setSelectedDate(day)}
              >
                <span className="day-name">
                  {day.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span className="day-number">{day.getDate()}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-4">
        <Searchbar value={search} onChange={setSearch} />
      </div>

      <MeetingCard />
    </>
  );
}
