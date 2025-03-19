"use strict";

/* TODO */


const lower_limit = 1;
const upper_limit = 87;

let num = parseInt(prompt('Ingrese el número:'));

let resultInRange = (num >= lower_limit && num <= upper_limit) ? 'El numero está en rango' : 'El numero no está en rango';
let resultEven = (num % 2 === 0) ? ' y es par' : ' y es impar';

alert(resultInRange + resultEven);

/*
let resultInRange = ''; 
if (num >= lower_limit && num <= upper_limit) {
    resultInRange = 'El numero está en rango';
} else {
    resultInRange = 'El numero no está en rango';
}
*/

