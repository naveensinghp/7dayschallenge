// Super keyword inheritance

class Animal {
    constructor(color){
        this.color = color;
    }
    printColor(){
        console.log("Color",this.color);
    }
}


class Dog extends Animal {
    constructor(color,food){
        super(color)
        this.food = food;
    }
    eating(){
        console.log("Eating",this.food);
    }
    display(){
        this.printColor();
        this.eating();
    }
}

d = new Dog("Blank","Bread");
d.display();


class Players {

    constructor(pname){
        this.pname = pname
    }
    indianCaptain(){
        console.log(this.pname);
    }
    
    
}

class IPL extends Players{
    constructor(pname,vs){
        super(pname)
        this.vs = vs;
    }
    
}

ds = new IPL("dhoni",'virat');
ds.indianCaptain();