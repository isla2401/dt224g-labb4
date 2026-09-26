/* Lösning till Uppgift 7. Av Isac Larsson, 2026 */
"use strict";

// Funktion för att beräkna summan av tal i en array
let calculateSum = function (numbers) {
    let sum = 0; // Summan är från början 0

    //Gå igenom alla tal i arrayen och addera de till summan
    numbers.forEach((number) => {
        sum += number;
    });

    return sum;
};

// Funktion för utskrift
let printOutput = function () {
    let arr = [4, 15, 6, 20, 11, 67, 3.14]; // Array med tal

    console.log(`Arrayen: [${arr}]`); // Skriv ut hela arrayen
    console.log(`Summan: ${calculateSum(arr)}`); // Skriv ut summan av talen i arrayen
};

printOutput(); // Anropa funktion för utskrift
