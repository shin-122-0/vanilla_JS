const playerName = "shinyoung";
const playerPoints = 121212;
const playerHair = "long";
const playerWallet = false;

// comment로 설명하기?
// player[0] == name
// player[1] == points 
const playertest = ["shinyoung", 1212, false, "long"];

// use Object
const player = {
    name: "shinyoung",
    points: 120,
    hair: "long",
    Wallet: false,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.Wallet = true;
player.lastName = "Han";
console.log(player);

player.points = player.points + 15;
console.log(player.points);