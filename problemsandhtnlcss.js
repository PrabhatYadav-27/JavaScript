// we work fro a company building a smart home thermometer.Our most recent task is this :"Given an array of temperature of one day, calculate the temperature amplitute ,keep in min that sometimes there might be a sensor error"

const temperature = [3,-2,-6,-1,'error',9,13,17,15,14,9,5];
const newtemp =[27,0,5]

//writing the solution 
const calApmlitude = function(temps){
    let max =temps[0];
    let min = temps[0];

    for(let i=0;i<temps.length;i++){
        let curtemp = temps[i];
        if(typeof curtemp !=='number') continue;
        if(curtemp > max){
            max = curtemp;
        }
        if(curtemp < min){
            min =curtemp;
        }
        
    }
    console.log(max,min);
    return max -min;

}
const ans =calApmlitude(temperature);
console.log(ans);

//now you are recieving the two arrays input from the user

const calApmlitudeNew = function(t1,t2){
    let temps = t1.concat(t2);
    console.log(temps);
    let max =temps[0];
    let min = temps[0];

    for(let i=0;i<temps.length;i++){
        let curtemp = temps[i];
        if(typeof curtemp !=='number') continue;
        if(curtemp > max){
            max = curtemp;
        }
        if(curtemp < min){
            min =curtemp;
        }
        
    }
    console.log(max,min);
    return max -min;

}
const ansNew =calApmlitudeNew(temperature,newtemp);
console.log(ansNew);
