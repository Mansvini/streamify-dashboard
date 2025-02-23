import React from 'react';
import Select, { MultiValue, StylesConfig } from 'react-select';
import { ArtistOption, FilterConfig } from '../../../types/index';

interface FilterPanelProps {
  artistOptions: ArtistOption[];
  filterConfig: FilterConfig;
  onFilterChange: (newConfig: FilterConfig) => void;
}

const selectStyles: StylesConfig<ArtistOption, true> = {
  control: (base) => ({
    ...base,
    background: '#374151',
    borderColor: '#4B5563',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#6B7280',
    },
  }),
  menu: (base) => ({
    ...base,
    background: '#374151',
    border: '1px solid #4B5563',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#4B5563' : 'transparent',
    '&:hover': {
      backgroundColor: '#4B5563',
    },
    color: 'white',
  }),
  multiValue: (base) => ({
    ...base,
    backgroundColor: '#4B5563',
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: 'white',
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: 'white',
    '&:hover': {
      backgroundColor: '#6B7280',
      color: 'white',
    },
  }),
  input: (base) => ({
    ...base,
    color: 'white',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#9CA3AF',
  }),
};

export const FilterPanel: React.FC<FilterPanelProps> = ({
  artistOptions,
  filterConfig,
  onFilterChange
}) => (
  <div className="flex space-x-4 bg-gray-800 p-4 rounded-lg">
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-gray-400">Artists</label>
      <Select
        isMulti
        options={artistOptions}
        value={filterConfig.artists.map(artist => ({ value: artist, label: artist }))}
        onChange={(newValue: MultiValue<ArtistOption>) => {
          onFilterChange({
            ...filterConfig,
            artists: newValue.map(option => option.value)
          });
        }}
        className="w-64"
        placeholder="Select artists..."
        styles={selectStyles}
        isClearable={true}
      />
      <span className="text-xs text-gray-400">
        {filterConfig.artists.length === 0 
          ? "All Artists" 
          : `${filterConfig.artists.length} artist${filterConfig.artists.length === 1 ? '' : 's'} selected`}
      </span>
    </div>
  </div>
);