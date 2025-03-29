import React, { useState, useEffect, useRef } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { getDashboardData } from '../services/api'; // Importing the new API service

// Import required components from chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Register required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const chartRef = useRef(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const result = await getDashboardData();
        setDashboardData(result.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);

  useEffect(() => {
    // Destroy the chart before re-creating it to avoid the "Canvas is already in use" error
    if (chartRef.current) {
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    }
  }, [dashboardData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin border-t-blue-500"></div>
      </div>
    );
  }

  const { income, expenses, budget } = dashboardData;

  // Bar chart data for Income, Expenses, and Budget
  const barChartData = {
    labels: ['Income', 'Expenses', 'Budget'],
    datasets: [
      {
        label: 'Amount in $',
        data: [income, expenses, budget],
        backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        borderColor: ['#28a745', '#dc3545', '#ffc107'],
        borderWidth: 1,
      },
    ],
  };

  // Doughnut chart data for the overall financial situation
  const doughnutChartData = {
    labels: ['Income', 'Expenses', 'Remaining Budget'],
    datasets: [
      {
        label: 'Financial Overview',
        data: [income, expenses, budget],
        backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
        borderColor: ['#28a745', '#dc3545', '#ffc107'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
      <div className="flex justify-between mb-6">
        <div className="w-1/3">
          <h3 className="font-semibold">Income</h3>
          <p>${income}</p>
        </div>
        <div className="w-1/3">
          <h3 className="font-semibold">Expenses</h3>
          <p>${expenses}</p>
        </div>
        <div className="w-1/3">
          <h3 className="font-semibold">Budget</h3>
          <p>${budget}</p>
        </div>
      </div>

      <div className="flex justify-around mt-4">
        <div className="mb-6" style={{ height: '300px', width: '300px' }}>
          <h3 className="font-semibold mb-2">Income, Expenses, and Budget</h3>
          <Bar
            ref={chartRef} // Attach the chart ref here
            data={barChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
            height={200}
            width={300}
          />
        </div>

        <div className="mb-6" style={{ height: '300px', width: '300px' }}>
          <h3 className="font-semibold mb-2">Financial Overview</h3>
          <Doughnut
            ref={chartRef} // Attach the chart ref here
            data={doughnutChartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
