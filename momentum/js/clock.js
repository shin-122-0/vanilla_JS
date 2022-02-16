const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //string화 시켜서 padstart삽입.
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    //백틱사용~
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //clock 대체 텍스트
    //clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
//처음엔 바로 실행
getClock();
//1초 지날 때마다 실행
setInterval(getClock, 1000);