import { render, screen } from '@testing-library/react';
import { MetricCard } from '../MetricCard';

describe('MetricCard Component', () => {
  const defaultProps = {
    title: 'Total Users' as const,
    value: '2.4M',
    change: '+12.5%'
  };

  it('renders the card with all provided information', () => {
    render(<MetricCard {...defaultProps} />);
    
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('2.4M')).toBeInTheDocument();
    expect(screen.getByText('+12.5%')).toBeInTheDocument();
  });

  it('handles empty change value', () => {
    render(<MetricCard {...defaultProps} change="" />);
    
    expect(screen.getByText('Total Users')).toBeInTheDocument();
    expect(screen.getByText('2.4M')).toBeInTheDocument();
    expect(screen.queryByText('%')).not.toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<MetricCard {...defaultProps} />);
    
    expect(container.firstChild).toHaveClass('bg-gray-900', 'p-4', 'rounded-lg');
    expect(screen.getByText('+12.5%')).toHaveClass('text-green-500', 'text-sm');
  });
});