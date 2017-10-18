var scoreTotal=0;
var multiplicateurClick=1;
var multiplicateurTombe=1;


var cookieElement = document.getElementById("cookie");

// Fonction qui ajoute 1 pt à chaque click * les multiplicateur ajouté par chaque objet acheté
cookieElement.onclick=function ()
{
  scoreTotal=scoreTotal+(1*multiplicateurClick);
  console.log(scoreTotal);
}

// Explication de la fonction onclick
// Crée une fonction qui se déclenche lorsque l'on clique sur un objet particulier (cookieElement)
//On définitit d'abord la variable cookieElement qui va cibler tout les éléments sur le document portant l'ID "cookie"
// cette variable cookieElement va être utilisé dans l'évènemen onclick qui va déclencher l'exécution dune fonction
// Dans le cas présent: quand on clique sur le cookie, le score total va augmenter de 1 au départ (1 click - 1 cookie)
//Plus tard lorsque l'on aura acheter des objet qui vont multiplier le nombre de cookie par click (multiplicateurClick),  on multipliera 1 par le multiplicateurClick pour augmenter le nombre de cookies ajouté au score total à chaque click sur le cookie.



//Fonction add 1pt / sec * multi tombe ajouté avec objets achetés
setInterval(function ()
{
  scoreTotal=scoreTotal+(1*multiplicateurTombe);
  // console.log(scoreTotal); // affiche uniquement les cookies qui tombent chaque seconde
},1000);


// Explication de la methode setInterval
// setInterval est une methode qui appelle une fonction qui va s'exécuter tout les x temps.
// Le temps d'interval entre deux exécution de la fonction contenue dans setInterval est définie en milliseconde (ms),
// juste après l'accolade de la fonction, on met une virgule et le temps en ms (1 seconde = 1000 ms) et est suivie d'une parenthèse puis d'un point virgule (attention cette parenthèse a été ouverte juste entre setInterval et function - pas oublier)
// Dans le cas présent la fonction va stocké dans la variable scoreTotal, somme cookies total + nouveaux cookies ajoutés/sec en fonction des objets achetés (5cookies/seconde etc...)


// Création de la liste des objets bonus
