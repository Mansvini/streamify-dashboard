import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { RevenueData } from '../../../types/index';
import { COLORS } from '../../../constants';

interface RevenueChartProps {
  data: RevenueData[];
}

/**
 * RevenueChart Component
 * 
 * A donut chart visualization showing the distribution of revenue across different sources.
 * Uses recharts library for rendering and supports responsive sizing.
 * 
 * @param {RevenueData[]} data - Array of revenue data objects with name and value
 */
export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => (
  <div className="bg-gray-900 p-4 rounded-lg">
    <h3 className="text-lg font-semibold mb-4">Revenue Distribution</h3>
    {/* ResponsiveContainer ensures the chart scales with its parent container */}
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        {/* Configure the donut chart with custom radius and padding */}
        <Pie
          data={data}
          cx="50%" // Center horizontally
          cy="50%" // Center vertically
          innerRadius={90} // Creates donut hole
          outerRadius={110} // Defines outer edge
          paddingAngle={5} // Spacing between segments
          dataKey="value" // Property to use for segment size
        >
          {/* Map data to colored segments using the COLORS array */}
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* Custom tooltip styling for dark theme */}
        <Tooltip 
          contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
          itemStyle={{ color: 'white' }}
          formatter={(value: number) => `$${value}M`} // Format values as currency
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);