const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

//string만 포함된 변수는 대문자로 작성 관습
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    //반복1 greeting.classList.remove(HIDDEN_CLASSNAME);
    //반복2 greeting.innerText = `Hello ${username}`;
    paintGreetings(savedUsername);
    
}

//반복된 문장을 함수로 만들어주기
function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


//loginForm.addEventListener("submit", onLoginSubmit); IF문 내로 이동

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    //반복1 greeting.classList.remove(HIDDEN_CLASSNAME);
    //반복2 greeting.innerText = `Hello ${username}`;
    paintGreetings(savedUsername);
}

//want the infromation

//handleLinkClick({information about the event that just happend});