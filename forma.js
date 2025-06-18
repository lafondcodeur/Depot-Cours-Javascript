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

console.log(nomEtudiants.length);
// Parcourir le tableau avec une boucle `for`
for (let i = 0; i < nomEtudiants.length; i++) {
  console.log("Étudiant " + (i + 1) + ": " + nomEtudiants[i]);
}

//Parcourir un tableau avec une boucle `for...of`
for (let etudiant of nomEtudiants) {
  console.log("Étudiant: " + etudiant);
}

// Vérifier si un élément existe dans le tableau avec la méthode `includes()`
console.log(nomEtudiants.includes("Eve"));
console.log(nomEtudiants.includes("MACK"));

//indexOf() : À quel numéro de compartiment se trouve ce jouet ?
console.log(nomEtudiants.indexOf("Eve"));
console.log(nomEtudiants.indexOf("MACK")); // Retourne -1 car "MACK" n'est pas dans le tableau
