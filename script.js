// DOM Elements
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const taskPriority = document.getElementById('task-priority');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const searchTaskInput = document.getElementById('search-task');
const themeToggleButton = document.getElementById('theme-toggle');

// Add Task Functionality
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const dueDate = taskDate.value;
  const priority = taskPriority.value;

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = `priority-${priority}`;
  taskItem.innerHTML = `
    <span>${taskText} - <small>${dueDate ? dueDate : 'No due date'}</small> - <strong>${priority}</strong></span>
    <div>
      <button class="complete-task">✔</button>
      <button class="delete-task">✖</button>
    </div>
  `;

  // Mark Task as Complete
  taskItem.querySelector('.complete-task').addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  // Delete Task
  taskItem.querySelector('.delete-task').addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskList.appendChild(taskItem);

  // Clear Input Fields
  taskInput.value = '';
  taskDate.value = '';
  taskPriority.value = 'low';
});

// Search Functionality
searchTaskInput.addEventListener('input', () => {
  const searchQuery = searchTaskInput.value.toLowerCase();
  const tasks = taskList.querySelectorAll('li');

  tasks.forEach(task => {
    const taskText = task.querySelector('span').textContent.toLowerCase();
    if (taskText.includes(searchQuery)) {
      task.style.display = '';
    } else {
      task.style.display = 'none';
    }
  });
});

// Dark Mode Toggle
let isDarkMode = false;
themeToggleButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark', isDarkMode);
  themeToggleButton.textContent = isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode';
});
