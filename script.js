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
    switch(choix) {
        case 1: console.log("Insérer");
        break;
        case 2: console.log("Supprimer.");
        break;
        case 3: console.log("Afficher");
        default: console.log("Ce choix n'existe pas.");
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

for (let codePostal = 44000; codePostal <= 44999; codePostal++) {
    console.log(codePostal);
}

// Exo 8

let age = 0

for (let age = 0; age <= 20; age += 2) {
    if (age !== 10) {
    console.log(age);
    } else if (age === 10) {
        console.error("C'est un 10 !");   
    } 
}

// Exo 9

function randomNumber() {
    return Math.floor(Math.random() * 100); // fonction qui génère un nombre entier aléatoire
}

let random
let suiteTirage = [];

function pair() {
    let nombrePair = false;
    while (!nombrePair) {
    random = randomNumber(1, 1000);
    if (random % 2 === 0) {
        suiteTirage.push(random);
        nombrePair = true;
        }
    }
}

function impair () {
    let nombreImpair = false;
    while (!nombreImpair) {
        random = randomNumber(1, 1000);
        if (random % 2 !== 0) {
            suiteTirage.push(random);
            nombreImpair = true;
        }
    }
}

pair();
impair()
impair()

console.log(`${suiteTirage}`);

// Exo 10

function randomNumbr() {
    return Math.floor(Math.random() * 100);
}

const mysteryNumber = 56;
const randomArray = [];
let randoom = randomNumbr();


// while (randoom !== mysteryNumber) {
//     randomArray.push(randoom);
//     randoom = randomNumbr();
//     randomArray.push(randoom);
//     if (randoom === mysteryNumber) {
//         console.log(`Il aura fallu ${randomArray.length} tirages pour deviner le nombre mystère qui est ${randomArray[randomArray.length - 1]}`);
//     }
// }

for (let randoom = randomNumbr(); randoom !== mysteryNumber ; randoom = randomNumbr()) {
    randoom = randomNumbr();    
    randomArray.push(randoom);
    if (randoom === mysteryNumber) {
        console.log(`Il aura fallu ${randomArray.length} tirages pour deviner le nombre mystère qui est ${randomArray[randomArray.length - 1]}`);
    }
}

// // Exo 11


const dates = new Date().toLocaleDateString('fr-FR');
const hours = new Date().toLocaleTimeString('fr-FR');

console.log(`Aujourd'hui, nous sommes le ${dates} et il est ${hours}.`);
