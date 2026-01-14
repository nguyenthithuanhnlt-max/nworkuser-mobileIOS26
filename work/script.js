// Navigation Functions
function navigateToView(viewId) {
    // Hide all views
    document.querySelectorAll('.view-section').forEach(view => {
        view.style.display = 'none';
        view.classList.remove('active');
    });

    // Show target view
    const target = document.getElementById(viewId);
    if (target) {
        target.style.display = 'flex';
        target.classList.add('active');
    }
}

function goBack(currentViewId, targetViewId) {
    const current = document.getElementById(currentViewId);
    const target = document.getElementById(targetViewId);

    if (current && target) {
        current.style.display = 'none';
        current.classList.remove('active');

        target.style.display = 'flex';
        target.classList.add('active');
    }
}

// Segmented Control
function switchSegment(button, segmentId) {
    // Remove active class from all segments in the same control
    const control = button.parentElement;
    control.querySelectorAll('.segment-button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Add active class to clicked segment
    button.classList.add('active');

    // Handle segment-specific logic
    console.log('Switched to segment:', segmentId);

    // Switch between My Tasks and By Project
    if (segmentId === 'my-tasks') {
        document.getElementById('my-tasks-content').style.display = 'block';
        document.getElementById('by-project-content').style.display = 'none';
    } else if (segmentId === 'by-project') {
        document.getElementById('my-tasks-content').style.display = 'none';
        document.getElementById('by-project-content').style.display = 'block';
    }
}

// Filter Pills
function toggleFilter(pill) {
    // Remove active class from all pills in the same container
    const container = pill.parentElement;
    container.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.remove('active');
    });

    // Add active class to clicked pill
    pill.classList.add('active');

    // Handle filter logic
    console.log('Filter activated:', pill.textContent);
    // TODO: Implement filter logic
}

// Project Expansion
function toggleProjectExpansion(button) {
    const projectCard = button.closest('.project-card');
    const isExpanded = button.textContent.includes('Show less');

    if (isExpanded) {
        button.textContent = 'Show more (3)';
        // TODO: Hide additional tasks
    } else {
        button.textContent = 'Show less';
        // TODO: Show additional tasks
    }
}

// Floating Action Button Menu
function showCreateMenu() {
    const sheet = document.getElementById('fab-action-sheet');
    if (sheet) {
        sheet.style.display = 'flex';
    }
}

function closeFabActionSheet() {
    const sheet = document.getElementById('fab-action-sheet');
    if (sheet) {
        sheet.style.display = 'none';
    }
}

// Modal Functions
function showCreateTaskModal() {
    const modal = document.getElementById('create-task-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Focus on task name input
        setTimeout(() => {
            const input = document.getElementById('task-name-input');
            if (input) input.focus();
        }, 300);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

function showProjectPicker() {
    const modal = document.getElementById('project-picker-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function showStatusPicker() {
    const sheet = document.getElementById('status-picker-sheet');
    if (sheet) {
        sheet.style.display = 'flex';
    }
}

function showAssigneePicker() {
    const modal = document.getElementById('assignee-picker-modal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeActionSheet(sheetId) {
    const sheet = document.getElementById(sheetId);
    if (sheet) {
        sheet.style.display = 'none';
    }
}

// Selection Functions
function selectProject(name, icon, color) {
    // Update the selected project display
    const projectDisplay = document.getElementById('selected-project');
    if (projectDisplay) {
        projectDisplay.textContent = name;
    }

    // Update checkmarks
    const projectPicker = document.getElementById('project-picker-modal');
    if (projectPicker) {
        projectPicker.querySelectorAll('.checkmark').forEach(check => {
            check.classList.remove('selected');
        });
        event.currentTarget.querySelector('.checkmark')?.classList.add('selected');
    }

    console.log('Selected project:', name);
}

function selectStatus(status, icon) {
    // Update the selected status display
    const statusDisplay = document.getElementById('selected-status');
    if (statusDisplay) {
        statusDisplay.textContent = status;
    }

    // Close the action sheet
    closeActionSheet('status-picker-sheet');

    console.log('Selected status:', status);
}

function selectPriority(button) {
    // Remove active class from all priority pills
    const container = button.parentElement;
    container.querySelectorAll('.priority-pill').forEach(pill => {
        pill.classList.remove('active');
    });

    // Add active class to clicked pill
    button.classList.add('active');

    const priority = button.getAttribute('data-priority');
    console.log('Selected priority:', priority);
}

function toggleAssignee(card, userId) {
    const checkmark = card.querySelector('.checkmark');
    if (checkmark) {
        checkmark.classList.toggle('selected');
    } else {
        // Create checkmark if it doesn't exist
        const newCheckmark = document.createElement('div');
        newCheckmark.className = 'checkmark selected';
        newCheckmark.textContent = '✓';
        card.insertBefore(newCheckmark, card.firstChild);
    }

    console.log('Toggled assignee:', userId);
    // TODO: Update assignee list in main modal
}

// Task Creation
function createTask() {
    const taskName = document.getElementById('task-name-input')?.value;
    const project = document.getElementById('selected-project')?.textContent;
    const status = document.getElementById('selected-status')?.textContent;
    const startDate = document.getElementById('start-date')?.textContent;
    const dueDate = document.getElementById('due-date')?.textContent;
    const description = document.getElementById('task-description')?.value;

    // Get selected priority
    const priorityPill = document.querySelector('.priority-pill.active');
    const priority = priorityPill?.getAttribute('data-priority') || 'medium';

    // Validation
    if (!taskName || taskName.trim() === '') {
        alert('Please enter a task name');
        return;
    }

    // Create task object
    const task = {
        name: taskName,
        project: project,
        status: status,
        startDate: startDate,
        dueDate: dueDate,
        priority: priority,
        description: description,
        assignees: ['current-user'], // Default to current user
        createdAt: new Date().toISOString()
    };

    console.log('Creating task:', task);

    // TODO: Send to API
    // For now, just show success and close modal
    alert('Task created successfully!');
    closeModal('create-task-modal');

    // Reset form
    document.getElementById('task-name-input').value = '';
    document.getElementById('task-description').value = '';
}

// Date Picker (placeholder)
function showDatePicker(type) {
    // TODO: Implement native date picker or custom date picker
    alert(`Date picker for ${type} date - To be implemented with native iOS date picker`);
}

// Detail Modals (placeholders)
function showTaskDetail(taskId) {
    console.log('Show task detail:', taskId);
    // TODO: Implement task detail modal
    alert('Task detail modal will open here');
}

function showEventDetail(eventId) {
    console.log('Show event detail:', eventId);
    // TODO: Implement event detail modal
    alert('Event detail modal will open here');
}

function showMeetingDetail(meetingId) {
    console.log('Show meeting detail:', meetingId);
    // TODO: Implement meeting detail modal
    alert('Meeting detail modal will open here');
}

function showCreateMeetingModal() {
    console.log('Show create meeting modal');
    // TODO: Implement create meeting modal
    alert('Create meeting modal will open here');
}

function showCreateEventModal() {
    console.log('Show create event modal');
    // TODO: Implement create event modal
    alert('Create event modal will open here');
}

// Meeting Functions
function joinMeeting(meetingLink) {
    console.log('Joining meeting:', meetingLink);
    // TODO: Implement actual meeting join logic
    alert('Opening meeting link: ' + meetingLink);
    // In production, this would open the meeting platform
    // window.open(meetingLink, '_blank');
}

// Calendar Functions
function changeDate(direction) {
    console.log('Change date:', direction > 0 ? 'next' : 'previous');
    // TODO: Implement date navigation logic
    const dateDisplay = document.querySelector('.date-display');
    if (dateDisplay) {
        // This is a placeholder - implement actual date logic
        alert('Date navigation: ' + (direction > 0 ? 'Next day' : 'Previous day'));
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    console.log('Work tab initialized');

    // Set up any initial state
    // TODO: Load initial data from API

    // Add smooth scrolling
    document.querySelectorAll('.content-scroll').forEach(scroll => {
        scroll.style.scrollBehavior = 'smooth';
    });

    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

// Utility Functions
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('vi-VN', options);
}

function formatTime(time) {
    return time.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
}

// Export functions for use in HTML onclick handlers
window.navigateToView = navigateToView;
window.goBack = goBack;
window.switchSegment = switchSegment;
window.toggleFilter = toggleFilter;
window.toggleProjectExpansion = toggleProjectExpansion;
window.showCreateMenu = showCreateMenu;
window.closeFabActionSheet = closeFabActionSheet;
window.showCreateTaskModal = showCreateTaskModal;
window.closeModal = closeModal;
window.showProjectPicker = showProjectPicker;
window.showStatusPicker = showStatusPicker;
window.showAssigneePicker = showAssigneePicker;
window.closeActionSheet = closeActionSheet;
window.selectProject = selectProject;
window.selectStatus = selectStatus;
window.selectPriority = selectPriority;
window.toggleAssignee = toggleAssignee;
window.createTask = createTask;
window.showDatePicker = showDatePicker;
window.showTaskDetail = showTaskDetail;
window.showEventDetail = showEventDetail;
window.showMeetingDetail = showMeetingDetail;
window.showCreateMeetingModal = showCreateMeetingModal;
window.showCreateEventModal = showCreateEventModal;
window.joinMeeting = joinMeeting;
window.changeDate = changeDate;
