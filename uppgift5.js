/* Lösning till Uppgift 5. Av Isac Larsson, 2026 */
"use strict";

let printOutput = function () {
    // Array med maträtter
    let dishes = [
        "Spaghetti med köttfärssås",
        "Korvstroganoff",
        "Tacos",
        "Morotssoppa",
        "Vårrullar",
        "Pastasallad",
    ];

    // Skriver ut information om arrayen
    console.log(`Hela arrayen: [${dishes}]`);
    console.log(`Första elementet: ${dishes[0]}`);
    console.log(`Sista elementet: ${dishes[dishes.length - 1]}`);

    // Modifierar arrayen
    dishes.push("Sushi"); // Lägger till "Sushi" sist i arrayen
    dishes.shift(); // Tar bort det första elementet i arrayen

    // Skriver ut den modifierade arrayen
    console.log(`Modifierad array: [${dishes}]`);
};

printOutput(); // Anropar funktion för utskrift av arrayinformation
