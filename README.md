# NQuoc Mobile Dashboard Pattern

This repository contains the mobile dashboard implementation and the design system documentation for NQuoc products, following the iOS 26 design guidelines.

## 📂 Project Structure

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
