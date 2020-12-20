var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function()
{
    var taskItemE1 = document.createElement("li");
    taskItemE1.textContent = "This is a new task.";
    taskItemE1.className = "task-item";
    tasksToDoEl.appendChild(taskItemE1);
}

buttonEl.addEventListener("click", createTaskHandler); 

  
  
 