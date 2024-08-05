( () => {
    
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
    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerHTML = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const content = `

    
    <i class="fas fa-trash-alt trashIcon icon"></i>`

    //task.innerHTML = content;
    task.appendChild(taskContent);
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

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTask);
    return i;
};

// Immediately invoked function expresion IIFE

const completeTask = (event) => {
    const elemnt = event.target;
    elemnt.classList.toggle('fas');
    elemnt.classList.toggle('completeIcon');
    elemnt.classList.toggle('far');
};

} ) ();