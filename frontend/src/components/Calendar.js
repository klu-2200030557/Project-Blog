// Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

function CalendarControl() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(`Selected date: ${date.toDateString()}`);
  };

  const handlePreviousMonth = () => {
    // Add logic to navigate to the previous month
    // For example, setSelectedDate(prevDate => someLogicToCalculatePreviousMonth(prevDate));
  };

  const handleNextMonth = () => {
    // Add logic to navigate to the next month
    // For example, setSelectedDate(nextDate => someLogicToCalculateNextMonth(nextDate));
  };

  return (
    <div className="calendar-container">
      <div className="calendar-inner">
        <div className="calendar-controls">
          <div className="calendar-prev">
            <a href="#" onClick={handlePreviousMonth}>
              &lt;
            </a>
          </div>
          <div className="calendar-year-month">
            <div className="calendar-month-label">{selectedDate.toLocaleString('default', { month: 'short' })}</div>
            <div>-</div>
            <div className="calendar-year-label">{selectedDate.getFullYear()}</div>
          </div>
          <div className="calendar-next">
            <a href="#" onClick={handleNextMonth}>
              &gt;
            </a>
          </div>
        </div>
        <div className="calendar-today-date">
          Today: {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <div className="calendar-body">
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
      </div>
    </div>
  );
}

export default CalendarControl;
