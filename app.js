const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

const link = loginForm.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(event);

}

function handleLinkClick(event){
    //기본동작 방지  prevenDefault 링크 눌러도 이동안함.
    event.preventDefault();
    console.dir(event);
    //alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

//want the infromation

//handleLinkClick({information about the event that just happend});