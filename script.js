

class Card {
    constructor(priority, title, date, status, description) {
        this.priority = priority;
        this.title = title;
        this.date = date;
        this.status = status;
        this.description = description;
    }
    
    displayProduct() {
        console.log(`Priority: ${this.priority}`);
        console.log(`Title: ${this.title}`);
        console.log(`Date: ${this.date}`);
        console.log(`Status: ${this.status}`);
        console.log(`Description: ${this.description}`);
    }
}
const searchInput = document.getElementById("searchInput");
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const taskForm = document.getElementById('task-form');
const priorityInput = document.getElementById('priority-list');
const titleInput = document.getElementById('task-title-input');
const dateInput = document.getElementById('task-date-input');
const descriptionInput = document.getElementById('task-description-input');
const btnAddModal = document.getElementById('btn-add-modal')
const errorText = document.getElementById('error-text')
const errorDiv = document.getElementById('error')
const nbrTodoArea = document.getElementById('nbrTodoArea')
const nbrDoingArea = document.getElementById('nbrDoingArea')
const nbrDoneArea = document.getElementById('nbrDoneArea')
const statusDiv = document.getElementById('status-div')
const modalMobile = document.getElementById('modal-mobile');
const addTaskMobile = document.getElementById("add-task-btn-mobile")
const taskFormMobile = document.getElementById('task-form-mobile');
const priorityInputMobile = document.getElementById('priority-list-mobile');
const titleInputMobile = document.getElementById('task-title-input-mobile');
const dateInputMobile = document.getElementById('task-date-input-mobile');
const descriptionInputMobile = document.getElementById('task-description-input-mobile');
const btnAddModalMobile = document.getElementById('btn-add-modal-mobile')



const todoTasksContainer = document.getElementById('todo-tasks-container');
const doingTasksContainer = document.getElementById('doing-tasks-container');
const doneTasksContainer = document.getElementById('done-tasks-container');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
var l = 0;
if (tasks.length==0){
    localStorage.setItem('id', 0);
}
else{

for (let i =0; i<tasks.length;i++){
    if (tasks[i].id>l){
        l=(tasks[i].id)++
    }
}
localStorage.setItem('id', l);

}


let editMode = false;
let taskIndexToEdit = null;

document.getElementById('btn-add-todo').addEventListener("click", () => showModal('Add ToDo Task', 'todo'));
document.getElementById('btn-add-doing').addEventListener("click", () => showModal('Add Doing Task', 'doing'));
document.getElementById('btn-add-done').addEventListener("click", () => showModal('Add Done Task', 'done'));

taskForm.addEventListener('submit', handleTaskSubmit);

function showModal(actionType, status, ide = null) {
    errorText.innerHTML=''
    modal.style.display = 'flex';
    modalTitle.innerHTML = actionType;
    editMode = ide !== null;
    console.log("rgeuuerg", ide)
    btnAddModal.innerText='Add Task'
     statusDiv.innerHTML= ``

    if (editMode) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        for ( let i = 0; i<tasks.length ; i++){

            if(tasks[i].id == ide){
                 taskIndexToEdit = i ;

            }
        }
        console.log("apah", taskIndexToEdit)
        const t = tasks[taskIndexToEdit];
        btnAddModal.innerText='Save Task'
        statusDiv.innerHTML= `
                    <input type="radio" id="s1" name="taskStatus" value="todo" ${t.status === 'todo' ? 'checked' : ''} > To Do
                    <input type="radio" id="s2" name="taskStatus" value="doing"  ${t.status === 'doing' ? 'checked' : ''}  > Doing
                    <input type="radio" id="s3" name="taskStatus" value="done" ${t.status === 'done' ? 'checked' : ''}> Done`   
        console.log('ss', t)
        priorityInput.value = t.priority;
        titleInput.value = t.title;
        dateInput.value = t.date;
        descriptionInput.value = t.description;
        console.log("all tasks",tasks)
    } else {
        taskForm.reset();
    }
    taskForm.status = status;

}
// console.log("date", x)
// function getDate(){
//     x = new Date();
//     var year = x.getFullYear()
//     var month = x.getMonth()+1
//     var day = x.getDa

// }
// var todayDate =  


function handleTaskSubmit(event) {
    event.preventDefault();
    const newTask = {
        priority: priorityInput.value,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
    };
    const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    
    
    if (newTask.title == "" || newTask.date === "")
    {
        errorText.innerText='Some Inputs are empty!!'
        errorText.className='text-red-500 text-center'
    }else if (newTask.date < currentDate) {
        errorText.innerText = "Date cannot be in the past!";
        errorText.className = "text-red-500 text-center"; // Adjust color for error message
    }

else {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (editMode) {
        newTask.status= document.querySelector('input[name="taskStatus"]:checked').value,

        newTask.id =  tasks[taskIndexToEdit].id
         tasks[taskIndexToEdit] = newTask;
         editMode = false;

    } else {
        newTask.status = taskForm.status;
        const idd = parseInt(localStorage.getItem('id'))  ; 
        newTask.id = idd;
        console.log('new',newTask)
        tasks.push(newTask);
        localStorage.setItem('id', idd+1)      
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    modal.style.display = 'none';

    displayTasks(tasks);
}
}

function displayTasks(tasks )
 {
    let nbrTodo = 0;
    let nbrDoing = 0;
    let nbrDone = 0;
    todoTasksContainer.innerHTML=""
    doingTasksContainer.innerHTML=""
    doneTasksContainer.innerHTML=""
    console.log(tasks)

    tasks.forEach((task, index) => {
        const taskCard = document.createElement('div');
        taskCard.className = "card w-full h-32 bg-white rounded-bl-3xl rounded-br-3xl flex flex-col mb-8 relative";
        taskCard.setAttribute("draggable", "true");       
        
        taskCard.innerHTML = `
            <div class="absolute top-0 left-0 w-full h-2 ${task.priority === '1' ? 'bg-red-500' : task.priority === '2' ? 'bg-yellow-500' : 'bg-green-500'} rounded-t-3xl"></div>
            <div class="flex flex-col px-4 h-full justify-center items-center relative">
                <div class="absolute top-4 right-2" >

                    <svg onclick="showModal('Edit Task', '${task.status}', '${task.id}')" xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" class="fill-current text-gray-600">
                        <path d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/>
                    </svg>
                </div>
                <div class="absolute top-4 right-8">
                <svg onclick="deleteTask(${task.id})" xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24"><path fill="#990000" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
                 </div>
                <div class=" font-semibold text-gray-800 mt-4">${task.title}, ${task.id}, index: ${index}</div>
                <div class="text-gray-500 absolute bottom-2 right-8">Due Date: ${task.date}</div>
            </div>
        `;
       

        if (task.status === 'todo') {
            todoTasksContainer.appendChild(taskCard);
            nbrTodo++;
        } else if (task.status === 'doing') {
            doingTasksContainer.appendChild(taskCard);
            nbrDoing++;
        } else if (task.status === 'done') {
            doneTasksContainer.appendChild(taskCard);
            nbrDone++;
        }
      
        nbrTodoArea.innerText=nbrTodo;
        nbrDoingArea.innerText=nbrDoing;
        nbrDoneArea.innerText=nbrDone;
       


    });
}
function searchTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    var filteredTasks = []
    var a;
    filter = searchInput.value.toUpperCase();
    
   
    for (let i =0; i<tasks.length;i++){

        a = tasks[i].title;
        var b = a.toUpperCase();
        if (b.indexOf(filter) > -1){
          

            filteredTasks.push(tasks[i])
             displayTasks(filteredTasks)
        }
        else {
            displayTasks(filteredTasks)

        }
    }

    
}
function deleteTask(idd){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
   
    let a;
        for ( let i = 0; i<tasks.length ; i++){

            if(tasks[i].id == idd){
                 a = i ;

            }
        }
        console.log ("task to delete",tasks[a])
    tasks.splice(a,1)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    displayTasks(tasks);


}
displayTasks(tasks);

function filterAllTasks(){
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    var customSort = function(a,b) {
        if (a.priority === b.priority) return 0;
        if (a.priority > b.priority) return 1;
        return -1;
    };
    
    console.log("before sorting");
    for (var i = 0; i < allTasks.length; i++) {
        console.log(allTasks[i].title);
    }
    allTasks.sort(customSort);
    
    console.log("after sorting", allTasks);
  


    console.log("filter",allTasks)
    displayTasks(allTasks);
}
function filterAllTasksByDate(){
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    var customSort = function(a,b) {
        if (a.date === b.date) return 0;
        if (a.date > b.date) return 1;
        return -1;
    };
    
    console.log("before sorting");
    for (var i = 0; i < allTasks.length; i++) {
        console.log(allTasks[i].date);
    }
    allTasks.sort(customSort);
    
    console.log("after sorting");
    for (var i = 0; i < allTasks.length; i++) {
        console.log(allTasks[i].date);
    }
  


    console.log("filter",allTasks)
    displayTasks(allTasks);
}

let drag = null
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener('dragstart', function(){
        drag = card;
    })
    card.addEventListener('dragend',function(){
        darg = null;
        console.log("DRAG")
    })
    document.querySelectorAll(".box").forEach(box => {
        box.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        box.addEventListener('dragleave',function(){
            
        })
        box.addEventListener('drop',function(){
            box.appendChild(drag)
            // drag.staus = box.stat
            if (box.id === 'todo-tasks-container') {
                changeTaskStatus(drag.id, 'todo')
            } else if (box.id === 'doing-tasks-container') {
                changeTaskStatus(drag.id, 'doing')
            } else if (box.id === 'done-tasks-container') {
                changeTaskStatus(drag.id, 'done')
            }
        })
    });
});
function changeTaskStatus(ide, stat){
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    let index =0;
    for ( let i = 0; i<tasks.length ; i++){

        if(tasks[i].id == ide){
            index = i ;

        }
    }
    tasks[index].status = stat
    localStorage.setItem('tasks', JSON.stringify(tasks))
    displayTasks(tasks)

}



document.getElementById("burgerToggle").addEventListener("click", function (event) {
    const sidebar = document.getElementById("side-bar");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
    event.stopPropagation();
});

addTaskMobile.addEventListener("click", function () {
    modalMobile.style.display = "flex";
});

window.addEventListener("click", function (event) {
    const sidebar = document.getElementById("side-bar");
    const burgerToggle = document.getElementById("burgerToggle");

    if (sidebar.style.display === "block" && !sidebar.contains(event.target) && event.target !== burgerToggle) {
        sidebar.style.display = "none";
    }
});
taskFormMobile.addEventListener("submit", function(event){
    event.preventDefault();
    const radioButtons = document.querySelectorAll('input[name="taskStatusMobile"]');
    
    const newTask = {
        priority: priorityInputMobile.value,
        title: titleInputMobile.value,
        date: dateInputMobile.value,
        description: descriptionInputMobile.value,

    };
    radioButtons.forEach((radio) => {
        radio.addEventListener("change", () => {
          if (radio.checked) {
            newTask.status = radio.value;
          }
        });
      });
      
    const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    
    
    // if (newTask.title == "" || newTask.date === "")
    // {
    //     errorText.innerText='Some Inputs are empty!!'
    //     errorText.className='text-red-500 text-center'
    // }else if (newTask.date < currentDate) {
    //     errorText.innerText = "Date cannot be in the past!";
    //     errorText.className = "text-red-500 text-center"; // Adjust color for error message
    // }else {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const idd = parseInt(localStorage.getItem('id'))  ; 
    newTask.id = idd;
    tasks.push(newTask)
    console.log('new',newTask)
    localStorage.setItem('id', idd+1)   
    console.log("new", newTask)   


localStorage.setItem('tasks', JSON.stringify(tasks));
displayTasks(tasks);



})