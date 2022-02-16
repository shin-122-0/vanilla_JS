const clock = document.querySelector("h2 #clock");

//every 2 sec play this 
function sayHello() {
    console.log("hello");
}
//바로 실행한다, ms마다. (5sec = 5000)
setInterval(sayHello, 5000);

