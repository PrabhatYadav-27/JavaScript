//map filter reduce
 /*
const nums =[1,3,5,6];
const multiplybyfive = nums.map((num,i,arr)=>{
    return num*5 ;
})
console.log(multiplybyfive)
*/

//Filter 
/*
 const nums =[1,2,3,4];
 const morethantwo = nums.filter((num)=>{
    return num>2;

 })
console.log(morethantwo);
*/

//Reduce 
/*
const nums=[1,2,3,4];
const sum = nums.reduce((acc,curr,i,arr)=>{
    return acc+curr;

},0);

console.log(sum);
*/

//plyfill for map

//Array.map((num,i,arr)=>{})

/*
Array.prototype.myMap = function(cb){
    //empty array
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}
const nums =[1,2,3,4];
const multiplybytwo = nums.myMap((num,i,arr)=>{
    return num*2;

});
console.log(multiplybytwo);

*/

//Ployfill for filter

/*
Array.prototype.myFilter = function(cb){
    let temp =[];
    for(let i =0;i<this.length;i++){
        if(cb(this[i],i,this))
        temp.push(this[i]);
    }
    return temp;
}

const nums =[1,2,3,4];
const morethantwo = nums.myFilter((num)=>{
    return num>2;

});
console.log(morethantwo);

*/
//Ployfill for reduce

/*
Array.prototype.myReduce = function(cb,initialvalue){
    var accumulator = initialvalue;
    for(let i=0;i<this.length;i++){
        accumulator =accumulator ? cb(accumulator,this[i],i,this) : this[i];

    }
     return accumulator;
}
const nums =[1,2,3,4];
const sum = nums.myReduce((acc,curr,i,arr)=>{
    return acc+curr;
},0);
console.log(sum);
*/

//difference between map and foreach

//map 
/*
it can modify the array and produce new array
 we can perform certain action on map
 */
/*
const arr=[2,5,6,8];
 const mapResult =arr.map((ar)=>{
    return ar*5;

 });
 console.log(mapResult);
*/

//ForEach
/* 
we cannot just modify the element of array
*/

/*
const  arr=[1,2,5,8];
const foreachResult =arr.forEach((ar)=>{
    return ar+2;
});
console.log(foreachResult);
*/
/*
wecan only change the main array  but acces to 
each of the element and modify is not accesible as like map
*/ 

/*
const  arr=[1,2,5,8];
const foreachResult =arr.forEach((ar,i)=>{
    arr[i] = ar + 3;
});
console.log(foreachResult,arr);
*/

//acces the rollnum
let students =[
    {name:"piyush", rollnum:31,marks:80},
    {name:"jerry", rollnum: 32,marks:88},
    {name:"perry", rollnum: 33, marks:92},
    {name:"henrry", rollnum: 34, marks:95},

    
];
//1st approach
/*
let names =[];
for(let i=0;i<students.length;i++){
    names.push(students[i].name.toUpperCase());
}
console.log(names);
*/

//2nd approach
/*
const names =students.map((stu)=> stu.name.toLocaleUpperCase());
console.log(names);
*/

//return only details of those who scored more than marks

/*
const details = students.filter((stu)=> stu.marks >90);
console.log(details);
*/

// more than 60 marks and rollnum greater than 32
/*
const details =students.filter((stu)=> stu.marks >85 && stu.rollnum > 32);
console.log(details);
*/

//sum of marks of all students

/*
const sum = students.reduce((acc,curr)=>acc+curr.marks,0);
console.log(sum);
*/

// return only name of students who scored more than 85

/*
const naam = students.filter((stu)=> stu.marks>85).map((stu)=>stu.name);
console.log(naam);
*/

/* return  total marks of students with marks ore than 90
    after 20 marks have been added to those who scored less than 90

*/
const totalmarks = students.map((stu)=>{
    if(stu.marks < 90){
        stu.marks +=20;
    }
    return stu;

}).filter((stu)=> stu.marks > 95)
.reduce((acc,curr)=> acc+curr.marks,0);
console.log(totalmarks);

