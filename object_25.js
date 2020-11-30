const person = {
    name : ['Naveen','Singh'],
    age: 32,
    gender: 'Male',
    interest: ['music','games'],
    bio: function(){
        alert(this.name[0]+ ' '+this.name[1]);
    },
    greeting:function(){
        alert('Hi' + this.name[0]);
    },
    farwell()
    {
        alert('Bye Everybody');
    }
};

//person.greeting();


var Swapper = {
    images : [''],
    pos: {
        x : 400,
        y : 300
    },
    onSwap: function(){
        console.log('TEST');
    }
} 