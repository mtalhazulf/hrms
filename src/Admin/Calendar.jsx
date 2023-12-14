import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendarr = () => {
  const [value, onChange] = useState(new Date());

  const customTileClassName = ({ date, view }) => {
    if (view === 'month' && date.toDateString() === value.toDateString()) {
      return 'selected-date';
    }
    return null;
  };

  return (
    <div className="bg-transparent">
        <Calendar onChange={onChange} value={value} tileClassName={customTileClassName} className="bg-transparent border-none text-white hover:bg-transparent" />
    </div>
  );
};

export default Calendarr;
