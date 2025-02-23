import React, { useMemo, useState, useCallback } from 'react';
import { Search, Filter } from 'lucide-react';
import { Stream, FilterConfig, SortConfig, ArtistOption } from '../../../types/index';
import { ITEMS_PER_PAGE } from '../../../constants';
import { formatStreams } from '../../../utils/formatters';
import { FilterPanel } from './FilterPanel';
import { TableHeader } from './TableHeader';
import { useDebounce } from '../../../hooks/useDebounce';

interface StreamsTableProps {
  data: Stream[];
}

export const StreamsTable: React.FC<StreamsTableProps> = ({ data }) => {
  // State management for table features
  const [searchTerm, setSearchTerm] = useState('');
  // Debounce search term to prevent excessive re-renders
  const debouncedSearch = useDebounce(searchTerm, 300);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ 
    key: null, 
    direction: null 
  });
  const [filterConfig, setFilterConfig] = useState<FilterConfig>({ 
    artists: [] 
  });
  const [showFilters, setShowFilters] = useState(false);

  // Memoize artist options to prevent recalculation on every render
  const artistOptions: ArtistOption[] = useMemo(() => 
    [...new Set(data.map(stream => stream.artist))]
      .map(artist => ({ value: artist, label: artist }))
  , [data]);

  // Handle sorting with useCallback to maintain referential equality
  const handleSort = useCallback((key: keyof Stream) => {
    setSortConfig(current => ({
      key,
      // Toggle direction if same key, otherwise default to ascending
      direction: current.key === key && current.direction === 'asc' ? 'desc' : 'asc'
    }));
  }, []);

  // Memoize filtered and sorted data to prevent unnecessary recalculations
  const filteredAndSortedData = useMemo(() => {
    let filtered = [...data];

    // Apply search filter
    if (debouncedSearch) {
      const searchLower = debouncedSearch.toLowerCase();
      filtered = filtered.filter(stream =>
        stream.song.toLowerCase().includes(searchLower) ||
        stream.artist.toLowerCase().includes(searchLower) ||
        stream.userId.toLowerCase().includes(searchLower)
      );
    }

    // Apply artist filter
    if (filterConfig.artists.length > 0) {
      filtered = filtered.filter(stream => 
        filterConfig.artists.includes(stream.artist)
      );
    }

    // Apply sorting if sort config is set
    if (sortConfig.key && sortConfig.direction) {
      filtered.sort((a, b) => {
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];
        // Handle numeric vs string sorting
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
        }
        // String comparison for non-numeric values
        return sortConfig.direction === 'asc'
          ? String(aValue).localeCompare(String(bValue))
          : String(bValue).localeCompare(String(aValue));
      });
    }

    return filtered;
  }, [data, debouncedSearch, sortConfig, filterConfig]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredAndSortedData.length / ITEMS_PER_PAGE);
  
  // Memoize paginated data to prevent recalculation during renders
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSortedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSortedData, currentPage]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, filterConfig]);

  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      {/* Search and filter controls */}
      <div className="flex flex-col space-y-4">
        <div className="space-y-3 md:flex md:justify-between md:items-center">
          <h3 className="text-lg font-semibold">Recent Streams</h3>
          <div className="flex space-x-2">
            {/* Search input with icon */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-700 px-4 py-2 rounded-lg pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
            {/* Filter toggle button */}
            <button 
              className={`bg-gray-700 p-2 rounded-lg ${showFilters ? 'bg-gray-600' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Conditional render of filter panel */}
        {showFilters && (
          <FilterPanel
            artistOptions={artistOptions}
            filterConfig={filterConfig}
            onFilterChange={setFilterConfig}
          />
        )}

        {/* Data table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <TableHeader 
              sortConfig={sortConfig}
              onSort={handleSort}
            />
            <tbody>
              {paginatedData.map((stream) => (
                <tr key={stream.id} className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="p-3">{stream.song}</td>
                  <td className="p-3">{stream.artist}</td>
                  <td className="p-3">{stream.date}</td>
                  <td className="p-3">{formatStreams(stream.streams)}</td>
                  <td className="p-3">{stream.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-400">
            Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to{' '}
            {Math.min(currentPage * ITEMS_PER_PAGE, filteredAndSortedData.length)} of{' '}
            {filteredAndSortedData.length} results
          </span>
          <div className="flex space-x-2">
            <button 
              className="px-4 py-2 bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button 
              className="px-4 py-2 bg-red-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};