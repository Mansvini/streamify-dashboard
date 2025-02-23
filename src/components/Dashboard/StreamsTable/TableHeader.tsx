import React from 'react';
import { ChevronsUpDown, ChevronUp, ChevronDown } from 'lucide-react';
import { Stream, SortConfig } from '../../../types/index';

interface TableHeaderProps {
  sortConfig: SortConfig;
  onSort: (key: keyof Stream) => void;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ sortConfig, onSort }) => {
  const getSortIcon = (key: keyof Stream) => {
    if (sortConfig.key !== key) return <ChevronsUpDown size={16} className="text-gray-400" />;
    return sortConfig.direction === 'asc' ? 
      <ChevronUp size={16} className="text-white" /> : 
      <ChevronDown size={16} className="text-white" />;
  };

  const headers: { key: keyof Stream; label: string }[] = [
    { key: 'song', label: 'Song Name' },
    { key: 'artist', label: 'Artist' },
    { key: 'date', label: 'Date Streamed' },
    { key: 'streams', label: 'Stream Count' },
    { key: 'userId', label: 'User ID' }
  ];

  return (
    <thead>
      <tr className="border-b border-gray-700">
        {headers.map(({ key, label }) => (
          <th 
            key={key}
            className={`text-left p-3 ${key !== 'userId' ? 'cursor-pointer hover:bg-gray-800' : ''}`}
            onClick={() => key !== 'userId' && onSort(key)}
          >
            <div className="flex items-center space-x-1">
              <span>{label}</span>
              {key !== 'userId' && getSortIcon(key)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};