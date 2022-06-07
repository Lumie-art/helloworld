var loopTime = "5";
var randomNumber = 0;
var randAdder = 0;
var avg = 0;
let max = 121;
let min = 95;
let diff = max - min;

for (var i=0; i<loopTime; i++){

    randomNumber = (Math.floor(Math.random()* diff)) + min;
    console.log("RandomNumber" +(i+1) + "=" + randomNumber);

    randAdder = randAdder + randomNumber
    randAdder += randomNumber;
}
avg = randAdder/loopTime;
console.log("Average is " + avg);

if(avg <=100){
    console.log("Average is less than 100");
}
else{
    console.log("Average is greater than 100");
}



