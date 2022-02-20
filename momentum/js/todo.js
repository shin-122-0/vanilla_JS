const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    //string뿐만 아니라 array형식까지 저장하기.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    //old array를 두고 남은 값만 new array를 생성해서 저장함.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }
  
  function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
  }

  function handleToDoSubmit(event) {
    event.preventDefault();
    //value 값은 newTodo에 저장.
    const newTodo = toDoInput.value;
    //저장 후에 비움
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
    }
  
  toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }
// arrow function과 동일.

  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //이전에 저장해둔 array를 다시 불러와서 추가함.
    toDos = parsedToDos;
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    //이미 만들어둔 paintToDo 함수를 사용.
    parsedToDos.forEach(paintToDo);
  }



