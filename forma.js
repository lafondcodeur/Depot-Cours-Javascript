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
// Supprimer 3 éléments à partir de l'index 0
couleurs.splice(0, 3);
console.log(couleurs);
// console.log(elementsSupprimes);

// Ajouter des éléments (sans en supprimer)
couleurs = ["rouge", "vert", "bleu"];
couleurs.splice(1, 0, "orange", "blanc"); // À partir de l'index 1, supprimer 0 élément, ajouter "orange" et "blanc"
console.log(couleurs);

// Remplacer des éléments
couleurs = ["rouge", "vert", "bleu"];
couleurs.splice(1, 1, "jaune"); // À partir de l'index 1, supprimer 1 élément ("vert"), ajouter "jaune"
console.log(couleurs);

let appareilElectromenager = [
  "Réfrigérateur",
  "Lave-linge",
  "Sèche-linge",
  "Lave-vaisselle",
  "Cuisinière",
  "Micro-ondes",
  "Grille-pain",
  "Mixeur",
  "Bouilloire",
  "Aspirateur",
];

console.log(appareilElectromenager.indexOf("Mixeur"));
appareilElectromenager[7] = "Robot culinaire";
console.log(appareilElectromenager);

// Map
let nombre1 = [1, 2, 3, 4, 5];

// On veut créer un nouveau tableau où chaque nombre est multiplié par 2
let nombresMultiplies = nombre1.map(function (n) {
  return n / 2;
});

nombresMultiplies;

appareilElectromenager;
let appreilPlus = appareilElectromenager.map(function (appareil) {
  return appareil + " CONGO MARQUE";
});

appreilPlus;

nombresMultiplies;
console.log(nombre1); // Affiche : [1, 2, 3, 4, 5] (le tableau original n'a pas changé !)

let seElectromenager = appareilElectromenager.map(function (appareil) {
  return appareil.toUpperCase();
});

seElectromenager;

appareilElectromenager;

//Filter
let marqueOrdinateur = [
  "Dell",
  "HP",
  "Apple",
  "Dell",
  "Lenovo",
  "Asus",
  "Dell",
  "Acer",
  "Microsoft",
  "HP",
  "Acer",
];

let ordinateursDell = marqueOrdinateur.filter(function (marque) {
  return marque === "Dell";
});
ordinateursDell;

// On peut aussi utiliser une fonction EXPRESSION
let ordinateursHp = marqueOrdinateur.filter(function (marque) {
  return marque === "HP";
});
ordinateursHp;

// AUssi, on peut utiliser une fonction fléchée
ordinateursHp = marqueOrdinateur.filter((marque) => marque === "HP");
console.log(ordinateursHp);

ordinateursHp;

let nameForMe = "MACK LAFOND";
console.log(nameForMe.length);
console.log(nameForMe.toUpperCase());
console.log(nameForMe.toLowerCase());

//Find un ordinateur Dell
let ordinateurDell = marqueOrdinateur.find((marque) => marque === "Microsoft");
ordinateurDell;

let salaire = [200000, 150000, 300000, 250000, 480000];
salaire.sort();
salaire;

let salaireSuperieurA300000 = salaire.find(function (salaire) {
  return salaire > 300000;
});

salaireSuperieurA300000;

// LES OBJECTS EN JAVASCRIPT
// Un objet est une collection de paires clé-valeur
// Un objet en JavaScript est une façon de regrouper des informations qui décrivent une seule chose.
let monNom = {};
console.log(monNom);

// Création d'un objet avec des propriétés
let monChien = {
  nom: "Max", // Propriété 'nom' avec la valeur "Max"
  type: "Chien", // Propriété 'type' avec la valeur "Chien"
  couleur: "Marron", // Propriété 'couleur' avec la valeur "Marron"
  age: 3, // Propriété 'age' avec la valeur 3 (un nombre)
  estVaccine: true,
};

console.log(monChien);

// Si tu utilises des guillemets simples et ta phrase contient une apostrophe
let phrase1 = "J'ai faim."; // Il faut "échapper" l'apostrophe avec un antislash (\)
console.log(phrase1); // Affiche : J'ai faim.

// C'est plus simple d'utiliser des guillemets doubles dans ce cas
let phrase2 = "J'ai faim.";
console.log(phrase2); // Affiche : J'ai faim.

// Inversement
let citation = 'Il a dit : "Bonjour".'; // Il faut échapper le guillemet double
console.log(citation); // Affiche : Il a dit : "Bonjour".

let citation2 = 'Il a dit : "Bonjour".'; // Plus simple
console.log(citation2); // Affiche : Il a dit : "Bonjour".
