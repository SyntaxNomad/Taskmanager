function addTask(){
let input = document.getElementById("taskInput")
let list = document.getElementById("taskList")

if(!input.value.trim()) return;

newitem = document.createElement("Li")
newitem.textContent = input.value

checkbox=document.createElement("input")
deletebutton = document.createElement("button")

deletebutton.textContent="❌"
deletebutton.addEventListener("click", deleteTask)
checkbox.type="checkbox"

newitem.prepend(deletebutton)
newitem.appendChild(checkbox)


list.appendChild(newitem)

checkbox.addEventListener("change", completeTask);
input.value=""
}

function deleteTask(event){
  event.target.parentElement.remove();
}

function removeTask() {
    let list= document.getElementById("taskList")
    if(list.lastElementChild) {
        list.lastElementChild.remove()
        
    }}

    function completeTask(event) {
        let taskItem = event.target.parentElement; // Get the task <li>
        let completedList = document.getElementById("completedList"); 
        let taskList = document.getElementById("taskList");
    
        if (event.target.checked) {
            completedList.appendChild(taskItem); // Move to completed
        } else {
            taskList.appendChild(taskItem); // Move back if unchecked
        }
    }

    document.getElementById("taskInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
    