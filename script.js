const taskBtn = document.querySelector("#taskBtn")
const taskList = document.querySelector("#taskList")
const taskInput = document.querySelector("#taskInput")

taskBtn.addEventListener("click", function(){
    const li = document.createElement('li');
    const taskInputValue = taskInput.value;
    li.textContent = taskInputValue; 
    taskList.appendChild(li);
    const span = document.createElement('span')
    span.textContent = taskInputValue;
    const button = document.createElement('button')
    button.textContent = 'Excluir'
    button.addEventListener('click', function(){
        li.remove();
    })


    li.appendChild(span)
    li.appendChild(button)

    if (taskInputValue == ''){
        return
    }
})