const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

function onLoginSubmit(event) {
    ///prventDefault는 기본 동작을 멈춤. ex. 엔터로 제출, 버튼으로 제출 등
    event.preventDefault();
    // const username = loginInput.value;
    console.log(event);
    // if(username === "") {
    //     alert("Please write your name.");
    // }
    // else if(username.length > 15) {
    //     alert("Your name is too long.")
    // }
}

loginForm.addEventListener("submit", onLoginSubmit);
