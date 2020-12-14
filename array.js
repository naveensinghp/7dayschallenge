
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


for(counter =1; counter < 4; counter++){
    //console.log(counter);
    for(countertwo = 1 ; countertwo < 4 ; countertwo++){

    }
}

function updateRecords(object, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      object[id][prop] = value;
    } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
      object[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      object[id][prop].push(value);
    } else if (value === "") {
      delete object[id][prop];
    }
    return object;
  }

  

  // How to Remove array duplicates

  const array = ['🐑', 1, 2, '🐑', '🐑', 3];

  const test = new Set(array);

  // console.log('POP',test);
  const backToArray = [...test]
  //console.log(backToArray);


  const arrays = ['🐑', 1, 2, '🐑', '🐑', 3];

 //console.log(arrays.indexOf('🐑'));


function multiplyall(arr){
    // console.log(arr.length); 3 
    let product = 1;
    for(let i =0; i < arr.length; i++){
        //console.log(arr);
        for(let j=0; j<arr[i]; j++){
            //console.log(a[i][j])
        }
    }
    return product;
}

multiplyall([[1,2],[3,4],[5,6,7]])

// add element of existing array

var test1 = ["Naveen","Singh","Arya","Winterfell"];
var test2 = ["Khalesi","cersei","KingsLanding",...test1];
console.log(test2);

// Pass element of array as a argument to function 
function addThree(x,y,z){
    console.log(x+y+z);
    
    
}
var args = [0,1,2];
addThree(...args);

const array = [1,3,80];
console.log('max',Math.array());


// From the two arrays return only unique element

const arr1 = [1,2,3,5];

const arr2 = [1,2,3,4,5];

const diffArray = arr1.concat(arr2).filter(val => !arr1.includes(val) || !arr2.includes(val))

function diffArray(arr1,arr2){
    return [...diff(arr1,arr2),...diff(arr2,arr1)];

    function diff(a,b){
        return a.filter(item => b.indexOf(item) === -1)
    }
}


function diffArray(arr1,arr2){
    let newArr = [];
    function onlyInFirst(first,second){
        // Looping through an array to find elements that don't exist in another array

    for(let i = 0 ; i < first.length; i++){
        if(second.indexOf(first[i]=== -1)){
            newArr.push(first[i]);
        }
    }
    }
}



const user = { 
    johnDoe : {
        age: 34, email
    }
}


const { johnDoe: { age,email}} = user