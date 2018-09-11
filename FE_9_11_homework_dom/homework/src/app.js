let itemCounter = 0;
const MAXIMUM_ITEMS = 10;

// Adding html elements by their class
const maximumMessage = document.querySelector('.maximum-message');
const inputField = document.querySelector('.todo-add_input');
const addButton = document.querySelector('.todo-add_button');
const todoList = document.querySelector('.todo-list');

// Checking if input field is not empty
inputField.oninput = function(event) {
    const inputText = inputField.value;
    addButton.disabled = !inputField;

    if (event.key === 'Enter' && inputText) {
        addItem(inputText);
    }
}

addButton.onclick = function() {
    addItem(inputField.value);
}
// Adding new list items 
const addItem = function(inputText) {
    const listItem = document.createElement('li'); // New list item 
    listItem.setAttribute('class', 'todo-list_item');
    listItem.setAttribute('draggable', true);
        
    const text = document.createElement('span'); // Text of input 
    text.appendChild(document.createTextNode(inputText));

    const checkIcon = document.createElement('i'); // Not checked checkbox icon
    checkIcon.setAttribute('class', 'material-icons');
    checkIcon.appendChild(document.createTextNode('check_box_outline_blank'));

    const deleteIcon = document.createElement('i'); // Remove icon
    deleteIcon.setAttribute('class', 'material-icons');
    deleteIcon.appendChild(document.createTextNode('delete'));

    const checkButton = document.createElement('button'); // Checkbox button
    checkButton.setAttribute('class', 'todo-list_checkbox');

    const deleteButton = document.createElement('button'); // Remove button
    deleteButton.setAttribute('class', 'todo-list_remove_item');

    checkButton.appendChild(checkIcon); // Adding Not checked icon to checkbox button
    checkButton.appendChild(text); // Adding input text to checkbox button
    deleteButton.appendChild(deleteIcon); // Adding remove icon to remove button
    listItem.appendChild(checkButton); // Adding checkbox button to the list item
    listItem.appendChild(deleteButton); // Adding remove button to the list item
    todoList.appendChild(listItem); // Adding list item to the list 

    if (++itemCounter >= MAXIMUM_ITEMS) { // Checking if number of items in the list < 10
        inputField.disabled = true;
        maximumMessage.style.visibility = 'visible';
    }

    checkButton.onclick = function() { // Marking checkbox as 'checked'
        checkIcon.textContent = 'check_box';
    }

    deleteButton.onclick = function() { // Deleting an element
        listItem.remove();
        itemCounter--;
        inputField.disabled = false;
        maximumMessage.style.visibility = 'hidden';
    }

    inputField.value = ''; // Refresh input field after adding item to the list 
    addButton.disabled = true;
}
// Dragging and dropping list elements
let dragged;

todoList.addEventListener('dragstart', function(event) {     
    dragged = event.target;      
    event.target.style.opacity = 0.5;
}, false);

todoList.addEventListener('dragend', function(event) {     
    event.target.style.opacity = '';
}, false);
  
todoList.addEventListener('dragover', function(event) {     
    event.preventDefault();
}, false);

todoList.addEventListener('dragenter', function(event) {      
    if (event.target.className === 'todo-list_item') {
        event.target.style.border = 'dotted';
    }
}, false);

todoList.addEventListener('dragleave', function(event) {      
    if (event.target.className === 'todo-list_item') {
        event.target.style.border = '';
    }
}, false);

todoList.addEventListener('drop', function(event) {     
    event.preventDefault();     
    if (event.target.className === 'todo-list_item') {
        event.target.style.border = '';
        todoList.insertBefore(dragged, event.target);
    }    
}, false);