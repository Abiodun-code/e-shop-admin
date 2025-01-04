import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Service Completion Rate (%)',
      data: [25, 40, 35, 30, 40, 30, 40],
      backgroundColor: '#8884d8',
      borderRadius: 5
    },
    {
      label: 'Customer Satisfaction',
      data: [45, 40, 30, 38, 20, 50, 50],
      backgroundColor: '#82ca9d',
      borderRadius: 5
    },
    {
      label: 'Revenue ($)',
      data: [10, 25, 30, 35, 25, 40, 50],
      backgroundColor: '#ffc658',
      borderRadius: 5
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const Metrics = () => {
  return (
    <div className='my-10 mx-4 border rounded-lg border-gray-400'>
      <Bar className='p-6' data={data} options={options} >

      </Bar>
    </div>
  )
};

export default Metrics;