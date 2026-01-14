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

## 4. N-Task Section (`/n-task`)

### Overview
N-Task is a project-based task management system using a **Kanban board** layout. Users first select a project, then view and manage tasks within that project.

### Navigation Flow
1. **Projects View** → Select a project → **Kanban Board View** → Click a task → **Task Detail Modal**

### A. Projects View
*   **Layout**: Grid of project cards
*   **Project Card Elements**:
    *   Project Name (e.g., "Leader IT", "NhiLe Team Website")
    *   Project Icon/Avatar
    *   Click to enter project's Kanban board

### B. Kanban Board View
*   **Layout**: Horizontal columns representing task statuses
*   **Standard Columns** (left to right):
    1. **Resources** (Tài nguyên)
    2. **Idea** (Ý tưởng)
    3. **Todo** (Cần làm)
    4. **Doing** (Đang làm)
    5. **Done** (Hoàn thành)

*   **Task Card Display** (in each column):
    *   Task Title
    *   Icons indicating:
        *   Description (if present)
        *   Subtasks count
        *   Attachments count
        *   Comments count

*   **Actions**:
    *   **"+ Thêm task mới"** button in each column to create a new task in that status

### C. Task Creation/Edit Form
When clicking a task card or creating a new task, a **detailed modal/panel** opens with the following sections:

#### Header Section
*   **Status Dropdown**: Change task status (Resources/Idea/Todo/Doing/Done)
*   **Task Title**: Large editable text field
*   **Close Button**: X icon to close the modal

#### Main Fields (Tabs/Sections)
1. **Ngày bắt đầu** (Start Date)
   *   Date picker
   
2. **Ngày hết hạn** (End Date/Due Date)
   *   Date picker
   
3. **Thành viên** (Members/Assignees)
   *   Multi-select field to assign team members
   
4. **Nhãn** (Labels/Tags)
   *   Color-coded labels for categorization

#### Content Sections
5. **Mô tả** (Description)
   *   Rich text editor area
   *   Supports formatting and detailed task description
   
6. **Đính kèm** (Attachments)
   *   File upload area
   *   Shows attached files with icons
   
7. **Hoạt động và bình luận** (Activity & Comments)
   *   Timeline of task activities
   *   Comment input area for team collaboration

#### Action Buttons
*   **Save/Update**: Automatically saves changes
*   **Delete**: Option to remove task (in menu)

---

## 5. N-Meeting Section (`/n-meeting`)

### Overview
N-Meeting manages scheduled meetings with integration to external platforms (Zoom, Teams, etc.). **Meetings created here automatically sync to the Work Calendar.**

### A. Main View Layout
*   **View Type**: List/Grid of meeting cards
*   **Top Bar Controls**:
    *   **Search Bar**: Search by title, team, or member name
    *   **Filter Tabs**:
        *   **Tất cả** (All)
        *   **Hôm nay** (Today)
        *   **Sắp diễn ra** (Upcoming)
        *   **Đã kết thúc** (Finished)
    *   **Group Filter**: Dropdown to filter by team/group
    *   **"+ Tạo cuộc họp"** button (top right)

### B. Meeting Card Display
Each meeting card shows:
*   **Tên cuộc họp** (Meeting Name/Topic)
*   **Ngày** (Date)
*   **Thời gian** (Time range, e.g., "12:00 - 13:00")
*   **Thành viên** (Participants) - List of email addresses

### C. Meeting Creation Form
Clicking **"+ Tạo cuộc họp"** opens a modal with the following fields:

#### Form Fields
1. **Tên cuộc họp** (Meeting Name)
   *   Text input
   *   Required field
   
2. **Mô tả ngắn** (Short Description)
   *   Textarea
   *   Optional description of meeting agenda
   
3. **Nền tảng** (Platform)
   *   Dropdown selection
   *   Default: **Zoom**
   *   Options: Zoom, Teams, Google Meet, etc.
   
4. **Ngày** (Date)
   *   Date picker
   *   Selects the meeting date
   
5. **Giờ bắt đầu** (Start Time)
   *   Time picker
   *   Format: HH:MM (24-hour)
   
6. **Thời lượng (phút)** (Duration in minutes)
   *   Numeric input
   *   Default: 45 minutes
   
7. **Người tham gia** (Participants)
   *   Search/autocomplete field
   *   Add members by name or nickname
   *   Displays as email addresses

#### Action Buttons
*   **Hủy** (Cancel) - Gray button
*   **Tạo cuộc họp** (Create Meeting) - Blue button

### D. Synchronization Behavior
> [!IMPORTANT]
> **Automatic Sync to Work Calendar**: When a meeting is created in N-Meeting, it **automatically appears** in the Work Calendar (Lịch làm việc) at the corresponding date and time slot. This ensures unified schedule management across both modules.

---

## 6. Work Calendar Section (`/calendar` or "Lịch làm việc")

### Overview
The Work Calendar provides a unified view of all scheduled events, including meetings from N-Meeting and manually created calendar events.

### A. Main View Layout
*   **Default View**: **Weekly Calendar** with time slots
*   **View Options**:
    *   **Tuần** (Week) - Default
    *   **Danh sách** (List) - Alternative list view

### B. Calendar Display
*   **Time Slots**: Hourly divisions (e.g., 8:00 Sáng, 9:00 Sáng, etc.)
*   **Days**: Horizontal columns showing the week (Mon-Sun)
*   **Current Day**: Highlighted with different background color
*   **Event Blocks**: 
    *   Colored blocks showing scheduled events
    *   Display event title and time
    *   Color-coded by event type or calendar

### C. Top Navigation Bar
*   **"+ Tạo sự kiện"** button (left side)
*   **Hôm nay** (Today) - Quick jump to current date
*   **Navigation Arrows**: < > to move between weeks
*   **View Toggles**: Switch between Week/List views
*   **Settings Icon**: Calendar preferences
*   **Export Icon**: "Lịch lẻ" (Export calendar)
*   **Language Toggle**: "Ngôn ngữ Việt" (Language selection)

### D. Event Creation Form
Clicking **"+ Tạo sự kiện"** opens a modal with the following fields:

#### Form Fields
1. **Tiêu đề sự kiện** (Event Title)
   *   Text input
   *   Required field
   
2. **Mô tả** (Description)
   *   Textarea
   *   Optional event details
   
3. **Liên kết tham gia** (Join Link)
   *   Text input
   *   For Zoom, Teams, or other meeting links
   *   Placeholder: "https://..."
   
4. **Ngày** (Date)
   *   Date picker
   *   Selects event date
   
5. **Bắt đầu** (Start Time)
   *   Time picker
   *   Format: HH:MM AM/PM
   
6. **Kết thúc** (End Time)
   *   Time picker
   *   Format: HH:MM AM/PM
   
7. **Lịch** (Calendar)
   *   Dropdown to select which calendar to add to
   *   Options: "Chọn lịch" (Select calendar)
   
8. **Người tham gia** (Participants)
   *   Email input field
   *   Add multiple participants by email

#### Action Buttons
*   **Hủy** (Cancel) - Gray button
*   **Tạo sự kiện** (Create Event) - Blue button

### E. Event Display on Calendar
*   **Meeting Events** (from N-Meeting):
    *   Automatically synced
    *   Show meeting name and time
    *   Color: Typically teal/cyan (e.g., "Sync Test Meeting")
*   **Manual Events**:
    *   Created directly in Work Calendar
    *   Show event title and time

---

## 7. Cross-Module Integration

### N-Meeting → Work Calendar Synchronization
*   **Trigger**: Creating a meeting in N-Meeting
*   **Action**: Meeting automatically appears in Work Calendar
*   **Data Synced**:
    *   Meeting name → Event title
    *   Date and time → Calendar time slot
    *   Duration → Event duration
    *   Participants → Event attendees
*   **Visual Confirmation**: The synced meeting appears as a colored block in the calendar at the scheduled time

### Unified Schedule Management
*   Users can view all commitments (tasks, meetings, events) in one place via the Work Calendar
*   N-Meeting focuses on meeting-specific details (platform, participants)
*   Work Calendar provides the broader time management view

---

## 8. Mobile Synchronization Requirements
To match the desktop structure on mobile:

1.  **Menu Tab**: Should act as the aggregator for "Me", "Notifications", and "Logout" since the sidebar is absent on mobile.
2.  **Profile View**:
    *   Adapt the **Two-Column** desktop layout into a **Single-Column Vertical Stack**.
    *   The **Header Actions** (Cancel/Save) should move to the top navbar.
    *   Include all 7 fields found on desktop (Nickname, Telegram ID, etc.).
3.  **Notifications View**:
    *   Replicate the **3-Step Setup Guide** visually.
    *   Ensure "Copy" buttons work on touch.
4.  **N-Task Mobile Adaptation**:
    *   Convert horizontal Kanban columns to **vertical scrollable sections** or **swipeable tabs**
    *   Task cards should be touch-friendly with adequate spacing
    *   Task detail modal should be full-screen on mobile
    *   Ensure all form fields are accessible without horizontal scrolling
5.  **N-Meeting Mobile Adaptation**:
    *   Meeting list should use **card-based layout** optimized for vertical scrolling
    *   Filter tabs should be horizontally scrollable if needed
    *   Meeting creation form should be full-screen modal
    *   Time pickers should use native mobile time selection
6.  **Work Calendar Mobile Adaptation**:
    *   Default to **Day View** or **3-Day View** for better mobile visibility
    *   Implement swipe gestures to navigate between days/weeks
    *   Event creation should use full-screen modal
    *   Ensure time slots are touch-friendly (minimum 44px touch targets)
    *   Display synced N-Meeting events with visual distinction
