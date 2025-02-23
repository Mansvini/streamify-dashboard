import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TopSong } from '../../../types/index';

interface TopSongsChartProps {
  data: TopSong[];
}

export const TopSongsChart: React.FC<TopSongsChartProps> = ({ data }) => (
  <div className="bg-gray-900 p-4 rounded-lg md:col-span-3 lg:col-span-1">
    <h3 className="mb-4">
      <span className="text-lg font-semibold">Top 5 Streamed Songs</span>
      <span className="text-sm ml-2">{`(Last 30 Days)`}</span>
    </h3>
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
        <XAxis 
          dataKey="name" 
          stroke="#fff" 
          angle={-90}
          textAnchor="end"
          height={120}
          interval={0}
          tick={{ fill: '#fff' }} 
        />
        <YAxis 
          stroke="#fff" 
          label={{ 
            value: 'Streams (M)', 
            angle: -90, 
            position: 'insideLeft',
            style: { 
              fill: '#fff',
              textAnchor: 'middle' 
            }
          }} 
        />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
          labelStyle={{ color: '#fff' }}
          formatter={(value: number) => [`${value}M`, 'Streams']}
        />
        <Bar dataKey="streams" fill="#ff0000" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);