/* Lösning till Uppgift 2. Av Isac Larsson, 2026 */
"use strict";

let printOutput = function () {
    let price = 100; // Pris
    let count = 3; // Antal

    // Skriver ut prisinformation
    console.log(`Pris: ${price} kr`);
    console.log(`Antal: ${count}`);
    console.log(`Totalt: ${price * count} kr`);
    console.log(`Totalt inklusive moms: ${price * count * 1.25} kr`); // Totala priset * 25% moms
};

printOutput(); // Anropar funktion för utskrift av prisinformation
