
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

function multiply(arr,n){

    var product = 1;
    for(var i =0; i < n; i++){
        product *= arr[i];
    }
    return product;


}

// Nesting for loops

function multiplyAll(arr){
    var product = 1;
    for(var i =0; i < arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            product = product * arr[i];
        }
    }

    return product;
}
multiplyAll([1,2],[3,4],[5,6,7]);