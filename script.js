const taskBtn = document.querySelector("#taskBtn");
const taskList = document.querySelector("#taskList");
const taskInput = document.querySelector("#taskInput");
const clearBtn = document.querySelector("#clearBtn");
const clearCompletedBtn = document.querySelector("#clearCompletedBtn");
const taskCounter = document.querySelector("#taskCounter");


function updateCounter() {
    const total = taskList.querySelectorAll("li").length;
    const completed = taskList.querySelectorAll(".completed").length;

    taskCounter.textContent = `${completed} de ${total} tarefas concluídas`;
}


function createSpan(taskInputValue) {
    const span = document.createElement("span");
    span.textContent = taskInputValue;

    span.addEventListener("click", function () {
        span.classList.toggle("completed");
        updateCounter();
    });

    return span;
}


function createDeleteButton(li) {
    const button = document.createElement("button");
    button.textContent = "Excluir";

    button.addEventListener("click", function () {
        li.remove();
        updateCounter();
    });

    return button;
}


function createEditButton(span) {
    const button = document.createElement("button");
    button.textContent = "Editar";

    button.addEventListener("click", function () {
        const novoTexto = prompt("Editar tarefa:", span.textContent);

        if (novoTexto !== null && novoTexto.trim() !== "") {
            span.textContent = novoTexto;
        }
    });

    return button;
}


function addTask() {
    const li = document.createElement("li");
    const taskInputValue = taskInput.value;

    if (taskInputValue === "") return;

    const span = createSpan(taskInputValue);
    const deleteBtn = createDeleteButton(li);
    const editBtn = createEditButton(span);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
    updateCounter();
}


function clearTasks() {
    taskList.innerHTML = "";
    updateCounter();
}


function clearCompletedTasks() {
    const completedTasks = taskList.querySelectorAll(".completed");

    completedTasks.forEach(task => {
        task.parentElement.remove();
    });

    updateCounter();
}


taskBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearTasks);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});


updateCounter();