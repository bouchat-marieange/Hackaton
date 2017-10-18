var scoreTotal=0;
var multiplicateurClick=1;
var multiplicateurTombe=1;


var cookieElement;

var cookieElement = document.getElementById("cookie");

// Fonction qui ajoute 1 pt à chaque click * les multiplicateur ajouté par chaque objet acheté
cookieElement.onclick=function ()
{
  scoreTotal=scoreTotal+(1*multiplicateurClick);
  console.log(scoreTotal);
}

Explication de la fonction onclick


//Fonction add 1pt / sec * multi tombe ajouté avec objets achetés
setInterval(function ()
{
  scoreTotal=scoreTotal+(1*multiplicateurTombe);
  // console.log(scoreTotal);
},1000);

// Explication de la methode setInterval
// setInterval est une methode qui appelle une fonction qui va s'exécuter tout les x temps.
// Le temps d'interval entre deux exécution de la fonction contenue dans setInterval est définie en milliseconde (ms),
// juste après l'accolade de la fonction, on met une virgule et le temps en ms (1 seconde = 1000 ms) et est suivie d'une parenthèse puis d'un point virgule
// Dans le cas présent la fonction va stocké dans la variable scoreTotal, somme cookies total + nouveaux cookies ajoutés/sec en fonction des objets achetés (5cookies/seconde etc...)
