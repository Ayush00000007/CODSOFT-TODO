document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener('click', function() {
        addTodo();
    });

    todoInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value;
        if (todoText.trim() !== '') {
            createTodoItem(todoText);
            todoInput.value = '';
        }
    }

    function createTodoItem(text) {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';

        const itemText = document.createElement('span');
        itemText.textContent = text;
        todoItem.appendChild(itemText);

        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'button-container';

        const editButton = createButton('Edit', 'edit-button');
        const doneButton = createButton('Done', 'done-button');
        const deleteButton = createButton('Delete', 'delete-button');

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(doneButton);
        buttonContainer.appendChild(deleteButton);

        todoItem.appendChild(buttonContainer);

        todoList.appendChild(todoItem);

        editButton.addEventListener('click', function() {
            todoInput.value = text;
            todoInput.focus();
            todoList.removeChild(todoItem);
        });

        doneButton.addEventListener('click', function() {
            itemText.classList.toggle('done');
        });

        deleteButton.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });
    }

    function createButton(text, className) {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = className;
        return button;
    }
});
