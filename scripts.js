// Expense Tracker
function addExpense() {
    let description = document.getElementById('expense-description').value;
    let amount = document.getElementById('expense-amount').value;
    if (description && amount) {
        let listItem = document.createElement('li');
        listItem.textContent = `${description}: ₹${amount}`;
        document.getElementById('expense-list').appendChild(listItem);
        document.getElementById('expense-description').value = '';
        document.getElementById('expense-amount').value = '';
    }
}

// File Manager
function manageFiles() {
    let files = document.getElementById('file-input').files;
    let fileList = document.getElementById('file-list');
    fileList.innerHTML = '';
    for (let i = 0; i < files.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = files[i].name;
        fileList.appendChild(listItem);
    }
}

// Calendar Notifications
function addEvent() {
    let eventDate = document.getElementById('event-date').value;
    let eventDescription = document.getElementById('event-description').value;
    if (eventDate && eventDescription) {
        let listItem = document.createElement('li');
        listItem.textContent = `${eventDate}: ${eventDescription}`;
        document.getElementById('event-list').appendChild(listItem);
        document.getElementById('event-date').value = '';
        document.getElementById('event-description').value = '';
    }
}

// To-Do List
function addTodo() {
    let todoItem = document.getElementById('todo-item').value;
    if (todoItem) {
        let listItem = document.createElement('li');
        listItem.textContent = todoItem;
        document.getElementById('todo-list-items').appendChild(listItem);
        document.getElementById('todo-item').value = '';
    }
}
