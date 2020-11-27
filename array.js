
// Call Stack



const number = ['a','b','b','c','c','d','e','f'];

let count = {};

number.forEach(item => {
    if(count[item]){
        count[item]++;
    }else{
        count[item] =1;
    }
});

console.log(count);