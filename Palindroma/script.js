"use strict";

// PROMPT PAROLA UTENTE
const userWord = prompt('Scrivi una parola per scoprire se è Palindroma').toLowerCase();
document.getElementById('userWord').innerHTML = `La parola inserita è: ${userWord} `;
console.log(`Parola utente: ${userWord}`);

//FUNZIONE PER INVERTIRE LA PAROLA
function wordReverse(text){

    // SPLIT: PAROLA -> ARRAY
    let word = text.split("");
    console.log(word);

    // REVERSE: INVERTIRE PAROLA
    word.reverse();
    console.log(word);

    // JOIN: RIUNIAMO LE LETTERE DELL'ARRAY IN UNA STRINGA
    let wordReverse = word.join("");
    console.log(`Parola invertita: ${wordReverse}`);

    //RETURN: FERMA LA FUNZIONE E MOSTRA UN RISULTATO
    return wordReverse;
}

// RICHIAMO FUNZIONE WORD-REVERSE
const userWordReverse = wordReverse(userWord);

if (userWord === userWordReverse){
    document.getElementById('result').innerHTML = "La parola è PALINDROMA";
    // console.log("La parola è PALINDROMA");

} else{
    document.getElementById('result').innerHTML = "La parola NON è PALINDROMA";
    // console.log("La parola NON è PALINDROMA");
}