import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: '40px', margin: 'auto' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={8}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathTransitionDuration: 0.5,
          pathColor: `#56429C`, 
          textColor: 'white', 
          trailColor: 'gray',
          backgroundColor: '#2D353F', 
        })}
      />
    </div>
  );
};

export default ProgressBar;
