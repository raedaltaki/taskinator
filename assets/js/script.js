//var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event)
{
    event.preventDefault();
    var taskItemE1 = document.createElement("li");
    taskItemE1.textContent = "This is a new task.";
    taskItemE1.className = "task-item";
    tasksToDoEl.appendChild(taskItemE1);
};

//buttonEl.addEventListener("click", createTaskHandler);
formEl.addEventListener("submit", createTaskHandler);