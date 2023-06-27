const friend1 = "Micheal";
const friend2 ="peter";
const friend3 =" steven";

//to overconme above problem we use array  which stores the same data structure of data  they are mutable with const too.

const  friends =["Micheal", " Peter","Steven"];
console.log(friends);
console.log(friends[1]); // to call out the first element of array
console.log(friends.length) //to get the total length of the array
console.log(friends[friends.length-1]) //last element;

//change the elements in array
friends [2] = 'Mourya';
console.log(friends);

//Another method for array
const years = new Array(1991,2003,4500);
console.log(years);

// it accept expression
const fristName = 'jonas';
const jonas =[fristName , 'shumcar' ,2037-1991,'teache', friends];
console.log(jonas);

//exercise practicing
 const calAge = function (birthYear){
    return 2037 - birthYear;
 }

 const year =[1990,1967,2002,2018];

 //for iterating over the array

 for( let i =0;i<year.length;i++){
    console.log(year[i]);
 }

 //Arrays methods

 //push at the end of the array
 friends.push('jay') ;
 console.log(friends);
 //find length by storing in variables
 const newLength =friends.push('mamamay');
 console.log(newLength);

 //add at the beginning of the array
 friends.unshift('Rahulyama');
 console.log(friends);

 //rEMOVE ELEMENT
//remove 1st element
friends.pop();
console.log(friends);

//this also removes the first element of the array
friends.shift();
console.log(friends);

//to find the position of the elements in the array
console.log(friends.indexOf('jay'));

//this is es7 method to find element present or not true or false

console.log(friends.includes('jay'))
console.log(friends.includes('harm'));

if(friends.includes('jay')){
    console.log("You have someone by the name jay");
}else{
    console.log('no you dont have anyone by jay in the list');
}


//OBJECTS
//use for more unstructures data

const details = {
    Name : 'MICHELE Lellle' ,
    Age : 26,
    Location: 'Brrhain',
    Job: 'Teacher',
    Frind :['murry','merphy','jonhy']

};

console.log(details);

//By using dot notation
 console.log(details.Job);

 //By using the bracket notation

 console.log(details['Name']);


//Methos in Objects

const jonhy = {
    firstName : 'Jonas',
    lastName : 'melle',
    birthYear : 1991,
    Job:'teacher',
    friends :['mociheel','graudy','plesass'],

    // calAge : function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calAge: function(){
    //     console.log(this );
    //     return 2037 -this.birthYear;
    // }

    calAge : function(){
        this.age = 2037 -this.birthYear;
        return this.age;
    }
};

console.log(jonhy.calAge(1991));
// console.log(jonhy['calAge'](1991));

console.log(jonhy.calAge());

console.log(jonhy.age);

// LOOPS

//for
// for(let i=1;i<=20;i++){
//     console.log(`this is coounting ${i}`);
// }

console.log('hello')