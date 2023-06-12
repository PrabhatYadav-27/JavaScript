/*
//Lexical scope
var name1 ="Learner";
//global scope

function local(){
    //local scope
    console.log(name1);
}
local(); 
*/

//Closures

/*
function makefunc(){
    var name ="javascript";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
 makefunc()();

// var myfunc = makefunc();
// myfunc();

*/

//Closure scope chain
//accessing from each and every scope is scope chain
/*
//global scope
var username ="rohit";
function makefunc(){
    //outerscope
    var name="JavaScript";
    function displayName(){
        console.log(name,username);
    }
    return displayName;
}
makefunc()();
*/

//e.g
/*
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
*/

/*
//what will be console

let count =0;
(function printCount(){
    if(count ===0){
        let count =1; //shadowing
        console.log(count); //1
    }
    //count =0
    console.log(count); //0
}) ();
//op=>1 ,0

*/
/*
// write a function that would allow you to do this
// var addsix = createBase(6);
// addsix(10);//16
// addsix(21);//27

function createBase(num){
    return function(innernum){
        console.log(num+innernum);
    };
}

var addsix = createBase(6);
addsix(10);//16
addsix(21);//27

*/

//time optimization
//without closure
/*

function find(index){
    let a =[];
    for(let i=0;i<1000000;i++){
        a[i] =i*i;
    }

    console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");
console.time("12");
find(12);
console.timeEnd("12");

*/

/*
//with closure


function find(){
    let a =[];
    for(let i=0;i<1000000;i++){
        a[i] =i*i;
    }
    return function(index){
        console.log(a[index]);
    }

    
}
 const closure =find();
console.time("6");
closure(99);
console.timeEnd("6");
console.time("12");
closure(50);
console.timeEnd("12");

//op=> time is optimize with closure 

*/

/*
//setTimout output

function a(){
    for(var  i=0;i<3;i++){
        setTimeout(function log(){
            console.log(i);
            //what is logged?
        },i*1000);
    }
}
a();
//op=> 3 just because of var as it is a not local scope
//using let will print 0,1,2(let is a block scope)
*/

/*
//with closure

for(var i=0;i<3;i++){
    function inner(i){
        setTimeout(function log(){
            console.log(i);

        },i*1000);
    } 
    inner(i);
}
//op=>0,1,2 by using closure it is poosbile to use var as block scope
*/
 /*
//how would you use a closure to create a private counter ?

function counter(){
    var _counter=0;
    function add(increament){
        _counter += increament;
    }

    function retrieve(){
        return "counter =" + _counter;
    }

    return{
        add,
        retrieve,
    };
}

const c =counter();
c.add(5);
c.add(10);
console.log(c.retrieve(c));
//op=> counter = 15
*/

/*
//what is a module pattern?

var module =(function(){
    function privatemethod(){
        //do something
        console.log("private");
    }
    return {
        publicmethod: function(){
            console.log("public");
        },
    } ;  
})();

module.publicmethod();
module.privatemethod();
//op=> public and nextline will throw an error
*/

//make this run only once
/*
let view;
function likethevideo(){
    view ="javascript learner";
    console.log("Subsribe to " ,view);

}

likethevideo();
likethevideo();
likethevideo();
likethevideo();
//op=> multiple line of Subscribe to javascript learner
*/

/*
let view ;
function likethevideo(){
    let called =0;
    return function(){
        if(called >0){
            console.log("Already subscribed");
        }
        else{
            view= "JavaScript Learner";
            console.log("Subscribe to" , view);
            called++;
        }
    };
}

let isSubscribed = likethevideo();
isSubscribed()
isSubscribed()
isSubscribed()
isSubscribed(
    
)
//op=> Subsrcribed to Javascript learner and already subscribed
*/
/*

//once polyfill
function once(func,context){
    let ran;
    return function(){
        if(func){
            ran = func.apply(context || this, arguments);
            func =null;
        }
        return ran;
    };

}

const hello =once((a,b)=>{
    console.log("hello",a,b);   
})

hello(1,2);
hello(1,2);
hello(1,2);
//op=> hello 1 2 only one time will print   

*/

/* implement caching /memoize function 
or memoize polyfill
*/

/* 
// withou implementation
const clumsysquare =(num1,num2) =>{
    for(let i=1;i<=10000000;i++){}
    return num1*num2
}

console.time("first call");
console.log(clumsysquare(9467,7649));
console.timeEnd("first call");
console.time("first call");
console.log(clumsysquare(9467,7649));
console.timeEnd("first call"); 
//op=> 72413083 first call 13:6791...  
*/  
//with implementation

function myMemoize(fn,context ){
    const res={};//cache for function
    return function(...args){
        var argsCache =JSON.stringify(args);
        if(! res[argsCache]){
            res[argsCache] = fn.call( context || this, ...args);
        }
        return res[argsCache];
        
    }
}

res ={
    "5,6" : 30,
};
const clumsyproduct =(num1,num2) =>{
    for(let i=1;i<=10000000;i++){}
    return num1*num2
}
const memoized = myMemoize(clumsyproduct);

console.time("first call");
console.log(memoized(9467,7649));
console.timeEnd("first call");
console.time("first call");
console.log(memoized(9467,7649));
console.timeEnd("first call"); 

//op=> 72413083 firstcall = 11.311 2nd call=  0.111 thisis caching