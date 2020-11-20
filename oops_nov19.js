// Static Keyword in JS

class Test {
    static a =10; // Static Variable
    b = 100;

    static m1(){
        console.log("This is Static Method");
    }
    m2(){
        console.log("This is Non Static Method");
    }
}
// 1. We can directly acess static variable and methods using class name
console.log(Test.a); // a =100;
Test.m2(); // undefined

// We can access non static variables & Method using Object