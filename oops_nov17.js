// Polymorphism 

// Poly - Many 
// Morph - Forms

// Polymorphism is ability create a variable function or object that has more than one form 

class Shape {
    
    draw(){
        return 'Im Generic Shape';
    }
}







class Square extends Shape {
    draw(){
        return 'I m Square';
    }
}

class Circle extends Shape {
    draw(){
        return 'Im Circle';
    }
}










let et = new Shape();
console.log(et.draw());

let ets = new Square();
console.log(ets.draw());

let etp = new Circle();
console.log(etp.draw());

