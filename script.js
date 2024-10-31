// class card {
//     constructor(priority, title, date, status,description){
//         this.priority=priority;
//         this.title=title;
//         this.date=date;
//         this.status=status;
//         this.description=description;
//     }
//     displayProduct(){
//         console.log(`Priority: ${this.priority}`);
//         console.log(`title: ${this.title}`);
//         console.log(`date: ${this.date}`);
//         console.log(`status: ${this.status}`);
//         console.log(`description: ${this.description}`);
//     }

// }
// // 
// // console.log("todo", todoTasks)
// // 
// // console.log("doing", todoTasks)
// // 
// // console.log("done", todoTasks)


// const modal = document.getElementById('modal');
// const modalTitle = document.getElementById('modal-title');
// const addDone = document.getElementById('btn-add-done');
// const addDoing = document.getElementById('btn-add-doing');
// const addToDo = document.getElementById('btn-add-todo');
// const taskForm = document.getElementById('task-form');
// const todoTasksContainer = document.getElementById('todo-tasks-container');
// const doingTasksContainer = document.getElementById('doing-tasks-container');
// const doneTasksContainer = document.getElementById('done-tasks-container');

// // DOING TASKS IMPLEMENTATION
// addDoing.addEventListener("click", addDoingTask);
// function addDoingTask(){

//     modal.style.display='flex';
//     modalTitle.innerHTML='Add a Doing Task';
//     document.getElementById('task-title-input').setValue='Title test';
//     taskForm.addEventListener('submit', function(event) {
//         event.preventDefault;
//         addTask("doing");
        
//     });
    
// }


// // DONE TASKS IMPLEMENTATION
// addDone.addEventListener("click", addDoneTask);
// function addDoneTask(){

//     modal.style.display='flex';
//     modalTitle.innerHTML='Add a Done Task';
//    taskForm.addEventListener('submit', function(event) {
//         event.preventDefault;
//         addTask("done");
        
//     });
    
    
// }

// // TODO TASKS IMPLEMENTATION
// addToDo.addEventListener("click", addToDoTask);
// function addToDoTask(){

//     modal.style.display='flex';
//     modalTitle.innerHTML='Add a ToDo Task';
//     taskForm.addEventListener('submit', function(event) {
//         event.preventDefault;
//         addTask("todo");
        
//     });

    
// }

// // Task Form submit 

// function addTask(stats){
    
//     const p = document.getElementById('priority-list').value;
//         const t = document.getElementById('task-title-input').value;
//         const d = document.getElementById('task-date-input').value;
//         const des = document.getElementById('task-description-input').value;
//         const task = {
//             priority: p,
//             title: t,
//             date: d,
//             description: des,
//             status: stats
//         };
//         const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         existingTasks.push(task);
//         localStorage.setItem('tasks', JSON.stringify(existingTasks));
        
// }
// const doingTasks = JSON.parse(localStorage.getItem('tasks')).filter(tasks => tasks.status === "doing");
// const todoTasks = JSON.parse(localStorage.getItem('tasks')).filter(tasks => tasks.status === "todo");
// const doneTasks = JSON.parse(localStorage.getItem('tasks')).filter(tasks => tasks.status === "done");

// todoTasks.forEach((task, index) => {
//     const taskCard = document.createElement('div');
//     taskCard.className = "card w-full h-32 bg-white rounded-bl-3xl rounded-br-3xl flex flex-col mb-8 relative";

//     taskCard.innerHTML = `
//         <div class="absolute top-0 left-0 w-full h-2 ${task.priority === 'P1' ? 'bg-red-500' : task.priority === 'P2' ? 'bg-yellow-500' : 'bg-green-500'} rounded-t-3xl"></div>
        
//         <div class="flex flex-col px-4 h-full justify-center items-center relative">
//             <div class="absolute top-4 right-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" onclick='' class="fill-current text-gray-600">
//                     <path d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/>
//                 </svg>
//             </div>

//             <div class="font-semibold text-gray-800 mt-4">${task.title}</div>
//             <div class="text-gray-500 absolute bottom-2 right-8">${task.date}</div>
//         </div>
//     `;

    
//     todoTasksContainer.appendChild(taskCard);
// });
// doingTasks.forEach(task => {
//     const taskCard = document.createElement('div');
//     taskCard.className = "card w-full h-32 bg-white rounded-bl-3xl rounded-br-3xl flex flex-col mb-8 relative";

//     taskCard.innerHTML = `
//         <div class="absolute top-0 left-0 w-full h-2 ${task.priority === 'P1' ? 'bg-red-500' : task.priority === 'P2' ? 'bg-yellow-500' : 'bg-green-500'} rounded-t-3xl"></div>
        
//         <div class="flex flex-col px-4 h-full justify-center items-center relative">
//             <div class="absolute top-4 right-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" class="fill-current text-gray-600">
//                     <path d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/>
//                 </svg>
//             </div>

//             <div class="font-semibold text-gray-800 mt-4">${task.title}</div>
//             <div class="text-gray-500 absolute bottom-2 right-8">${task.date}</div>
//         </div>
//     `;

    
//     doingTasksContainer.appendChild(taskCard);
// });
// doneTasks.forEach(task => {
//     const taskCard = document.createElement('div');
//     taskCard.className = "card w-full h-32 bg-white rounded-bl-3xl rounded-br-3xl flex flex-col mb-8 relative";

//     taskCard.innerHTML = `
//         <div class="absolute top-0 left-0 w-full h-2 ${task.priority === 'P1' ? 'bg-red-500' : task.priority === 'P2' ? 'bg-yellow-500' : 'bg-green-500'} rounded-t-3xl"></div>
        
//         <div class="flex flex-col px-4 h-full justify-center items-center relative">
//             <div class="absolute top-4 right-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" class="fill-current text-gray-600">
//                     <path d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/>
//                 </svg>
//             </div>

//             <div class="font-semibold text-gray-800 mt-4">${task.title}</div>
//             <div class="text-gray-500 absolute bottom-2 right-8">${task.date}</div>
//         </div>
//     `;

    
//     doneTasksContainer.appendChild(taskCard);
// });

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



const todoTasksContainer = document.getElementById('todo-tasks-container');
const doingTasksContainer = document.getElementById('doing-tasks-container');
const doneTasksContainer = document.getElementById('done-tasks-container');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

localStorage.setItem('id', tasks.length);

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
    // taskIndexToEdit = id;
    btnAddModal.innerText='Add Task'

    if (editMode) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        for ( let i = 0; i<tasks.length ; i++){
            console.log('wach kitsawaw: ', tasks[i].id == ide, 'index', i)

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

function handleTaskSubmit(event) {
    event.preventDefault();
    const newTask = {
        priority: priorityInput.value,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
        status: document.querySelector('input[name="taskStatus"]:checked').value,
    };
    
   if (newTask.title == "" || newTask.date === "")
{
    errorText.innerText='Some Inputs are empty!!'
    errorText.className='text-green text-center'
}
else {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (editMode) {
        newTask.id =  tasks[taskIndexToEdit].id
         tasks[taskIndexToEdit] = newTask;
         editMode = false;

    } else {
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

function displayTasks(tasks) {
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
                <div class="font-semibold text-gray-800 mt-4">${task.title}, ${task.id}, index: ${index}</div>
                <div class="text-gray-500 absolute bottom-2 right-8">${task.date}</div>
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

