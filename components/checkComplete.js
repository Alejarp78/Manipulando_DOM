export const checkComplete = () => {
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

//export default checkComplete;