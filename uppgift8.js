/* Lösning till Uppgift 8. Av Isac Larsson, 2026 */
"use strict";

// Bokobjekt
const book1 = {
    title: "Sommaren 1985",
    author: "John Ajvide Lindqvist",
    year: 2023,
    language: "Svenska",
};

// Funktion för att skriva ut information om en bok
let printBookInfo = function (book) {
    console.log(`Titel: ${book.title}`);
    console.log(`Författare: ${book.author}`);
    console.log(`Utgivningsår: ${book.year}`);
    console.log(`Språk: ${book.language}`);
};

printBookInfo(book1); // Anropa funktion för att skriva ut info om bok
