/* Lösning till Uppgift 7. Av Isac Larsson, 2026 */
"use strict";

// Array med tal
let arr = [4, 15, 6, 20, 11, 67, 3.14];

// Funktion för att beräkna summan av tal i en array
let calculateSum = function (numbers) {
    let sum = 0; // Summan är från början 0

    //Gå igenom alla tal i arrayen och addera de till summan
    numbers.forEach((number) => {
        sum += number;
    });

    return sum;
};
