const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    //console.log("Crear tarea");
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    const list = document.querySelector("[data-list]");
    // const task = document.querySelector('[data-task]');
    const task = document.createElement("li");
    task.classList.add('card');
    input.value = '';
    //backticks
    const content = `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`
    task.innerHTML = content;

    list.appendChild(task);


    //console.log(value);
    console.log(content);
};

console.log(btn);

/* btn.addEventListener('click', (evento) => {
    //console.log("Crear tarea");
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);

}); */

btn.addEventListener('click', createTask);