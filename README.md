# Streamify Dashboard

A React-based analytics dashboard for a music streaming service built with TypeScript, React, and TailwindCSS.

## 🚀 Live Demo
[Insert your deployed application URL here]

## 📖 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Performance Optimizations](#performance-optimizations)
- [Testing](#testing)
- [Trade-offs and Future Improvements](#trade-offs-and-future-improvements)

## ✨ Features
- **Real-time Metrics Display**
  - Total Users
  - Active Users
  - Total Streams
  - Revenue
  - Top Artist
- **Interactive Data Visualizations**
  - User Growth Trends
  - Revenue Distribution
  - Top Songs Performance
- **Advanced Table Functionality**
  - Sorting
  - Filtering
  - Search
  - Pagination
- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts
  - Optimized for all screen sizes

## 🛠 Tech Stack
- **React** - UI Library
- **TypeScript** - Type Safety
- **TailwindCSS** - Styling
- **Recharts** - Data Visualization
- **React Testing Library** - Testing
- **Jest** - Testing Framework

## 🏁 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm/yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Mansvini/streamify-dashboard

# Navigate to project directory
cd streamify-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## 📁 Project Structure
```
src/
├── components/         # React components
│   ├── Dashboard/     # Dashboard-related components
│   │   ├── Charts/    # Chart components
│   │   └── Table/     # Table components
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🎨 Design Decisions

### 1. Component Architecture
- **Modular Design**: Each component is self-contained with its own types, styles, and tests

### 2. State Management
- Used React's built-in state management (useState, useContext) as the application's complexity didn't warrant Redux

### 3. Styling Approach
- Used TailwindCSS for rapid development and consistent design
- Implemented a dark theme with red accents for better visibility
- Mobile-first responsive design

## 🚄 Performance Optimizations
- **Code Splitting**: Lazy loading of components
- **Memoization**: Used React.memo for expensive renders
- **Debouncing**: Implemented for search functionality

## 🧪 Testing
- Unit tests for individual components
- Mock data generation for consistent testing
- Test coverage for critical business logic

## ⚖️ Trade-offs and Future Improvements

### Trade-offs Made
1. **Mock Data vs Real API**
  - Used mock data for simplicity
  - Allows offline development

2. **Styling Solution**
  - Chose Tailwind for rapid development
  - Trade-off: Larger HTML classes

### Future Improvements
1. **Data Management**
  - Implement real-time data updates
  - Add data caching
  - Integrate with a backend API

2. **Features**
  - Add more advanced filtering options
  - Implement data export functionality

3. **Testing**
  - Add end-to-end tests
  - Improve test coverage
  - Add performance testing
