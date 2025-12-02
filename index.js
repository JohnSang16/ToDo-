const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');
const addButton = document.querySelector('#addBtn');
const deleteButton = document.querySelector('#deleteBtn');

addButton.addEventListener('click', ()=> {
const content = document.createElement('li');
content.textContent = input.value;
    if (input.value.trim() !== ''){
        ul.appendChild(content);
        input.value = '';
    }
})

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        const content = document.createElement('li');   
        content.textContent = input.value;

        if (input.value.trim() !== ''){
            ul.appendChild(content);
            input.value = '';
        }
    }
})

  
deleteButton.addEventListener('click', ()=> {
const lastInput = ul.lastElementChild;

if(lastInput){
    ul.removeChild(lastInput);
    }
})



