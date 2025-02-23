import React from 'react';
import { icons } from '../../constants';

interface MetricCardProps {
  title: keyof typeof icons;
  value: string;
  change: string;
}

export const MetricCard: React.FC<MetricCardProps> = React.memo(({ title, value, change }) => (
  <div className="bg-gray-900 p-4 rounded-lg">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-400">{title}</span>
      <span className="text-2xl text-red-600">{icons[title]}</span>
    </div>
    <div className="flex items-baseline justify-between">
      <span className="text-2xl font-bold">{value}</span>
      {change && (
        <span className="text-green-500 text-sm">{change}</span>
      )}
    </div>
  </div>
), (prevProps, nextProps) => {
  return prevProps.value === nextProps.value && 
         prevProps.change === nextProps.change;
});