/* Lösning till Uppgift 6. Av Isac Larsson, 2026 */
"use strict";

// Funktion för beräkning av en rektangels area
let calculateArea = function (width, height) {
    let area = width * height;
    return area;
};

// Anropa funktionen för att beräkna rektanglarnas areor och skriv ut resultatet
console.log(`Arean är ${calculateArea(2, 8)}`);
console.log(`Arean är ${calculateArea(7, 5)}`);
console.log(`Arean är ${calculateArea(25, 10)}`);
