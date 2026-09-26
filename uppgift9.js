/* Lösning till Uppgift 9. Av Isac Larsson, 2026 */
"use strict";

// Array med objekt som innehåller information om olika personer
const people = [
    {
        name: "Isac",
        age: 22,
        city: "Falun",
    },
    {
        name: "Joel",
        age: 21,
        city: "Uppsala",
    },
    {
        name: "Claes-Gunnar",
        age: 3,
        city: "Grums",
    },
];

// Funktion som skriver ut information om en person
let printPersonInfo = function (person) {
    // Kontrollera personens ålder och skriv ut olika information baserat på om de är myndiga eller ej.
    if (person.age >= 18) {
        console.log(`${person.name} bor i ${person.city} och är myndig`);
    } else {
        console.log(`${person.name} bor i ${person.city} och är inte myndig`);
    }
};
