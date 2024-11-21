document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');

  // Add a new task
  addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <div>
        <button class="complete">Complete</button>
        <button class="remove">Remove</button>
      </div>
    `;

    // Complete task
    listItem.querySelector('.complete').addEventListener('click', () => {
      listItem.classList.toggle('completed');
    });

    // Remove task
    listItem.querySelector('.remove').addEventListener('click', () => {
      listItem.remove();
    });

    taskList.appendChild(listItem);
    taskInput.value = '';
  });
});
