# iOS and iPadOS 26 Design System (Community)

This document outlines the standard UI kit system derived from the "iOS and iPadOS 26 (Community)" Figma design files. It serves as the single source of truth for future product development.

## 1. Core Visual Style
The design language emphasizes **translucency**, **rounded corners**, and **continuous curves**, creating a fluid and organic feel typical of modern iOS interfaces.

### Materials & Blur
*   **Usage**: Extensive use of background blur for system components (Tab Bar, Navigation Bar, Sheets).
*   **Types**:
    *   **Ultra Thin Material**: Subtle depth.
    *   **Thin Material**: Standard overlays.
    *   **Thick Material**: High contrast backgrounds.

### Spacing & Layout
*   **Grid System**: 8pt grid system.
*   **Margins**: Standard 16pt (or 20pt) lateral margins for mobile.
*   **Corner Radius**:
    *   **Cards/Containers**: ~20px - 24px (Continuous Curve).
    *   **Buttons**: ~12px - 14px (Standard), or Full Pill (Capsule) for primary actions.

---

## 2. Color System
The system relies on semantic colors that adapt to Light and Dark modes.

### Primary Palette
*   **Primary (Blue)**: Action color (buttons, links, active states).
    *   *Reference*: System Blue (approx. `#007AFF`)
*   **Destructive (Red)**: Errors, deletions.
    *   *Reference*: System Red (approx. `#FF3B30`)
*   **Success (Green)**: Confirmation, valid states.
    *   *Reference*: System Green (approx. `#34C759`)
*   **Warning (Orange)**: Alerts.
    *   *Reference*: System Orange (approx. `#FF9500`)

### Neutrals & Backgrounds
*   **Light Mode Backgrounds**:
    *   `SystemBackground`: Pure White (`#FFFFFF`).
    *   `SecondarySystemBackground`: Off-white/Light Gray (`#F2F2F7`).
*   **Dark Mode Backgrounds**:
    *   `SystemBackground`: Pure Black (`#000000`).
    *   `SecondarySystemBackground`: Dark Gray (`#1C1C1E`).

### Text Hierarchy
*   **Primary Label**: high opacity (approx. 100% or `rgba(0,0,0,0.87)` in Light).
*   **Secondary Label**: lower opacity (approx. 60%).
*   **Tertiary/Quaternary**: used for placeholders and disabled text.

---

## 3. Typography
**Font Family**: `SF Pro` (San Francisco).

### Type Scale (Dynamic Type Support)
| Style | Weight | Size (pts) | Usage |
| :--- | :--- | :--- | :--- |
| **Large Title** | Bold | 34 | Top-level visual headers (collapsible). |
| **Title 1** | Bold | 28 | Section headers. |
| **Title 2** | Bold | 22 | Subsection headers. |
| **Headline** | Semibold | 17 | Highlights, list items. |
| **Body** | Regular | 17 | Primary content text. |
| **Callout** | Regular | 16 | Featured details. |
| **Subhead** | Regular | 15 | Secondary descriptions. |
| **Footnote** | Regular | 13 | Footer text. |
| **Caption 1** | Regular | 12 | Standard captions. |
| **Caption 2** | Regular | 11 | Auxiliary text. |

---

## 4. Components

### Buttons
1.  **Filled (Primary)**:
    *   Style: Solid Primary Blue background, White text.
    *   Shape: Pill (full rounded) or Rounded Rect (12px+ radius).
2.  **Tinted (Secondary)**:
    *   Style: Low opacity Primary color background (e.g., light blue), Primary color text.
3.  **Plain (Tertiary)**:
    *   Style: Transparent background, Primary color text. No border.

### Tab Bar (Bottom Navigation)
*   **Background**: Translucent with background blur (Frosted Glass effect).
*   **Elements**:
    *   Icons: **SF Symbols** (outline in inactive, filled/bold in active).
    *   Labels: Small caption text below icons (10-11pt).
    *   Active State: Primary Color (Blue).
    *   Inactive State: Gray/Secondary Label.

### Navigation Bar
*   **Standard**: Integrated into the status bar area.
*   **Large Title Mode**:
    *   Collapsed: Center aligned, standard size, blurred background.
    *   Expanded: Left aligned, large bold text, clear background.

### Inputs & Forms
*   **Text Field**:
    *   Height: ~44pt.
    *   Background: `SecondarySystemBackground` (Light Gray).
    *   Border: None (usually) or thin separator.
    *   Corner Radius: 8-10px.
*   **Lists/Table Views**:
    *   Style: Inset Grouped (rounded corners for sections) or Plain (full width).
    *   Separators: Thin hairines inside the content area.
