// const task = [
//     {title: "Meeting with team", time: "9:00am - 10:00am", description: "Discuss on new project"},
//     {title: "Work on project report", time: "4:00pm-7:00pm", description: "Draft the final report for the project."}
// ];

// document.addEventListener('DOMContentLoaded', () =>{
//     const div = document.querySelector('.schedule')
//     const input =document.getElementById('name')
//     const newDiv = document.createElement('div')

//     const ctaBtn = document.getElementById("btn")

//     ctaBtn.addEventListener("click", () => {
//         div.appendChild(newDiv)
//         newDiv.innerHTML = input.value
//     })

// })

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');
    const message = document.getElementById('message');
    // const newDiv = document.createElement('div');

    // const ctaBtn = document.getElementById("btn");
    // ctaBtn.addEventListener("click"  , () => {
    //     div.appendChild(newDiv)
    //     newDiv.innerHTML = input.value;
    // });

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