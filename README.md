# NQuoc Mobile Dashboard Pattern

This repository contains the mobile dashboard implementation and the design system documentation for NQuoc user products, following the iOS 26 design guidelines.

## 📂 Project Structure

## I. Information Architecture (Navigation Hierarchy)
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
### 📱 Implementation
*   **`dashboard/`**
    *   Contains the core mobile dashboard code.
    *   `index.html`: The main entry point structure (Header, Stack, Tab Bar).
    *   `style.css`: The styling definitions including iOS 26 Design Tokens (Colors, Glassmorphism, Layout).
*   **`menu/`** (New Standalone Module)
    *   A separate, standalone implementation of the "Menu" features.
    *   **Features**:
        *   **Menu Hub**: Central navigation.
        *   **Profile (`/ho-so`)**: Detailed user profile with secure fields.
        *   **Notifications (`/thong-bao`)**: Telegram Bot connection flow.
        *   **Settings**: Dark Mode toggle and app preferences.
        *   **Security**: Change Password functionality.
    *   `index.html`: Entry point for the Menu module.
    *   `style.css`: Dedicated styles for the Menu module.

### 📚 Documentation & Desgin System
*   **`Mobile_UI_Shared_Structure.md`**
    *   **PRIMARY REFERENCE**: The single source of truth for the mobile design system.
    *   Defines Core Layout (Header, Tabs), Components (Cards), Information Architecture, and Style Tokens.
*   **`iOS_26_System_Design.md`**
    *   Detailed reference for the iOS 26 visual language (Spatial Design, Glassmorphism, Typography).
*   **`Existing_Dashboard_Structure.md`**
    *   Legacy documentation of the original dashboard layout.

## 🚀 Getting Started
1.  **Dashboard**: Open `dashboard/index.html` to view the comprehensive dashboard UI.
2.  **Menu Module**: Open `menu/index.html` to view the standalone Menu/Profile/Settings implementation.
3.  **Design System**: Refer to `Mobile_UI_Shared_Structure.md` when building new mobile pages to ensure consistency.
