import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MonthlyData } from '../../../types/index';

interface UserGrowthChartProps {
  data: MonthlyData[];
}

export const UserGrowthChart: React.FC<UserGrowthChartProps> = ({ data }) => {
  // Memoize chart data to prevent unnecessary re-renders
  const chartData = useMemo(() => data, [data]);

  // Custom tooltip formatter to ensure consistent number formatting
  const formatTooltip = (value: number) => `${value}M`;

  // Custom Y-axis label component for better positioning
  const YAxisLabel = {
    value: 'Users (M)',
    angle: -90,
    position: 'insideLeft',
    style: {
      fill: '#fff',
      textAnchor: 'middle'
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">User Growth</h3>
      {/* ResponsiveContainer ensures the chart scales with its container */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          {/* Grid lines for better readability */}
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          
          {/* X-axis configuration for better label visibility */}
          <XAxis 
            dataKey="month" 
            stroke="#fff" 
            angle={-45}
            textAnchor="end"
            height={60}
            interval={0}
            tick={{ fill: '#fff' }} 
          />
          
          {/* Y-axis with custom label and formatting */}
          <YAxis 
            stroke="#fff"
            label={YAxisLabel}
            tickFormatter={(value) => `${value}M`}
          />
          
          {/* Tooltip with custom styling and formatting */}
          <Tooltip 
            contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
            labelStyle={{ color: '#fff' }}
            formatter={formatTooltip}
          />
          
          <Legend />
          
          {/* Data lines with different styles for clarity */}
          <Line 
            type="monotone" 
            dataKey="total" 
            stroke="#ff0000" 
            name="Total Users"
            strokeWidth={2}
            dot={{ fill: '#ff0000' }}
          />
          <Line 
            type="monotone" 
            dataKey="active" 
            stroke="#a8bbb0" 
            name="Active Users"
            strokeWidth={2}
            dot={{ fill: '#a8bbb0' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};