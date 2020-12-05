
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
    console.log(counter);
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

   console.log('POP',test);
  const backToArray = [...test]
  console.log(backToArray);


  const arrays = ['🐑', 1, 2, '🐑', '🐑', 3];

 console.log(arrays.indexOf('🐑'));


function multiplyall(arr){
    // console.log(arr.length); 3 
    let product = 1;
    for(let i =0; i < arr.length; i++){
        //console.log(arr);
        for(let j=0; j<a[i]; j++){
            console.log(a[i][j])
        }
    }
    return product;
}

multiplyall([[1,2],[3,4],[5,6,7]])