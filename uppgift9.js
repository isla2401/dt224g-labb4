/* Lösning till Uppgift 9. Av Isac Larsson, 2026 */
"use strict";

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

let printPersonInfo = function (person) {
    if (person.age >= 18) {
        console.log(`${person.name} bor i ${person.city} och är myndig`);
    } else {
        console.log(`${person.name} bor i ${person.city} och är inte myndig`);
    }
};
