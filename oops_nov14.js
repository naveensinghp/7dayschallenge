// 4 Pillar of Javascript
// 1. Encapsulation - Reduce Complexity + Increase reusability
// 2. Abstraction - Reduce Complexity + Isolate Impact of Change
// 3. Inheritance - Elimate Redudant Code
// 4. Polymoriphism - Refactory ugly switchase statement

console.log('Hi');

// Encapsulation example 
let baseSalary = 30_000;
let overTime = 10;
let rate = 20;


function getWage(baseSalary,overTime,rate){
    return baseSalary + (overTime * rate);
}

let employee = {
    baseSalary: 30_000,
    overTime: 10,
    rate:20,
    getWage: function(){
        return this.baseSalary + (this.overTime * this.rate);
    }
}
employee.getWage();


// Abstraction 
//- Example to understand the Abstraction concept - DVD Player, We don't care about internal Board of Player, We only click play button 