const age = parseInt(prompt("How old are you?") );

if (isNaN(age)) {
    /// condition === true
    console.log("Please write a number");
}
else if (age < 18) {
    /// condition === false
    console.log("You are too young.");
}
else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
}
else if (age > 50 && age <= 80){
    console.log("You should exercise!");
}
else {
    /// condition === false agatin
    console.log("Save your health!");
}

