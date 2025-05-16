// Exo 1

const nom = "Martin"
const anneeNaissance = 2000
let anneeActuelle = 2025
let calcul = anneeActuelle - anneeNaissance

console.log(`Bonjour Mr ${nom} vous avez ${calcul} ans.`);
// console.log(Date.now());

// Exo 2

const noteMaths = 15
const noteFrancais = 12
const noteHG = 9
let moyenne = (noteMaths + noteFrancais + noteHG) / 3

console.log(`La moyenne de cet élève est de ${moyenne}/20.`);

// Exo 3

let sexe = "féminin"
let femme = "Ceci est une femme."
let homme = "Ceci est un homme."

function afficherSexe() {
    if (sexe === "féminin") {
        console.log(femme);
    } else {
        console.log(homme);
    }
}

afficherSexe()

sexe = "masculin"

afficherSexe()

// Exo 4

let heure = 23

function afficherHeure() {
    if (heure <= 6) {
        console.log("Il fait nuit.");
    } else if (heure <= 12) {
        console.log("C'est le matin.");
    } else if (heure <= 18) {
        console.log("C'est l'après-midi.");
    } else if (heure <= 24) {
        console.log("C'est le soir.")
    }
}

afficherHeure()

// Exo 5

let choix = 2

function afficherChoix() {
    if (choix === 1) {
        console.log("Insérer");
    } else if (choix === 2) {
        console.log("Supprimer.");
    } else if (choix === 3) {
        console.log("Afficher");
    } else if (choix === 4) {
        console.log("Ce choix n'existe pas.");
    }
}

afficherChoix()

// Exo 6

let nombre = 15

function afficherMultiple() {
    if (nombre % 3 === 0 && nombre % 5 === 0) {
        console.log(`Le nombre ${nombre} est bien un multiple à la fois de 3 et de 5`);
    } else {
        console.log(`Le nombre ${nombre} n'est pas un multiple à la fois de 3 et de 5`);
    }
}

afficherMultiple()

// Exo 7

for (let codePostal = 44000; codePostal <= 44900; codePostal += 100) {
    console.log(codePostal);
}

// Exo 8

let age = 0

for (let age = 0; age <= 20; age += 2) {
    console.log(age);
    if (age === 10) {
        console.log("C'est un 10 !");   
    } else {
        console.log(age);
    }
}

// // Exo 9

// function randomNumber(max) {
//     return Math.floor(Math.random() * max);
// }

// console.log(randomNumber(1000));

// for (let i = 0, j = randomNumber.length; i < j; i++) {
//     if (numIsPair(i)) {
//         console.log(i);
//     } else {
//         i++;
//     }
// }

