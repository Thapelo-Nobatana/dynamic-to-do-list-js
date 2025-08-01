document.addEventListener('DOMContentLoaded', function() {
     
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')|| []);
        storedTasks.forEach(task => {
            addTask(task, false); // false indicates not to save to localStoraget
        });
    }
    loadTasks();
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask(task, save = true) {
       const taskText = taskInput.value.trim();
        if(taskText === ""){
            alert("Please enter a task.");
            return;
        } else {
            const listItem = document.createElement("li");
            listItem.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Remove";
            deleteButton.classList.add("remove-btn");
            deleteButton.addEventListener("click", function() {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            taskInput.value = ""; // Clear the input field
        }

        if (save){
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || "[]");
            storedTasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }



    }
      addButton.addEventListener("click", addTask);
     taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
            });
//   addTask(); // Initial call to set up event listeners
});