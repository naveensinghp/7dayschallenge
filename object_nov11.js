// Object 
// Properties
// methods 

//ObjectName.propertyName

var myCar = new Object();
myCar.name = 'Eon';
myCar.model = 'Era+';
myCar.year = 2019;

console.log('1',myCar);

var myCar1 = {
    make: 'ford',
    model: 'fego',
    year: 1969
};

console.log(myCar1);


const myTech = 'Angular';
const tech = ['HTML','CSS','Javascript','Python'];

console.log('POP',tech.includes(myTech));





function car(name) {
    return `Car ${name}!`;
  }
  
  const name = 'Benz';
  const displayCar = car`Car Name is ${name}.`
  console.log('text',displayCar);
  
  car(Benz);


  function hi(strings, name) {
    return `Hello ${name}!`;
  }
  
  const name = 'World';
  const tag = hi`My name is ${name}.`
  console.log(tag);
  // -> 'Hello World!'





// -> 'Hello Jack!'



