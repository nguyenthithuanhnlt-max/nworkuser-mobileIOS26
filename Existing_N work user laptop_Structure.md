# Existing Dashboard Structure Analysis

**Target URL**: `https://nquoc.vn/dashboard`
**Analysis Date**: 2026-01-13
**Version**: Desktop Web Interface

## 1. Executive Summary
The dashboard utilizes a clean, modern interface with a standard admin layout (Sidebar + Header + Content). It divides the screen into a fixed navigation sidebar and a scrollable content area.

## 2. Layout Structure

### Desktop View (Reference)
*   **Sidebar**: Fixed narrow vertical strip on the left containing icons for navigation.
    *   **Features**: Icons for Home, Tasks, Docs, Meetings, Reports, Learning, **Notifications**, and **Me (Profile)**.
    *   **Bottom Section**: User Avatar which opens a pop-up menu with User Name, Email, and **Logout**.
*   **Header**: Sticky top bar in the content area with module-specific titles and actions (e.g., "Cancel", "Save").
*   **Main Content**: Background color `#f9fafb` (Gray 50). Content is often centered or organized in grids.

## 3. Module Specific Analysis

### A. Profile / Me (`/ho-so`)
*   **Header**:
    *   **Title**: "Tôi"
    *   **Subtitle**: "Quản lý thông tin cá nhân và cài đặt tài khoản"
    *   **Actions**: "Hủy" (Cancel - Grey) and "Lưu" (Save - Blue) buttons pinned to the right.
*   **Layout**: Two-column layout on desktop.
    *   **Left Column**:
        *   **Identity Card**: Circular Avatar (with edit pencil), Full Name, Email, and ID (e.g., `ThuAnh1349_IT`).
        *   **Security Card**: Title "Bảo mật", description "Thay đổi mật khẩu của bạn", and a full-width "Đổi mật khẩu" button.
    *   **Right Column**:
        *   **Personal Info Card**: A comprehensive form.
        *   **Fields**:
            1.  **Họ và tên**: Text Input
            2.  **Biệt danh**: Text Input (Nickname)
            3.  **Số điện thoại**: Text Input
            4.  **Telegram ID**: Text Input
            5.  **Địa chỉ**: Textarea (Multi-line)
            6.  **Giới tính**: Select/Dropdown (Nam/Nữ/Khác)
            7.  **Ngày sinh**: Date Picker

### B. Notifications (`/thong-bao`)
*   **Purpose**: Currently serves as a **Telegram Setup Guide** rather than a list of past notifications.
*   **Header**: Title "Thông báo".
*   **Layout**: Vertical stack of instruction steps centered on the screen.
*   **Content Steps**:
    1.  **Step 1: Connect Bot**:
        *   Title: "Bước 1: Kết nối với Telegram Bot"
        *   Action: Link to `t.me/nquoc_bot`. Buttons for "Copy Link" and "Open Telegram Bot".
    2.  **Step 2: Get ID**:
        *   Title: "Bước 2: Lấy ID người dùng"
        *   Instruction: Use command `/id`
        *   Action: Button to "Copy command".
    3.  **Step 3: Update Profile**:
        *   Title: "Bước 3: Cập nhật ID vào hồ sơ"
        *   Action: Link to Profile page. Buttons to "Copy ID" and "Update Profile".

### C. Account & Menu Logic
*   **Entry Points**:
    *   **Sidebar Icon**: "Tôi" (Profile Person Icon) -> Navigates to `/ho-so`.
    *   **Sidebar Icon**: "Thông báo" (Bell Icon) -> Navigates to `/thong-bao`.
    *   **Bottom Avatar**: Click opens a popover menu.
        *   **Logout**: "Đăng xuất" is located here.

## 4. Mobile Synchronization Requirements
To match the desktop structure on mobile:

1.  **Menu Tab**: Should act as the aggregator for "Me", "Notifications", and "Logout" since the sidebar is absent on mobile.
2.  **Profile View**:
    *   Adapt the **Two-Column** desktop layout into a **Single-Column Vertical Stack**.
    *   The **Header Actions** (Cancel/Save) should move to the top navbar.
    *   Include all 7 fields found on desktop (Nickname, Telegram ID, etc.).
3.  **Notifications View**:
    *   Replicate the **3-Step Setup Guide** visually.
    *   Ensure "Copy" buttons work on touch.
