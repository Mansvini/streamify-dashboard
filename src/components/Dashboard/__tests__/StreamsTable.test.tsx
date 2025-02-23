import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StreamsTable } from '../StreamsTable';

// Create more mock data to test pagination
const mockData = [
  { id: 1, song: 'Cruel Summer', artist: 'Taylor Swift', date: '2025-03-15', streams: 1200000, userId: 'USER8391' },
  { id: 2, song: 'Vampire', artist: 'Olivia Rodrigo', date: '2025-03-14', streams: 980000, userId: 'USER4527' },
  { id: 3, song: 'Anti-Hero', artist: 'Taylor Swift', date: '2025-03-14', streams: 850000, userId: 'USER7723' },
  { id: 4, song: 'Kill Bill', artist: 'SZA', date: '2025-03-13', streams: 720000, userId: 'USER9981' },
  { id: 5, song: 'Last Night', artist: 'Morgan Wallen', date: '2025-03-13', streams: 690000, userId: 'USER2245' },
  { id: 6, song: 'Flowers', artist: 'Miley Cyrus', date: '2025-03-12', streams: 650000, userId: 'USER6674' }
];

describe('StreamsTable Component', () => {
  const renderTable = () => render(<StreamsTable data={mockData} />);

  it('renders table with correct headers', () => {
    renderTable();
    
    expect(screen.getByText('Song Name')).toBeInTheDocument();
    expect(screen.getByText('Artist')).toBeInTheDocument();
    expect(screen.getByText('Date Streamed')).toBeInTheDocument();
    expect(screen.getByText('Stream Count')).toBeInTheDocument();
    expect(screen.getByText('User ID')).toBeInTheDocument();
  });

  it('displays the correct number of rows per page', () => {
    renderTable();
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(6);
  });

  it('filters data based on search input', async () => {
    renderTable();
    const searchInput = screen.getByPlaceholderText('Search...');
    
    await userEvent.type(searchInput, 'Taylor');
    
    await waitFor(() => {
      expect(screen.getAllByRole('row').length).toBe(3); // 2 Taylor Swift songs + header
      expect(screen.queryByText('Vampire')).not.toBeInTheDocument();
    });
  });

  it('sorts data when clicking on column headers', async () => {
    renderTable();
    const artistHeader = screen.getByText('Artist');
    
    // First click - sort ascending
    fireEvent.click(artistHeader);
    
    let rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('Miley Cyrus');
    
    // Second click - sort descending
    fireEvent.click(artistHeader);
    
    rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('Taylor Swift');
  });

  it('handles pagination correctly', () => {
    renderTable();
    const nextButton = screen.getByText('Next');
    const prevButton = screen.getByText('Previous');
    
    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeEnabled(); 
    
    fireEvent.click(nextButton);
    expect(prevButton).toBeEnabled();
  });

  it('formats stream counts correctly', () => {
    renderTable();
    expect(screen.getByText('1.2M')).toBeInTheDocument();
    expect(screen.getByText('980.0K')).toBeInTheDocument();
  });
});