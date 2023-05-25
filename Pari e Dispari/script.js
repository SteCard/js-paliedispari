"use strict";

// PROMPT UTENTE
let user_choice = prompt("Scrivi pari o dispari").toLowerCase();
document.getElementById('user_choice').innerHTML = `Hai scelto: ${user_choice} `;

let user_num = parseInt(prompt("Scrivi un numero da 1 a 5"));
document.getElementById('user_number').innerHTML = `Hai scelto: ${user_num} `;

// VARIABILI PC
let pc_num = RandomNumb(1,5);
document.getElementById('pc_number').innerHTML = `Il computer ha scelto: ${pc_num} `;

// FUNZIONE PER NUMERO RANDOM PC
function RandomNumb (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// SOMMA
let somma = user_num + pc_num;
document.getElementById('total').innerHTML = `Il totale è: ${somma} `;




// FUNZIONE SOMMA
function risultato(user_num,pc_num){

    let result;
    let somma = user_num + pc_num
    
    if (somma % 2 === 0){
        result = "pari";
        console.log(somma + " è pari");
    } 

    else{
        result = "dispari";
        console.log(somma + " è dispari");
    }

    return result;
}

