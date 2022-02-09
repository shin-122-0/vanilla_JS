function plus(fisrtNumber, secondNumber){
    console.log(fisrtNumber + secondNumber);
}

function divide(a, b){
    console.log(a/b);
}


plus(8, 60);
divide(4, 20);

// function sayHello(){console.log("hello!");}는 리스트 안에서 아래와 같이 변형됨.

const player = {
    name: "shinyoung",
    sayHello: function(otherPersonsName) {
        console.log("hello! " + otherPersonsName + " Nice to meet you!");
    },
};

console.log(player.name);
player.sayHello("Han");