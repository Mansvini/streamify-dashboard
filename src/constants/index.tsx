import { Icon } from "@iconify/react";
import { MonthlyData, RevenueData, TopSong, Stream } from '../types/index';

export const COLORS: string[] = ['#FF0000', '#a8bbb0', '#ebe8e0'];

export const icons = {
  "Total Users": <Icon icon="ph:users-three-fill" width="40" height="40" />,
  "Active Users": <Icon icon="ph:users-three-duotone" width="40" height="40"/>,
  "Total Streams": <Icon icon="solar:play-stream-line-duotone" width="40" height="40"/>,
  "Revenue": <Icon icon="ph:money-wavy" width="40" height="40"/>,
  "Top Artist": <Icon icon="material-symbols:artist-outline" width="40" height="40"/>
} as const;

export const ITEMS_PER_PAGE = 5;

export const monthlyData: MonthlyData[] = [
  { month: 'Jan', total: 2.4, active: 1.8 },
  { month: 'Feb', total: 2.6, active: 1.9 },
  { month: 'Mar', total: 2.8, active: 2.1 },
  { month: 'Apr', total: 3.1, active: 2.3 },
  { month: 'May', total: 3.5, active: 2.6 },
  { month: 'Jun', total: 4.0, active: 3.0 },
  { month: 'Jul', total: 4.4, active: 3.3 },
  { month: 'Aug', total: 4.7, active: 3.5 },
  { month: 'Sep', total: 4.9, active: 3.6 },
  { month: 'Oct', total: 5.2, active: 3.8 },
  { month: 'Nov', total: 5.6, active: 4.1 },
  { month: 'Dec', total: 6.0, active: 4.5 }
];

export const revenueData: RevenueData[] = [
  { name: 'Subscriptions', value: 3.2 },
  { name: 'Advertisements', value: 1.0 },
  { name: 'Other', value: 0.5 }
];

export const topSongs: TopSong[] = [
  { name: 'Cruel Summer', streams: 2.5 },
  { name: 'Anti-Hero', streams: 2.1 },
  { name: 'Vampire', streams: 1.8 },
  { name: 'Last Night', streams: 1.6 },
  { name: 'Kill Bill', streams: 1.4 }
];

export const recentStreams: Stream[] = [
  { id: 1, song: 'Cruel Summer', artist: 'Taylor Swift', date: '2025-03-15', streams: 1200000, userId: 'USER8391' },
  { id: 2, song: 'Vampire', artist: 'Olivia Rodrigo', date: '2025-03-14', streams: 980000, userId: 'USER4527' },
  { id: 3, song: 'Anti-Hero', artist: 'Taylor Swift', date: '2025-03-14', streams: 850000, userId: 'USER7723' },
  { id: 4, song: 'Kill Bill', artist: 'SZA', date: '2025-03-13', streams: 720000, userId: 'USER9981' },
  { id: 5, song: 'Last Night', artist: 'Morgan Wallen', date: '2025-03-13', streams: 690000, userId: 'USER2245' },
  { id: 6, song: 'Flowers', artist: 'Miley Cyrus', date: '2025-03-12', streams: 650000, userId: 'USER6674' },
  { id: 7, song: 'Rich Flex', artist: 'Drake', date: '2025-03-12', streams: 610000, userId: 'USER3389' },
  { id: 8, song: 'Unholy', artist: 'Sam Smith', date: '2025-03-11', streams: 580000, userId: 'USER5512' },
  { id: 9, song: 'About Damn Time', artist: 'Lizzo', date: '2025-03-11', streams: 550000, userId: 'USER7890' },
  { id: 10, song: 'As It Was', artist: 'Harry Styles', date: '2025-03-10', streams: 520000, userId: 'USER4456' },
];