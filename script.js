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

const todoTasksContainer = document.getElementById('todo-tasks-container');
const doingTasksContainer = document.getElementById('doing-tasks-container');
const doneTasksContainer = document.getElementById('done-tasks-container');


let editMode = false;
let taskIndexToEdit = null;

document.getElementById('btn-add-todo').addEventListener("click", () => showModal('Add ToDo Task', 'todo'));
document.getElementById('btn-add-doing').addEventListener("click", () => showModal('Add Doing Task', 'doing'));
document.getElementById('btn-add-done').addEventListener("click", () => showModal('Add Done Task', 'done'));

taskForm.addEventListener('submit', handleTaskSubmit);
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function showModal(actionType, status, task = null, index = null) {
    errorText.innerHTML=''
    modal.style.display = 'flex';
    modalTitle.innerHTML = actionType;
    editMode = task !== null;
    taskIndexToEdit = index;
    btnAddModal.innerText='Add Task'

    if (editMode) {

        const t = tasks[index];
        btnAddModal.innerText='Save Task'
        console.log('ss', t)
        priorityInput.value = t.priority;
        titleInput.value = t.title;
        dateInput.value = t.date;
        descriptionInput.value = t.description;
    } else {
        taskForm.reset();
    }

    taskForm.dataset.status = status;
}

function handleTaskSubmit(event) {
    event.preventDefault();

    const newTask = {
        priority: priorityInput.value,
        title: titleInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
        status: taskForm.dataset.status
    };
   if (newTask.title == "" || newTask.date === "")
{
    errorText.innerText='Some Inputs are empty!!'
    errorText.className='text-green text-center'
}
else {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (editMode) {
        console.log("to edit",tasks[taskIndexToEdit], taskIndexToEdit )
        console.log("new", newTask)
         tasks[taskIndexToEdit] = newTask;
         console.log("to edit",tasks[taskIndexToEdit], taskIndexToEdit )

    } else {
        tasks.push(newTask);
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
        
        
        taskCard.innerHTML = `
            <div class="absolute top-0 left-0 w-full h-2 ${task.priority === '1' ? 'bg-red-500' : task.priority === '2' ? 'bg-yellow-500' : 'bg-green-500'} rounded-t-3xl"></div>
            <div class="flex flex-col px-4 h-full justify-center items-center relative">
                <div class="absolute top-4 right-2" >
                    <svg onclick="showModal('Edit Task', '${task.status}', '${task}', '${index}')" xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" class="fill-current text-gray-600">
                        <path d="m14.06 9.02l.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"/>
                    </svg>
                </div>
                <div class="font-semibold text-gray-800 mt-4">${task.title}</div>
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
        nbrTodoArea.innerText=nbrTodo

    });
}

displayTasks(tasks);

function filterTodo(){
    const todoTasks = tasks.filter(tasks => tasks.status === "todo")
    var customSort = function(a,b) {
        if (a.priority === b.priority) return 0;
        if (a.priority > b.priority) return 1;
        return -1;
    };
    
    console.log("before sorting");
    for (var i = 0; i < todoTasks.length; i++) {
        console.log(todoTasks[i].title);
    }
    todoTasks.sort(customSort);
    
    console.log("after sorting");
    for (var i = 0; i < todoTasks.length; i++) {
        console.log(todoTasks[i].title);
    }
    // for(let i =0; i< todoTasks.length-1; i++){
    //     if(todoTasks[i].priority == 'P2' && todoTasks[i+1].priority == 'P1' || todoTasks[i].priority == 'P3' && todoTasks[i+1].priority == 'P1' )
    //     {
    //         let temp = todoTasks[i];
    //         todoTasks[i] = todoTasks[i+1];
    //         todoTasks[i+1]=temp;
    //         var j = i;
    //     }
    // }
    // for(let i =j; i< todoTasks.length-1; i++){
    //     if(todoTasks[i].priority == 'P3' && todoTasks[i+1].priority == 'P2' )
    //     {
    //         let temp = todoTasks[i];
    //         todoTasks[i] = todoTasks[i+1];
    //         todoTasks[i+1]=temp;
    //     }
    // }

    console.log("filter",todoTasks)
    displayTasks(todoTasks)
}
filterTodo();
