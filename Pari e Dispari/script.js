"use strict";

// PROMPT UTENTE
let user_choice = prompt('Scrivi "pari" o "dispari"').toLowerCase();
document.getElementById('user_choice').innerHTML = `Hai scelto: ${user_choice} `;


let user_num = parseInt(prompt("Scrivi un numero da 1 a 5"));
document.getElementById('user_number').innerHTML = `Hai scelto: ${user_num} `;


// CONTROLLO PARI/DISPARI INSERITO CORRETTAMENTE
while(user_choice !== 'pari' && user_choice !== 'dispari'){
    user_choice = prompt('Qualcosa è andato storto, scrivi nuovamente "pari" o "dipari"');
    
    document.getElementById('user_choice').innerHTML = `Hai scelto: ${user_choice} `;
}

// CONTROLLO NUMERO INSERITO CORRETTAMENTE
while(isNaN(user_num) || user_num < 1 || user_num > 5){
    user_num = prompt('Qualcosa è andato storto, scrivi nuovamente un numero da 1 a 5');
    
    document.getElementById('user_number').innerHTML = `Hai scelto: ${user_num} `;
}


// FUNZIONE PER NUMERO RANDOM PC
function randomNumb () {
    return Math.floor(Math.random() * (6-1)) + 1;
    // return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

// VARIABILE NUMERO PC
let pc_num = randomNumb();
document.getElementById('pc_number').innerHTML = `Il computer ha scelto: ${pc_num} `;

// SOMMA
let somma = user_num + pc_num;
document.getElementById('total').innerHTML = `Il totale è: ${somma} `;

// FUNZIONE SOMMA
function pari_dispari(num){

    if (num % 2 === 0){
        return "PARI";
    } 

    return "DISPARI";
}

// CHIAMO LA FUNZIONE E SALVO IL RISULTATO IN UNA VARIABILE
let esito = pari_dispari(somma);
document.getElementById('esito').innerHTML = esito;

// CONTROLLO VINCITORE
if(esito === user_choice){
    document.getElementById('winner').innerHTML = "Hai VINTO!";
}
else{
    document.getElementById('winner').innerHTML = "Hai PERSO!";
}