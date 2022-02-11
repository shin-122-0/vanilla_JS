const h1 = document.querySelector("div.hello:first-child h1");

//console.dir(h1);

/// === means check equality
/// = means "IS"

function handleTitleClick(){
    const currentColor = h1.style.color;
    ///let으로 변할 수 있는 변수를 생성. 내부는 비어있음.
    let newColor;
    if (currentColor === "blue") {
        newColor = "tomato";
    }
    else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.onclick = handleTitleClick;
//h1.addEventListener("click", handleTitleClick);