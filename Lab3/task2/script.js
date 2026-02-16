const form = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function createTaskItem(text){
    const listItem = document.createElement("li");

    const leftSide = document.createElement("div");
    leftSide.className = "left-side";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = text;
    span.className = "task-text";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    leftSide.appendChild(checkbox);
    leftSide.appendChild(span);

    listItem.appendChild(leftSide);
    listItem.appendChild(deleteButton);

    checkbox.addEventListener("change", function(event){
        span.classList.toggle("done");
    });

    deleteButton.addEventListener("click", function(){
        taskList.removeChild(listItem);
    })

    return listItem;
}

form.addEventListener("submit", function(event){
    event.preventDefault();

    const text = taskInput.value.trim();

    if(text === ""){
        return;
    }

    const taskItem = createTaskItem(text);
    taskList.appendChild(taskItem);

    taskInput.value = "";
});
