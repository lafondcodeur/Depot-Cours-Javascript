//    let nom_de_la_variable = valeur(nombre entier, réel, chaîne de caractères, booléen);

// déclaration d'une variable en JavaScript
// let nom_de_la_variable;
// nom_de_la_variable = "De Boumas";

let nom_de_la_variable = "De Boumas";

// Ceci es une déclaration d'une variable en JavaScript de type entier
let nombreEntier = 34;
nombreEntier = 16;
console.log(nombreEntier);

// Ceci es une déclaration d'une variable en JavaScript de type réel
// (nombre à virgule flottante)
let nombreReel = 4.5;
nombreReel = "EROIN";
console.log(nombreReel);

// Ceci es une déclaration d'une variable en JavaScript de type chaîne de caractères
let chaine_caractere = "Hello World!";
chaine_caractere = "Bonjour le monde!";
console.log(chaine_caractere);

// ceci es une déclaration d'une variable en JavaScript  de type booléen
// (true ou false)
let variable_booleen = true;
variable_booleen = false;

// Les constantes sont des variables dont la valeur ne peut pas être modifiée

// const nom_de_la_constante = valeur(nombre entier, réel, chaîne de caractères, booléen);
const PI = 3.14;
// PI = PI + 34;
const Prenom = "De Boumas";
// Erreur : Assignment to constant variable
// PI = 2.14;
console.log(Prenom);

//Les op&érateurs arithmétiques
// +, -, *, /, % (modulo)

// + addition
let a = 10;
let b = 35;
let somme = a + b;
console.log(somme);
console.log("la somme de : " + a + " + " + b + " = " + somme);

let ticket = 5000;
ticket += 1000; // ticket = ticket + 1000
console.log(ticket);

// - soustraction
let jambon = 200;
let fromage = 50;
let soustraction = jambon - fromage;
console.log(soustraction);
console.log(
  "la soustraction de : " + jambon + " - " + fromage + " = " + soustraction
);

let Manioc = 5000;
Manioc *= 1000; // Manioc = Manioc * 1000
console.log(Manioc);

// * multiplication
let ciseaux = 5;
let feuille = 3;
// let multiplication = ciseaux * feuille;
// console.log(multiplication);
// console.log(
//   "la multiplication de : " + ciseaux + " x " + feuille + " = " + multiplication
// );

// / division
let pain = 10;
let croissant = 2;
let division = pain / croissant;
console.log(division);
console.log("la division de : " + pain + " / " + croissant + " = " + division);

// % modulo
let eau = 10;
let sable = 5;
let modulo = eau % sable;
console.log(modulo);

//concaténation
// + pour concaténer des chaînes de caractères
let nom = "MACK LAFOND";
const prenom = "De Boumas";
console.log("Bonjour mon nom & mon prénom est : " + nom + " " + prenom);

if (nom === "MACK") {
  nom = "LAFOND";
  console.log(nom);
} else {
  nom = "nombreux";
  console.log(nom);
}

let kilo = 450;
let demi = 5000;
console.log(kilo + demi + " FCFA");

let lastname = "mack";
let firstname = "lafond";

let nom_complet = lastname + firstname;
console.log(nom_complet);

let ages = 15;

if (ages >= 18) {
  console.log("Vous êtes majeur");
} else if (ages < 18) {
  console.log("Vous êtes mineur");
} else {
  console.log("Je ne sais pas vous êtes de quelle catégorie");
}

// Opérateurs de comparaison
// == égalité
// != inégalité
// === strictement égal (type et valeur)
// !== strictement inégal (type et valeur)
// > supérieur
// < inférieur
// >= supérieur ou égal
// <= inférieur ou égal
let x = 150;
let y = 20;
console.log(x == y); // false
console.log(x != y); // true
console.log(x === y); // false
console.log(x !== y); // true
console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false

// Opérateurs logiques
// && (ET) - retourne true si les deux opérandes sont vrais
// || (OU) - retourne true si au moins un des opérandes est vrai
// ! (NON) - inverse la valeur de vérité de l'opérande
let a1 = true;
let b1 = false;
console.log(a1 && b1); // false
console.log(a1 || b1); // true
console.log(!a1); // false
console.log(!b1); // true

// Opérateurs d'affectation
// = affectation
// += addition et affectation
// -= soustraction et affectation
// *= multiplication et affectation
// /= division et affectation
// %= modulo et affectation

let dclic = 320;

if (dclic !== 320) {
  // exécuté si condition = true
  console.log("Vous êtes inscrit au numérique.");
} else {
  // exécuté si condition = false
  console.log("Vous n'êtes pas inscrit au numérique.");
}

let panier = 40;

if (panier >= 50) {
  console.log("Livraison gratuite !");
} else {
  console.log("Frais de livraison : 5€");
}

//Structures de contrôle
// if, else if, else
// switch, for, while, do while
// Boucles
// if (condition) { ... } else { ... }
// let temperature = 25;
// if (temperature > 10) {
//   console.log("Il fait chaud !");
// }

// if (condition) {
//   // bloc si vrai
// } else {
//   // bloc si faux
// }

let identifiant = "admin";
let mdp = "1234";

if (identifiant === "adin" || mdp === "234") {
  console.log("Connexion réussie !");
} else {
  console.log("Échec de connexion");
}

let heure = 14;

if (heure < 12) {
  console.log("Bon matin !");
} else if (heure < 18) {
  console.log("Bon après-midi !"); // S'exécutera ici
} else {
  console.log("Bonsoir !");
}

let grade = 40;
let result;

// if (grade >= 50) {
//     result = 'pass';
// } else {
//     result = 'fail';
// }
result = grade >= 50 ? "pass" : "fail"; // Opérateur ternaire
console.log(result);

let kilian = 29;
kilian++; // Incrémente de 1
console.log(kilian); // 30
kilian--; // Décrémente de 1
console.log(kilian); // 29

let mack = 1;
mack--; // mack = mack - 1 Décrémente de 1
console.log(mack); // 0

for (let i = 0; i <= 10; i++) {
  console.log("4 X " + i + " = " + 4 * i);
  // console.log("valeur " + i)
}

let poisson = 0;
while (poisson < 5) {
  console.log("Poisson numéro : " + (poisson + 1));
  poisson++;
}

let el = 1,
  il = 4;

while (el < 5) {
  console.log("Élément numéro : " + el);
  el++;
}

//Fonctions
// Les fonctions sont des blocs de code réutilisables
// Elles peuvent prendre des paramètres et retourner une valeur
// Déclaration d'une fonction
function saluer(nom) {
  console.log("Bonjour " + nom + " !");
}

// Appel de la fonction
saluer("MACK LAFOND");
saluer("D-CLIC");
saluer("MACK LAFOND");
saluer("D-CLIC");
saluer("MACK LAFOND");
saluer("D-CLIC");
saluer("MACK LAFOND");
saluer("D-CLIC");

function saluer2(nom, prenom) {
  console.log("Bonjour " + nom + " " + prenom + " !");
}

// Appel de la fonction avec deux paramètres
saluer2("MACK", "LAFOND");

// Fonction avec retour de valeur
function addition(a, b) {
  return a + b;
}

// function addition(5, 10) {
//   return 5 + 10;
// }
let resultat = addition(5, 10);
console.log(resultat);
let resultat2 = addition(5, 10);
console.log(resultat2);

// Fonction anonyme
// 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻 𝗱𝗲 𝗳𝗼𝗻𝗰𝘁𝗶𝗼𝗻 (𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻)
// Ici, la fonction est stockée dans une variable. Elle peut être anonyme ou nommée.

let multiplication = function (a, b) {
  return a * b;
};

// Appel de la fonction anonyme

console.log("ce produit est : " + multiplication(5, 10));

// 𝗙𝗼𝗻𝗰𝘁𝗶𝗼𝗻 𝗳𝗹𝗲́𝗰𝗵𝗲́𝗲 (𝗔𝗿𝗿𝗼𝘄 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻)
let economie = (gain, depense) => gain - depense;
// function economise(gain, depense) {
//   return gain - depense;
// }
console.log("Mon économie est de " + economie(500000000, 50000));

function verifierAge(age) {
  if (age >= 18) {
    return "Accès autorisé";
  } else {
    return "Accès refusé";
  }
}
let ageUtilisateur = 20;
console.log(verifierAge(ageUtilisateur)); // "Accès autorisé"

let notes = [];
let mesFruits = ["pomme", "banane", "orange"]; // Un tableau de fruits
let mesNombres = [10, 20, 30, 40]; // Un tableau de nombres
let chosesMelangees = ["texte", 123, true, null]; // Un tableau avec différents types de choses !

console.log(mesNombres.length);
console.log(mesNombres[3]);
console.log(mesNombres[mesNombres.length - 1]);

mesFruits[1] = "kiwi"; // Modification de l'élément à l'index 1
console.log(mesFruits);

console.log(mesFruits); // Affiche : ["pomme", "banane", "orange"]
console.log(mesNombres); // Affiche : [10, 20, 30, 40]
console.log(chosesMelangees); // Affiche : ["texte", 123, true, null]

let maListeDeCourses = ["lait", "pain"];
console.log(maListeDeCourses);
maListeDeCourses.push("œufs"); // Ajoute "œufs" à la fin du tableau
console.log(maListeDeCourses);

maListeDeCourses.push("beurre", "fromage");
console.log(maListeDeCourses);

// Supprime le dernier élément du tableau
let elemenSupprimer = maListeDeCourses.pop();
console.log(maListeDeCourses);

console.log(elemenSupprimer);

maListeDeCourses.unshift("fruits"); // Ajoute "fruits" au début du tableau
console.log(maListeDeCourses);

// Supprime le premier élément du tableau
let premierElementSupprimer = maListeDeCourses.shift();
console.log(maListeDeCourses);
console.log(premierElementSupprimer);

//Parcourir un tableau avec la boucle for
for (let i = 0; i < maListeDeCourses.length; i++) {
  console.log("mon élément " + (i + 1) + " est: " + maListeDeCourses[i]);
}

// Boucle for...of
for (let liste of maListeDeCourses) {
  console.log("Voici un élément : " + liste);
}


console.log(maListeDeCourses);
console.log(maListeDeCourses.includes("Pain"));



function calculerMoyenne(notes) {
  let somme = 0;
  for (let i = 0; i < notes.length; i++) {
    somme += notes[i];
  }
  return somme / notes.length;
}
console.log(calculerMoyenne(notes));

//tableau
let notesEleve = [12, 15, 14, 10, 18, 45.6, "MACK"];
notesEleve;
console.log(notesEleve[0]);
console.log(notesEleve[1]);
console.log(notesEleve[2]);
console.log(notesEleve[3]);
console.log(notesEleve[4]);
console.log(notesEleve[5]);
console.log(notesEleve[6]);
notesEleve[0] = "MACK LAFOND";
console.log(notesEleve[0]); // "MACK LAFOND"
notesEleve;

notesEleve.push("Possacode");
notesEleve;
notesEleve.push("d-clic", "job-dating", 45, false);
notesEleve;

notesEleve.unshift("code");
notesEleve;
