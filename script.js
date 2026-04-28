const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")

function createSpan(taskInputValue){
    const span = document.createElement('span');
    span.textContent = taskInputValue;
    span.addEventListener("click", function(){
        span.classList.toggle('completed');
    
    })
    return span;
}

function createDeleteButton(li){
    const button = document.createElement('button');
    button.textContent = 'Excluir';
        button.addEventListener('click', function(){
        li.remove();
    })
    return button;
}

function addTask(){
    const li = document.createElement('li');
    const taskInputValue = taskInput.value;
    if (taskInputValue == ''){
        return
    }

    const span = createSpan(taskInputValue);
    const button = createDeleteButton(li);

    li.appendChild(span)
    li.appendChild(button)

    taskList.appendChild(li);
}

taskBtn.addEventListener("click", addTask)

const clearBtn = document.querySelector("#clearBtn");

function clearTasks(){
    taskList.innerHTML = '';
}

clearBtn.addEventListener("click", clearTasks);

taskInput.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        addTask();
    }
});

function addTask(){
    const li = document.createElement('li');
    const taskInputValue = taskInput.value;

    if (taskInputValue == ''){
        return;
    }

    const span = createSpan(taskInputValue);
    const button = createDeleteButton(li);

    li.appendChild(span);
    li.appendChild(button);

    taskList.appendChild(li);

    taskInput.value = '';
}

const taskCounter = document.querySelector("#taskCounter");
function updateCounter(){
    const total = taskList.children.length;
    taskCounter.textContent = `Tarefas: ${total}`;
}

updateCounter();