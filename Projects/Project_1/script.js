// Selecting elements (DOM)
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Event Handling
addBtn.addEventListener("click", function() {

    const taskText = taskInput.value;

    if(taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new li element
    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle completed task
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
});