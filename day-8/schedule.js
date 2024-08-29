
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const message = document.getElementById('message');

    const taskNames = new Set();
    const task = new Map();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskName = document.getElementById('taskName').value.trim();
        const taskDescription = document.getElementById('taskDescription').value.trim();
        const creationDate = document.getElementById('creationDate');
        const completionDate = document.getElementById('completionDate').value;

        if(taskNames.has(taskName)) {
            message.textContent = 'Task already exist!';
            message.style.color = 'red';
        }else {
            taskNames.add(taskName);
            task.set(taskName, {
             description: taskDescription,
             creationDate: creationDate,
             completionDate: completionDate
            });
            const li = document.createElement('li');
            li.textContent = `${taskName} - ${taskDescription} (created: ${creationDate}, completion: ${completionDate})`;
            taskList.appendChild(li);

            message.textContent = 'Task add successful!';
            message.style.color = 'green';

            taskForm.reset();
        }
    });
});