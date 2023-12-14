import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineController, PointElement, LineElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineController, PointElement, LineElement);

const Project = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Line 1',
        data: [5, 10, 15, 20, 25, 15, 10, 20, 25, 30, 22, 18], // Adjusted values between 1 and 30
        borderColor: '#5F8EAE',
        backgroundColor: 'rgba(128, 0, 128, 0.2)',
      },
      {
        label: 'Line 2',
        data: [10, 15, 10, 25, 30, 22, 18, 28, 35, 40, 32, 27], // Adjusted values between 1 and 30
        borderColor: '#6467A3',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Months',
          color: 'white',
          fontSize: 16,
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Dates',
          color: 'white',
          fontSize: 16,
        },
        ticks: {
          color: 'white',
          suggestedMin: 0,
          suggestedMax: 30,
          precision: 0,
          stepSize: 5,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className='w-[60%] bg-[#2D353F] flex flex-col items-start justify-center p-4 rounded-md'>
        <p className='text-white text-md mb-2'>Project Deliveries</p>
    <div className='w-full h-48'>
      <Line data={data} options={options} />
    </div>
    </div>
  );
};

export default Project;
