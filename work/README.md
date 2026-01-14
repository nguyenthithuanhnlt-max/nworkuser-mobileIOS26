# Work Tab - Mobile UI Implementation

This folder contains the mobile UI implementation for the Work tab of the N Quốc application.

## Structure

- `index.html` - Main HTML structure with all views
- `style.css` - iOS 26 design system styling
- `script.js` - JavaScript for navigation and interactions

## Views

### 1. Work Dashboard (Landing Page)
- Summary cards for Tasks, Meetings, and Calendar
- Quick access to each section
- Floating action button for creating new items

### 2. Tasks View
- Segmented control: My Tasks | By Project
- Quick filters: Today, This Week, All
- Task cards grouped by status (TODO, DOING, DONE)
- Priority indicators and metadata

### 3. Calendar View
- View toggle: List | Day | Week
- Date navigator
- Event cards with meeting badges
- Quick join buttons for active meetings

### 4. Meetings View
- Filter tabs: All, Today, Upcoming, Finished
- Meeting cards with status indicators
- Join Now buttons for active meetings
- Platform icons (Zoom, Teams, Google Meet)

## Design System

Follows iOS 26 design standards:
- SF Pro font family
- System colors with dark mode support
- Glassmorphism effects
- 8pt grid system
- Safe area insets
- Touch-friendly targets (44pt minimum)

## Features

- ✅ Responsive layout
- ✅ Dark mode support
- ✅ Smooth transitions
- ✅ Touch-optimized interactions
- ✅ Floating action button
- ✅ Segmented controls
- ✅ Filter pills
- ⏳ Modal dialogs (TODO)
- ⏳ API integration (TODO)
- ⏳ Real-time sync (TODO)

## Usage

Open `index.html` in a mobile browser or simulator to view the interface.

## Next Steps

1. Implement modal dialogs for task/meeting/event details
2. Add create/edit forms
3. Integrate with backend API
4. Add real-time synchronization
5. Implement offline support
6. Add animations and transitions
