import { checkComplete } from "./components/checkComplete.js";
import { deleteIcon } from "./components/deleteIcon.js";

//( () => {
    
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
    //taskContent.appendChild(deleteIcon());

    //task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);


    //console.log(value);
    //console.log(content);
};

console.log(btn);

/* btn.addEventListener('click', (evento) => {
    //console.log("Crear tarea");
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);

}); */

btn.addEventListener('click', createTask);


//} ) ();