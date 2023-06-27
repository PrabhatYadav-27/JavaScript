//function i n javascript
//what is function declaration

/*
function square(num){
    return num*num;
}
*/

//what is function expression

/*
const square = function (num){
    return num*num;
}

console.log(square(5));

  */

//What is a first class function

/*
function square (num){
    return num*num;
}

function displaySquare(fn){
    console.log(" Square is " + fn(5));
}

displaySquare(square);
*/

//What is IIFE
//an iife is immediately invoke function expression

/*
//regular function

function square(num){
    console.log(num*num);
}
square(5);

//iife
(function square(num){
    console.log(num*num);
})(5);
*/

//o/p based on iife
/*
(function(x){
    return (function(y){
        console.log(x);
    })(2);
})(1);

//op =>1

*/

//function scope o/p
/*

for(let i=0;i<=5;i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}

//op=> 0,1,2,3,4,5
*/
/*
//function hoisting

functionName();
function functionName(){
    console.log("hello sir jii");
}
console.log(x);
var x=5;
//op=> Hello sirji
//undefined
*/

/*
//params vs argumnets

function square(num){
    //num=> params/parameter
    console.log(num*num);
}

square(5);
//(5)=> argumnents
*/

//spread vs rest

/*
function multiply(num1,num2){
    console.log(num1*num2);

}
multiply(5,6);
*/
/*
function multiply(...nums)//...nums=>rest operator
{
    console.log(nums[0]*nums[1]);
}
var arr=[5,6];
multiply(...arr); // ...arr =>spread operator

*/
/*
//e.g

const fn =(a,x,y,...numbers) =>{
    console.log(x,y,numbers);
};
fn(5,6,12,45,87,90);
//op=> 6,12 [45,87,90]
*/

//what is callback function
/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/ 
/*
function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);
  */

  //arrow function

// const add = (first,second)=>{
//     return first + second ;
// };
//  console.log(add(2,8));

 //syntax
 //implicit retrun keyword (no need to write return for oneline in arrow fucnctn)
 //arguments should define in arrow function
//this keyword diiference

//function calling the other function
const  cutfruit= function(fruit){
    return fruit * 4;
};
const fruitprocessor = function(apples,oranges){
    const applepice=cutfruit(apples);
    const orangepice =cutfruit(oranges);
    const  juice =`juices with ${applepice} apples and ${orangepice} oranges`;
    return juice;
} 
console.log(fruitprocessor(2,5));   

//function declaration
function calAge(birthYear){
    return 2037 - birthYear;
}

//function expression
const calAge = function(birthYear){
    return 2037- birthYear;
}

//arrow function
const calAge = birthYear => 2037-birthYear;