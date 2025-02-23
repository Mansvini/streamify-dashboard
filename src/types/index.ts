/**
 * Represents monthly user data for growth charts
 */
export interface MonthlyData {
    /** Month name (e.g., 'Jan', 'Feb') */
    month: string;
    /** Total number of users */
    total: number;
    /** Number of active users */
    active: number;
}

/**
 * Represents revenue distribution data for pie charts
 */
export interface RevenueData {
    /** Revenue source name */
    name: string;
    /** Revenue amount in millions */
    value: number;
}
  
/**
 * Represents a song's streaming data for top songs chart
 */
export interface TopSong {
    /** Song title */
    name: string;
    /** Number of streams */
    streams: number;
}
  
/**
 * Represents a single streaming event
 */
export interface Stream {
    /** Unique identifier for the stream */
    id: number;
    /** Song title */
    song: string;
    /** Artist name */
    artist: string;
    /** Date of stream in ISO format */
    date: string;
    /** Number of streams */
    streams: number;
    /** User identifier */
    userId: string;
}
  
/**
 * Represents an option in artist filter dropdowns
 */
export interface ArtistOption {
    /** Artist identifier */
    value: string;
    /** Display name */
    label: string;
}

export interface SongOption {
    /** Song identifier */
    value: string;
    /** Display name */
    label: string;
}
  
/**
 * Configuration for table sorting
 */
export type SortConfig = {
    /** Column key to sort by */
    key: keyof Stream | null;
    direction: 'asc' | 'desc' | null;
};
  
/**
 * Configuration for table filtering
 */
export type FilterConfig = {
    artists: string[];
    songs: string[];
};