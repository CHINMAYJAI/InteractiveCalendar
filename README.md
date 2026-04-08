# Interactive Calendar

A modern, interactive calendar application built with React and Vite. Visualize your month, select date ranges, manage notes, and switch between light and dark themes effortlessly.

## Overview

Interactive Calendar is a feature-rich web application designed to help you manage your scheduling and note-taking in style. With an intuitive interface, smooth animations, and persistent storage, it's perfect for planning your days and months ahead.

## Features

- 🗓️ **Interactive Calendar Grid** - Navigate through months with smooth flip animations
- 📅 **Date Range Selection** - Select multiple consecutive days and view statistics
- ✍️ **Comprehensive Notes System** - Add notes for entire months or specific date ranges
- 🌙 **Dark Mode Support** - Toggle between light and dark themes with persistent storage
- ⚡ **Responsive Design** - Works seamlessly on desktop and tablet devices
- 💾 **Local Storage** - All your notes and theme preferences are saved locally
- 🎨 **Modern UI** - Clean, contemporary design with smooth transitions

## Project Structure

```
InteractiveCalendar/
├── client/                          # React + Vite frontend application
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Calendar/           # Calendar components (grid, header, panel)
│   │   │   ├── Hero/               # Hero section with month info
│   │   │   ├── Navbar/             # Navigation bar
│   │   │   ├── Notes/              # Notes panel component
│   │   │   └── ThemeSwitcher/      # Theme toggle component
│   │   ├── pages/
│   │   │   └── CalendarPage.jsx    # Main calendar page layout
│   │   ├── App.jsx                 # Root app component
│   │   └── index.css               # Global styles
│   ├── package.json
│   └── vite.config.js
└── README.md                        # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm package manager

### Installation

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- **`pnpm run dev`** - Start the development server with hot module replacement
- **`pnpm run build`** - Create an optimized production build
- **`pnpm run preview`** - Preview the production build locally

## Usage Guide

### Navigating the Calendar

- Use the month navigation buttons to move between months
- Click the "Today" button to jump to the current month
- The calendar displays the current month with day cells

### Selecting Dates

- Click a date cell to start a date range selection
- Click another date to complete the range
- The hero card displays the number of selected days
- Use the "Reset" button to clear your selection

### Managing Notes

- **Monthly Notes**: Write notes for the entire month in the left panel
- **Range Notes**: When dates are selected, add specific notes for that range
- All notes are automatically saved to local storage

### Theme Switching

- Use the theme switcher button in the navbar
- Toggle between Light and Dark modes
- Your preference is automatically saved

## Technologies Used

- **React 19** - UI library for building interactive components
- **Vite** - Fast build tool and development server
- **CSS3** - Styling with CSS variables for theme support
- **LocalStorage API** - For persisting user data (notes, theme preferences)
- **JavaScript ES6+** - Modern JavaScript features

## Component Architecture

### Core Components

- **CalendarPanel** - Main calendar display with state management
- **CalendarHeader** - Month navigation and header display
- **CalendarGrid** - Grid rendering for calendar days
- **Hero** - Statistics and month information display
- **NotesPanel** - Dual textarea for monthly and range notes
- **Navbar** - Navigation with theme toggle and today button
- **ThemeSwitcher** - Dark/light mode toggle component

### State Management

The application uses React hooks (`useState`, `useEffect`, `useMemo`) for state management with the app-level state passed down to child components via props.

## Styling

The project uses CSS3 with:

- CSS custom properties (variables) for theming
- Smooth animations and transitions
- Responsive design principles
- Dark mode support through `data-theme` attribute

## Features in Detail

### Calendar Grid Logic

- Correctly handles different month lengths and starting days
- Fills empty cells before first day and after last day of month
- Supports date range selection with visual highlighting

### Persistent Storage

- Theme preference saved to localStorage
- Monthly notes stored with `month-note-{year}-{month}` key
- Range notes stored with `range-note-{start}-{end}` key

### Visual Feedback

- Flip animation when navigating between months
- Visual highlighting of selected date ranges
- Smooth theme transitions
- Active state indicators

## Future Enhancements

Potential features for future versions:

- 📱 Mobile app version
- 🔄 Sync across devices
- 📤 Export calendar and notes
- 🏷️ Add tags and categories
- 🔔 Notifications and reminders
- 👥 Collaborative calendars
- 📊 Calendar analytics and insights

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Open source project. Feel free to use, modify, and distribute.

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

---

**Enjoy planning your days with Interactive Calendar! 🗓️**
