//JS에서는 변수에서 const / let  systax를 붙여줘야함
let a =5;
const b = 2;
let myName = "Youn";

//console에 메세지를 보냄
//log : 콘솔에 괄호 안의 값을 프린트
console.log(a + b);
console.log(a / b);
console.log("hello " + myName);

//let 자료형은 변수 값 업데이트 가능
myName = "Youn Hyeonseo";
console.log("Your name is " + myName);

//datatype : boolean -> true/false
const bool = true;
const amIFat = null; //null : 아무것도 없음을 정의해줌
let something; //undefined, 변수는 있는데 정의되지 않음
console.log(amIFat, something);



/*  
*
* array(배열)   
*
*/
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const nonsense = [1, 2, "hello, World!", false, null, true, undefined]
console.log(daysOfWeek, nonsense);

//Get Item From Array
console.log(daysOfWeek[2]);

//Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);



/*  
*
* Objects  
*
*/

const player1 = {
    name : "nico",
    points : 200,
    fat : false,
};

console.log(player1);
console.log(player1.name);



/*  
*
*function (함수) 
*
*/
function plus(num1, num2){
    console.log(num1 + num2); //NaN : not a number
}
function divide(num1, num2){
    console.log(num1 / num2);
}

plus(8, 60);

//obj 안에 함수 넣기
const player2 = {
    name : "youn",
    sayHello : function(otherPersonsName){
        console.log("hello " + otherPersonsName + "nice to meet you!");
    },
};
player2.sayHello("lynn");

//calculator obj만들기
const calculator = {
    plus : function(a, b){
        console.log(a+b);
    },
    minus : function(a, b){
        console.log(a-b);
    },
    divide : function(a, b){
        console.log(a/b);
    },
    times : function(a, b){
        console.log(a*b);
    },
    power : function(a, b){
        console.log(a**b);
    },
}

calculator.plus(5, 2);
calculator.minus(5, 2);
calculator.divide(5, 2);
calculator.times(5, 2);
calculator.power(5, 2);

//console.log나 alert() 사용을 지양함
//결과값을 얻어서 활용하기 위함
const forenigerAge = 96;
function calculateKrAge(ageOfForenigner) {
    return ageOfForenigner + 2; // 결과값을 리턴해서
}
const krAge = calculateKrAge(forenigerAge); // 리턴값을 변수에 저장해주면 활용 가능
console.log(krAge);

//개선한 calculator
const newCalculator = {
    plus : function(a, b){
        return a+b;//return 하면 함수 끝.
    },
    minus : function(a, b){
        return a-b;
    },
    divide : function(a, b){
        return a/b;
    },
    times : function(a, b){
        return a*b;
    },
    power : function(a, b){
        return a**b;
    },
}
const plusResult = newCalculator.plus(2, 3); // 2 + 3 = 5
const minusResult = newCalculator.minus(plusResult, 10); //5 - 10 = -5
const timesResult = newCalculator.times(10, minusResult); // 10 * -5 = -50
const divideResult = newCalculator.divide(timesResult, plusResult); // -50 / 5 = -10
const powerResult = newCalculator.power(divideResult, minusResult); // -10 ** -5 




/* 
* Conditionals (조건문) 
*/

// const age = prompt("How old are you?"); //prompt : 입력할 때 까지 JS pause, 요즘엔 안 씀
// console.log(age);
// console.log(typeof age); // prompt로 받은 자료의 자료형은 string

// //change type
// console.log(typeof parseInt(age)); // number로 형변환, 숫자가 아닌 걸 형변환하면 NaN

const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age));//isNaN : return boolean

// if(condition){
//     /// condition === true
// } else {
//     ///condition === false
// }

//if-else
if(isNaN(age)){
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}

//if - else if - else
if(isNaN(age) || age < 0){// || : or
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young.")
} else if (age >= 18 && age <= 50) { // && : and  
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age === 100){
    console.log("wow, you are wise");
} else if (age > 80){
    console.log("You can do whatever you want.");
}