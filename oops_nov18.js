// Prototype 

// Prototype is an object that is associated with every function & Object by default 

// If we want to add new properties at later stages to function / class, We can take help of prototype 

// In Javascript function will be called as object 


function student(){
    this.name = 'John';
    this.mark = 40
}

stu1 = new student();
//stu1.age = 22;
student.prototype.age = 33;

//console.log(stu1.name,stu1.mark,stu1.age)

stu2 = new student();
//console.log('ff',stu2.name,stu2.mark,stu2.age)



// JS Prototype Best practise 

let personFactory = (function(){
    let personPrototype = {
        greet: function(person){
            return 'Hello, ' + person.firstname;
        }
    };


return function(firstname,lastname){
    let person = Object.create(personPrototype,{
        firstname : {writable:false,value:firstname},
        lastname : {writable: false, value:lastname}
    });
    return person
};
})();

let johnDoe = personFactory("John","Doe");
let janeSmith = personFactory("Jane","Smith");

console.log(johnDoe.greet === janeSmith.greet);

console.log(johnDoe.greet(janeSmith));




