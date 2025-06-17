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

//Fonction expression
let vérifieAge = function (age) {
  if (age < 18) {
    return "vous êtes mineur";
  } else {
    return "vous êtes majeur";
  }
};

//Appel à la fonction expression
console.log(vérifieAge(25));

// Fonction fléchée
// function addition(nombre1, nombre2, nombre3) {
//     return nombre1 + nombre2 + nombre3;
// }

let addition = (nombre1, nombre2, nombre3) => nombre1 + nombre2 + nombre3;

// Appel à la fonction fléchée
console.log(addition(5, 10, 15));
