# Mobile UI Shared Structure (iOS 26 Standard)

This document defines the standard mobile UI structure for NQuoc products, ensuring consistency and alignment with the iOS 26 design system.

## 1. Core Layout Structure
The standard mobile app layout consists of three fixed layers:

### A. Top Bar (Header)
*   **Structure**: A clean top row containing metadata and profile actions.
*   **Left Element**: `Date Display` or `Back Button`.
    *   *Style*: Small CAPS, System Gray (`#8E8E93`), Semibold (`600`), 13px.
*   **Right Element**: `User Avatar` or `Action Icon`.
    *   *Style*: Circle (36px), Gray placeholder or Image.
*   **Large Title**: Situated below the top row.
    *   *Style*: SF Pro Display, Bold (`800`), 32px+, Primary Text Color.

### B. Content Area (Scrollable)
*   **Container**: `.content-scroll`
*   **Padding**:
    *   Top: Safe Area Top (`env(safe-area-inset-top)`).
    *   Bottom: Tab Bar Height + Spacing (~90px).
*   **Background**: `SystemGroupedBackground` (Light: `#F2F2F7`, Dark: `#000000`).

### C. Bottom Tab Bar (Navigation)
*   **Type**: Full-width Glassmorphism Bar (Standard iOS).
*   **Height**: 49px + Safe Area Bottom.
*   **Style**:
    *   Background: `rgba(249, 249, 249, 0.94)` with `backdrop-filter: blur(20px)`.
    *   Border: Top hairline (`0.5px solid rgba(0,0,0,0.2)`).
*   **Items**: 5 Actions Max.
    *   *Active Color*: System Blue (`#007AFF`).
    *   *Inactive Color*: Secondary Label (`rgba(60, 60, 67, 0.6)`).

---

## 2. Dashboard Component Pattern
Current implementation for the main dashboard view.

### Quote Card
*   **Placement**: Immediately below the Large Title.
*   **Style**: Glassmorphism (`rgba(255,255,255,0.8)`), Rounded (`22px`), Shadow.
*   **Typography**: Italic Serif or Sans-Serif for quote, specific attribution style.

### Inset Grouped List (Card Stack)
*   **Usage**: Main navigation menu or action list.
*   **Container**: `.card-stack`
    *   *Background*: White (`#FFFFFF`).
    *   *Radius*: 12px - 20px (depending on nesting).
    *   *Margins*: 16px lateral.
*   **List Item**: `.action-card`
    *   *Height*: ~50-60px.
    *   *Icon*: Rounded Square (8px radius) with System Colors.
    *   *Separator*: Hairline divider (`left: 56px`) between items (except last).

---

## 3. Information Architecture (Navigation Hierarchy)
The mobile application is organized into 5 primary distinct tabs:

### 1. Trang chủ (Home)
*   **Purpose**: Central hub for daily overview and quick access.
*   **Key Elements**:
    *   Greeting & Date.
    *   Daily Motivation (Quote Card).
    *   Stack: "Lịch làm việc", "Nhiệm vụ", "Tiến độ học tập", "Sự kiện".

### 2. Công việc (Work)
*   **Purpose**: Professional task management and scheduling.
*   **Sub-sections**: TODO List, Calendar View, Project Boards.

### 3. Học tập (Learn)
*   **Purpose**: Personal development and course tracking.
*   **Sub-sections**: My Courses, Progress Stats, Library.

### 4. Ứng dụng (Apps)
*   **Purpose**: Access to internal tools and utilities.
*   **Sub-sections**: Meeting Rooms, Documents, Reports.

### 5. Menu
*   **Purpose**: Personal settings and less frequent actions.
*   **Sub-sections**: User Profile, Notifications, App Settings, Logout.

---

## 4. Style Tokens (CSS Variables)
Use these variables to maintain consistency.

```css
:root {
    /* Colors */
    --background-color: #F2F2F7;
    --card-background: #FFFFFF;
    --text-primary: #000000;
    --text-secondary: rgba(60, 60, 67, 0.6);
    --separator-color: rgba(60, 60, 67, 0.29);
    --accent-color: #007AFF;
    
    /* System Spectrum */
    --system-blue: #007AFF;
    --system-orange: #FF9500;
    --system-green: #34C759;
    --system-red: #FF3B30;
    --system-teal: #30B0C7;
    --system-indigo: #5856D6;

    /* Glass */
    --glass-bg: rgba(255, 255, 255, 0.8);
}
```
