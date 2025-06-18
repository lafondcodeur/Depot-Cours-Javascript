// Fonctions de validation
function validateForm() {
  // Récupération des valeurs des champs
  var nom = document.forms["monForm"]["nom"].value;
  var email = document.forms["monForm"]["email"].value;
  var message = document.forms["monForm"]["message"].value;

  // Vérification des champs vides
  if (nom == "" || email == "" || message == "") {
    alert("Tous les champs doivent être remplis.");
    return false;
  }

  // Vérification du format de l'email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return false;
  }

  // Si toutes les validations passent
  alert("Formulaire soumis avec succès !");
  return true;
}

// Fonctions Déclaré qui retourne une valeur
function apprent(nom, statut) {
  return "Bonjour je m'appelle " + nom + " et je suis " + statut + ".";
}

//Appel à la fonction
let monStatut = apprent("MACK", "Développeur");
console.log(monStatut);

// Fonctions Déclaré qui ne retourne pas une valeur
function Saluer(nom) {
  console.log("Bonjour " + nom + " !");
}

//Appel à la fonction Déclaré qui ne retourne pas une valeur
Saluer("Ericka");

// Fonctions Déclaré sans paramètre qui ne retourne pas une valeur
function Saluer1() {
  console.log("Bonjour !");
}

//Appel à la fonction Déclaré qui ne retourne pas une valeur
Saluer1();
Saluer1();
Saluer1();

//Fonction expression
let vérifieAge = function (age) {
  if (age < 18) {
    return "vous êtes mineur";
  } else {
    return "vous êtes majeur";
  }
};

//Appel à la fonction expression
console.log(vérifieAge(5));

// Fonction fléchée
// function addition(nombre1, nombre2, nombre3) {
//     return nombre1 + nombre2 + nombre3;
// }

let addition = (nombre1, nombre2, nombre3) => nombre1 + nombre2 + nombre3;

// Appel à la fonction fléchée
console.log(addition(5, 15));

// COURS SUR LES TABLEAUX EN JAVASCRIPT
// Déclaration d'un tableau vide
let mesJouets = [];

console.log(mesJouets);

//Déclaration d'un tableau avec des valeurs
let mesFruits = ["Pomme", "Banane", "Orange", "Mangue", "Kiwi", "Avocat"]; // Un tableau de fruits
let mesNombres = [10, 20, 30, 40]; // Un tableau de nombres
let chosesMelangees = ["texte", 123, true, null]; // Un tableau avec des types mélangés

console.log(mesFruits);
console.log(mesNombres);
console.log(chosesMelangees);

// Accès aux éléments d'un tableau
console.log(mesFruits[0]);
console.log(mesFruits[3]);

console.log(mesFruits);
mesFruits[3] = "Fraise"; // Modification de l'élément à l'index 3

//Déterminer la longueur d'un tableau
console.log(mesFruits.length);

// Utiliser la longueur pour accéder au dernier élément (super astuce !)
// Le dernier index est toujours `longueur - 1`
mesFruits[mesFruits.length - 1] = "Cerise";
// mesFruits[6 - 1] = "Cerise"; // Modification de l'élément à l'index 5 (6ème élément)
// mesFruits[5] = "Cerise";
console.log(mesFruits[5]);

console.log(mesFruits);

// Ajouter un élément à la fin du tableau avec la méthode `push()`
// La méthode `push()` ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle longueur du tableau
console.log(mesFruits);
mesFruits.push("Ananas", "Goyave"); // Ajoute "Ananas" à la fin du tableau
console.log(mesFruits);

// Supprimer le dernier élément du tableau avec la méthode `pop()`
// La méthode `pop()` supprime le dernier élément d'un tableau et le retourne
let maListeDeCourses = ["lait", "pain", "œufs"];
console.log(maListeDeCourses);

let dernierElement = maListeDeCourses.pop(); // Supprime "œufs"
console.log(maListeDeCourses);

console.log(dernierElement);

// Ajouter un élément au début du tableau avec la méthode `unshift()`
maListeDeCourses.unshift("beurre", "Camembert"); // Ajoute "beurre" et "Camembert" au début du tableau
console.log(maListeDeCourses);

// Supprimer le premier élément du tableau avec la méthode `shift()`
maListeDeCourses;
let premierElementSupprimer = maListeDeCourses.shift(); // Supprime "beurre"
maListeDeCourses;

console.log(premierElementSupprimer);

// Parcourir un tableau avec une boucle `for`
let nomEtudiants = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Heidi",
  "Ivan",
  "Judy",
  "Kathy",
  "Leo",
  "Mallory",
  "Nina",
  "Oscar",
  "Peggy",
  "Quentin",
  "Rupert",
  "Sybil",
  "Trent",
  "Uma",
  "Victor",
  "Walter",
  "Xena",
  "Yara",
  "Zoe",
];

console.log(nomEtudiants.indexOf("Xena"));
// nomEtudiants[23]="Rema";
nomEtudiants.splice(23, 0, "MACK");
console.log(nomEtudiants);

console.log(nomEtudiants.indexOf("Uma"));
nomEtudiants.splice(20, 1);
console.log(nomEtudiants);

console.log(nomEtudiants.length);
// Parcourir le tableau avec une boucle `for`
for (let i = 0; i < nomEtudiants.length; i++) {
  console.log("Étudiant " + (i + 1) + ": " + nomEtudiants[i]);
}

//Parcourir un tableau avec une boucle `for...of`
for (let etu of nomEtudiants) {
  console.log("Étudiant: " + etu);
}

// Vérifier si un élément existe dans le tableau avec la méthode `includes()`
nomEtudiants;
console.log(nomEtudiants.includes("Nina"));
console.log(nomEtudiants.includes("MACK"));

//indexOf() : À quel numéro de compartiment se trouve ce jouet ?
nomEtudiants;
console.log(nomEtudiants.indexOf("Uma"));
console.log(nomEtudiants.indexOf("MACK")); // Retourne -1 car "MACK" n'est pas dans le tableau

nomEtudiants[19] = "MACK"; // Ajoute "MACK"
nomEtudiants;

// Découper un tableau en sous-tableaux avec la méthode `slice()`
// La méthode `slice()` retourne une copie superficielle d'une portion du tableau dans un nouveau tableau, sans modifier le tableau d'origine.
// Elle prend deux arguments : l'index de début (inclusif) et l'index de fin (exclusif).
// Si l'index de fin n'est pas spécifié, elle retourne tous les éléments à partir de l'index de début jusqu'à la fin du tableau.
// Exemple :
let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sousTableau = nombres.slice(1, 6); // Prend les éléments de l'index 1 (inclus) jusqu'à l'index 4 (exclus)

// Affiche : [2, 3, 4, 5, 6] (les éléments aux index 1, 2, 3,4,5)
console.log(sousTableau);

let duDebutAuTrois = nombres.slice(0, 3); // De l'index 0 (inclus) à l'index 3 (exclus)
console.log(duDebutAuTrois);

let duTroisALaFin = nombres.slice(3); // De l'index 3 (inclus) jusqu'à la fin
console.log(duTroisALaFin); // Affiche : [4, 5]

console.log(nombres); // Le tableau original n'a pas changé : [1, 2, 3, 4, 5]

// Splice() : Modifier un tableau en place
// La méthode `splice()` modifie le tableau d'origine en ajoutant ou en supprimant des éléments.
// Elle prend trois arguments : l'index de début, le nombre d'éléments à supprimer et les éléments à ajouter.
// Exemple :
let couleurs = ["rouge", "vert", "bleu", "jaune", "noir", "marron", "blanc"];

// Supprimer des éléments
// Supprimer 2 éléments à partir de l'index 2
let elementsSupprimes = couleurs.splice(2, 1);
console.log(couleurs);
console.log(elementsSupprimes); // Affiche : ["bleu"] (ceux qui a été supprimés)

// Ajouter des éléments (sans en supprimer)
couleurs = ["rouge", "vert", "bleu"];
couleurs.splice(1, 0, "orange", "blanc"); // À partir de l'index 1, supprimer 0 élément, ajouter "orange" et "blanc"
console.log(couleurs);

// Remplacer des éléments
couleurs = ["rouge", "vert", "bleu"];
couleurs.splice(1, 1, "jaune"); // À partir de l'index 1, supprimer 1 élément ("vert"), ajouter "jaune"
console.log(couleurs);
