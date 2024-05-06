const age = parseInt(prompt("How old are you?"));
if (isNaN(age) || age<0){
	console.log("Please write a real positive number.");
} 
else if(age<18){
	console.log("You are too young!");
}
else if(age>=18 && age<=50){
	console.log("You can drink!");
}
else if(age>50 && age<=80){
	console.log("You should exercise...");
}
else if(age === 100){
	console.log("Wow you are wise!");  //순서 중요! 맨 끝에 적으면 실행X
}
else if(age>80){
	console.log("You can do whatever you want!"); //101을 입력하면 이 조건문이 실행됌.
}
