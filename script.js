const btn = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
    //console.log("Crear tarea");
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const value = input.value;
    console.log();

};

console.log(btn);

/* btn.addEventListener('click', (evento) => {
    //console.log("Crear tarea");
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);

}); */

btn.addEventListener('click', createTask);