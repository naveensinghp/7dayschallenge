// 1. Inheritance - Acquring the properties from one class to another class
// Using Keywords extends
// Types of Inheritance 
// A->B = Single Inheritance 
// A->B->C = Multiple Level Inheritance
//  A
//  |
//  /\
// B  C = Hierarchial Inheritance

class A {
    a = 100;
    display(){
        console.log(this.a);
    }
}

class B extends A{
    b = 200;
    show(){
        console.log(this.b);
    }
}

bobj = new B();
bobj.display();
bobj.show();

// Method Overriding 

class Bank {
    roi(){
        return 30;
    }
}



class AXIS extends Bank {
    roi(){
        return 10.5;
    }
}

class SBI extends Bank {
    roi(){
        return 12.7;
    }
}

sbi = new SBI();
console.log('SBI',sbi.roi());
ax = new AXIS();
console.log('AXIS',ax.roi());



class CSEDepartment {

   hod(){
     return 'KalaiKumaran';
   }
   tutor(){
       return 'Uma Maheswari';
   }

}

class ASection extends CSEDepartment{
    topper(){
        return 'Krithika';
    }
}

res = new ASection();
console.log('HOD',res.hod());
console.log('Topper',res.topper());