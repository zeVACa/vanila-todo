const app = document.querySelector('#root');

function insertNewTodo(textData) {
   const li = document.createElement('li');
   li.textContent = textData;
   li.classList.add('todo-item')
   ol.append(li);

   const removeItemButton = document.createElement('input');
   removeItemButton.type = 'button';
   removeItemButton.value = '✕';
   removeItemButton.classList.add('todo-remove-button');

   removeItemButton.addEventListener('click', (event) => {
      event.preventDefault();
      removeParentItem(removeItemButton);
   })

   li.append(removeItemButton)
}

function removeParentItem(item) {
   console.log(item.parentNode);
   item.parentNode.remove();
}

const todoList = document.createElement('div');
todoList.classList.add('todo');
app.append(todoList);

const todoTitle = document.createElement('h1');
todoTitle.textContent = 'add todo';
todoTitle.classList.add('todo-title')
todoList.append(todoTitle);

const addTodoInput = document.createElement('input');
addTodoInput.placeholder = 'print todo';
addTodoInput.classList.add('todo-input')
todoList.append(addTodoInput);


const addTodoButton = document.createElement('button');
addTodoButton.classList.add('todo-enter-button')
addTodoButton.textContent = 'enter todo';
todoList.append(addTodoButton);

addTodoButton.addEventListener('click', (e) => {
   e.preventDefault();
   if (addTodoInput.value) insertNewTodo(addTodoInput.value);
   addTodoInput.value = '';
});

const ol = document.createElement('ol');
todoList.append(ol);


const basicTodoList = ['learn HTML', 'learn css', 'learn vanila basics', 'make awseme todo app']

basicTodoList.map((item) => {
   insertNewTodo(item);
})
