let masterToDoList = [];

function renderTodoList(todos) {
	let html = '';
	todos.map(
		(todo, i) =>
			(html += `
      <li onclick='toggleDone(${i})'>
        <span class="${todo.isDone ? 'is-done' : ''}">${todo.text}</span>
        <a href='#' onclick='remove(${i});event.stopPropagation();'>
          <i class="fas fa-trash-alt"></i>
        </a>
     	</li>`)
	);
	document.getElementById('todo-list').innerHTML = html;
}

function remove(index) {
	masterToDoList.splice(index, 1);
	renderTodoList(masterToDoList);
}

function addToDo() {
	let inputValue = document.getElementById('todo').value;
	masterToDoList.push({ text: inputValue, isDone: false });
	document.getElementById('todo').value = '';
	renderTodoList(masterToDoList);
}

function toggleDone(index) {
	console.log(index);
	masterToDoList[index].isDone = !masterToDoList[index].isDone;
	renderTodoList(masterToDoList);
}

function toggleUndone() {
	let unDoneToDoList = masterToDoList.filter(todo => todo.isDone === true);
	document.getElementById('undone-only').checked ? renderTodoList(masterToDoList) : renderTodoList(unDoneToDoList);
}
