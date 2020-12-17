
// Practising #CodeTidbits30 
// Day 6: 

//   <audio controls="true" autoplay="false" muted="true">
//     <source src="test.mp3" type="audio/mpeg" />
//     Your browser does not support the audio tag.
//   </audio> 

// Day 7:  4 Ways to Convert String to Character Array in JavaScript
// Spliting the string 

const string = 'Hello World';
console.log('[...string]',[...string])
console.log('Array.form(string)',Array.from(string));
console.log('Object.assing([],string)',Object.assign([],string));


// Day 8: Math.max()
const num = [1,3,80];


// Day 9 Better Boolean value 

const isPerson = true;
const hasAge = false
const canDance = true

// Day 10 : Friday

// Wrong Way 
//function teaAndSugar()


// correct way 
//function tea()
//function sugar()


// Day 11 : Sat
//console.log('%cHello', 'color: green; background: yellow; font-size: 30px');



// Day 12: Sunday
// JS Essentials: Falsy Values
// false 
// undefined 
// null 
// NaN 
// 0 

// Day 13: Monday 
//<s> Text no longer relevant </s>

// Day 14: Tuesday 
// 5 Way to append item to array in JS
const name = ['Naveen'];
name.push('Singh');


// Day 15 
// window.location Cheatsheet
// https://www.samanthaming.com/tidbits/?filter=JS#2



// Day 16 

// 3 way to clone object 

const food = { beef: '🥩', bacon: '🥓' }

// Spread {...food}
console.log('1 way',{...food});

// object assign
console.log('2nd way',Object.assign({},food));

// JSON 
console.log('3rd way',JSON.parse(JSON.stringify(food)));

const obj = { one :1, two:2}
const obj2 = obj; 
obj2.three =3;
console.log(
    'Obj 1',obj,
    'obj 2',obj2
)
