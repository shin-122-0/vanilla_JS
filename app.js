const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    //const clickedClass = "clicked"; Toggle로 한번만 사용하기에 정의도 필요없음.
    h1.classList.toggle("clicked");
}

h1.onclick = handleTitleClick;
//h1.addEventListener("click", handleTitleClick);