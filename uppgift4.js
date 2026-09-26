/* Lösning till Uppgift 4. Av Isac Larsson, 2026 */
"use strict";

// Funktion för att skriva ut alla jämna heltal från 1 till 20.
let printEvenNumbers1to20 = function () {
    for (let number = 1; number <= 20; number++) {
        // Kontrollera om number är delbart med 2. Skriv i så fall ut number.
        if (number % 2 === 0) {
            console.log(number);
        }
    }
};

printEvenNumbers1to20(); // Skriv ut alla jämna heltal från 1 till 20.

/*
    Tolkar det som att detta inte ska vara med i inlämningen.

    // Funktion för att skriv ut alla heltal från 1 till 20.
    let printNumbers1to20 = function () {
        for (let number = 1; number <= 20; number++) {
            console.log(number);
        }
    };

    printNumbers1to20(); // Skriv ut alla heltal från 1 till 20.
*/
