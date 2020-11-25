
// Call Stack

function multiply(a,b){
    return a * b;
}

function square(n){
    return multiply(n,n);
}

function printSquare(n){
    var squared = square(n);
    console.log(squared);
}

printSquare(4);


let name = ["naveen", 63,['bike','car']];
console.log(name);

let sequence = [1,2,3,4,5,6];
for(let i=0; i<sequence.length; i++){
    console.log(sequence[i]);
}

const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

para.textContent = info;


const contacts = ['Chris:232323','Sarah:345335','Bil:768689','Mary:94848'];
const paras = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let searchName = input.value.toLocaleLowerCase();
    input.value = '';
    // input.focus();
    for(let i=0; i < contacts.length; i++){
        let splitContact = contacts[i].split(':');
        if(splitContact[0].toLocaleLowerCase() === searchName){
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        }else{
            paras.textContent = 'Contact Not Found';
        }
    }
});