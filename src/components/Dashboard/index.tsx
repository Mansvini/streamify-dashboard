import React from 'react';
import { MetricCard } from './MetricCard';
import { UserGrowthChart } from './Charts/UserGrowthChart';
import { RevenueChart } from './Charts/RevenueChart';
import { TopSongsChart } from './Charts/TopSongsChart';
import { StreamsTable } from './StreamsTable';
import { monthlyData, revenueData, topSongs, recentStreams } from '../../constants';

const Dashboard: React.FC = () => {
  const metrics = [
    { title: "Total Users" as const, value: "2.4M", change: "+12.5%" },
    { title: "Active Users" as const, value: "1.8M", change: "+8.2%" },
    { title: "Total Streams" as const, value: "12.5M", change: "+15.7%" },
    { title: "Revenue" as const, value: "$4.2M", change: "+18.3%" },
    { title: "Top Artist" as const, value: "Taylor Swift", change: "" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-600">Streamify</span>
        </div>
        <button className="px-4 py-2 bg-red-600 rounded hover:bg-red-700">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.title}
              title={metric.title}
              value={metric.value}
              change={metric.change}
            />
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Growth Chart */}
          <UserGrowthChart data={monthlyData} />

          {/* Revenue Chart */}
          <RevenueChart data={revenueData} />

          {/* Top Songs Chart */}
          <TopSongsChart data={topSongs} />
        </div>

        {/* Streams Table */}
        <StreamsTable data={recentStreams} />
      </main>
    </div>
  );
};

export default Dashboard;