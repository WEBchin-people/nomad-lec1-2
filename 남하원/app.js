const age = parseInt(prompt("How old am I?"))

if(isNaN(age) || age < 0){
    console.log("You have to enter a positive number")
}
else if(age>24){
    console.log("I'm not that old. I'm a little younger")
}
else if(age<24){
    console.log("I want to be as young as you guessed, but I'm older.")
}
else {
    console.log("It's great! It's my age")
}