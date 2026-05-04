let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        const completedClass = task.completed ? "completed" : "";

        li.innerHTML = `
        <span class="${completedClass}">${task.title}</span>
        <div>
            <button onclick="toggleTask(${task.id})">${task.completed ? "undo" : "Done" }</button>
            <button onclick="deleteTask(${task.id})">❌</button>
        </div>
        `;

        taskList.appendChild(li);
    })
}

function addTask() {
    const value = taskInput.value.trim();

    if (value === "")
        alert("Please Enter a Task"); 
        return;

    const newTask = {
        id: Date.now() + Math.random(),
        title: value,
        completed: false
    };

    tasks.push(newTask);

    taskInput.value = "";

    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return {
                ...task, completed: !task.completed
            };
        }
        return task;
    });
    renderTasks();
}

addBtn.addEventListener("click", addTask)

taskInput.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTask();
    }
});