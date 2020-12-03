
function Add(n1, n2) {
    var Result = parseFloat(n1) + parseFloat(n2);
    return Result;
}


function Subst(n1, n2) {
    var Result = n1 - n2;
    return Result;
}

function Multp(n1, n2) {
    var Result = n1 * n2;
    return Result;
}

function Divt(n1, n2) {
    var Result = n1 / n2;
    return Result;
}

function Pwr(n1, n2) {
    var Result = n1 ** n2;
    return Result;
}


function SqRoot(n) {
    var Result = Math.sqrt(n);
    return Result;
}


let IOTxt = document.getElementById('Entrance');
let Oprtr = '';
let num1 = 0;

let btnN1 = document.getElementById('No1');

btnN1.onclick = function() {
    IOTxt.value = IOTxt.value + 1;
}


let btnN2 = document.getElementById('No2');

btnN2.onclick = function() {
    IOTxt.value = IOTxt.value + 2;
}


let btnN3 = document.getElementById('No3');

btnN3.onclick = function() {
    IOTxt.value = IOTxt.value + 3;
}


let btnN4 = document.getElementById('No4');

btnN4.onclick = function() {
    IOTxt.value = IOTxt.value + 4;
}


let btnN5 = document.getElementById('No5');

btnN5.onclick = function() {
    IOTxt.value = IOTxt.value + 5;
}


let btnN6 = document.getElementById('No6');

btnN6.onclick = function() {
    IOTxt.value = IOTxt.value + 6;
}


let btnN7 = document.getElementById('No7');

btnN7.onclick = function() {
    IOTxt.value = IOTxt.value + 7;
}


let btnN8 = document.getElementById('No8');

btnN8.onclick = function() {
    IOTxt.value = IOTxt.value + 8;
}


let btnN9 = document.getElementById('No9');

btnN9.onclick = function() {
    IOTxt.value = IOTxt.value + 9;
}


let btnN0 = document.getElementById('No0');

btnN0.onclick = function() {
    IOTxt.value = IOTxt.value + 0;
}



let btnNAdd = document.getElementById('Add');

btnNAdd.onclick = function() {
    Oprtr = '+';
    num1 = IOTxt.value;
    IOTxt.value = '';
}


let btnNSubst = document.getElementById('Subst');

btnNSubst.onclick = function() {
    Oprtr = '-'
    num1 = IOTxt.value;
    IOTxt.value = '';
}


let btnNDivt = document.getElementById('Divt');

btnNDivt.onclick = function() {
    Oprtr = '/'
    num1 = IOTxt.value;
    IOTxt.value = '';
}


let btnNMult = document.getElementById('Mult');

btnNMult.onclick = function() {
    Oprtr = '*'
    num1 = IOTxt.value;
    IOTxt.value = '';
}


let btnNPo = document.getElementById('Po');

btnNPo.onclick = function() {
    Oprtr = 'po'
    num1 = IOTxt.value;
    IOTxt.value = '';
}


let btnNRc = document.getElementById('Rc');

btnNRc.onclick = function() {
    Oprtr = 'rc'
    num1 = IOTxt.value;
        
}


let btnNEq = document.getElementById('Eq');

btnNEq.onclick = function() {
    //Result is shown with code here
    
    let reslt = 0;

    switch(Oprtr) {
        case '+':
        IOTxt.value = Add(num1,IOTxt.value);
        break;

        case '-':
        IOTxt.value = Subst(num1, IOTxt.value);
        break;

        case '*':
        IOTxt.value = Multp(num1, IOTxt.value);
        break;

        case '/':
        IOTxt.value = Divt(num1, IOTxt.value);
        break;

        case 'po':
        IOTxt.value = Pwr(num1, IOTxt.value);
        break;

        case 'rc':
        IOTxt.value = SqRoot(num1, IOTxt.value);
        break;
        
    }

}


let btnNPnt = document.getElementById('Pnt');

btnNPnt.onclick = function() {
    IOTxt.value = IOTxt.value + '.';
}


let btnNClr = document.getElementById('Clr');

btnNClr.onclick = function() {
    IOTxt.value = '';

}






