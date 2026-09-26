/* Lösning till Uppgift 3. Av Isac Larsson, 2026 */
"use strict";

let age = 670;

if (age < 18) {
    console.log("Barn"); // Under 18 år = Barn
} else if (age >= 18 && age < 65) {
    console.log("Vuxen"); // 18-64 år = Vuxen
} else if (age >= 65 && age < 200) {
    console.log("Pensionär"); // 65-199 år = Pensionär
} else {
    console.log("Vampyr"); // 200+ år = Vampyr :)
}
