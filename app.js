var scoreTotal=0;
var multiplicateurClick=1;
var multiplicateurTombe=1;


var cookieElement = document.getElementById("cookie");


// Fonction qui ajoute 1 pt à chaque click * les multiplicateur ajouté par chaque objet acheté
cookieElement.onclick=function ()
{
  scoreTotal=scoreTotal+(1*multiplicateurClick);
  console.log(scoreTotal);// affichage uniquement dans console
  affiche_score(); //appel fonction pour affichage dans la page
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
  // affiche_score();
  console.log(scoreTotal); // affichage uniquement dans console
  affiche_score(); //appel fonction pour affichage dans la page
},1000);


// Explication de la methode setInterval
// setInterval est une methode qui appelle une fonction qui va s'exécuter tout les x temps.
// Le temps d'interval entre deux exécution de la fonction contenue dans setInterval est définie en milliseconde (ms),
// juste après l'accolade de la fonction, on met une virgule et le temps en ms (1 seconde = 1000 ms) et est suivie d'une parenthèse puis d'un point virgule (attention cette parenthèse a été ouverte juste entre setInterval et function - pas oublier)
// Dans le cas présent la fonction va stocké dans la variable scoreTotal, somme cookies total + nouveaux cookies ajoutés/sec en fonction des objets achetés (5cookies/seconde etc...)

// Fonction qui affiche le scoreTotal dans l'espace avec l'ID "scoreTotal" dans le htlm
var compteur = document.getElementById("scoreTotal");
function affiche_score()
{
  compteur.innerHTML=scoreTotal;
}

// Crée une variable compteur pour cibler l'endroit dans le html où on veut afficher le scoreTotal
// Ce ciblage se fait en fonction de l'ID de l'élément en html avec la fonction document.getElementById native Javascript (inutile de la créer avant, javascript la connait)
// On créer une fonction affiche_score (car on va devoir l'appeler à chaque fois que la variable scoreTotal change)
// Dans cette fonction on utilise la variable qui cible l'endroit dans l'html (compteur), et on lui applique innerHTML
// innerHTML indique à javascript d'écraser tout ce que l'endroit ciblé contient (même si contient plusieurs div ou autres) par la valeur indiquer après le égal. C'est à dire la valeur du scoreTotal.
// Et d'afficher le scoreTotal à cet endroit à la place de tout le reste (le fond petit cookie ne disparait pas car il a été ajouter en background-image en CSS et pas en html)
// Après il faudra appeler cette fonction dans la fonction de calcul des cookies clickés et dans la fonction des cookies tombés.
// Pour positionner plus précisément l'affichage du score total, utiliser le css appliqué sur ID "scoreTotal"




// Création de la liste des objets bonus


//Pour identifier chaque objet , on les met dans un plus grand objets ou on les associatie avec leur id
store={
  item1:{
    nom:"iterm1",
    prix:10,
    utilisations:0,
    cookie_click:0,
    cookie_tombe:1
  },
  item2:{
    nom:"iterm2",
    prix:10,
    utilisations:0,
    cookie_click:2,
    cookie_tombe:0
  }
}

//On selectionne les différents object pour gérer les clicks
//Quand objet clické , on envoie l'id de l'objet à la fonction "achat_objet" avec l'id de objet en argument
var toutElements=document.getElementsByClassName();
for (var i = 0; i < toutElements.length; i++) {
  toutElements[i].addEventListener("click",function (event) {
    achat_objet("item");
  });
}

function achat_objet(id_objet) {
  multiplicateurClick=multiplicateurClick+store[id_objet].cookie_click;
  multiplicateurTombe=multiplicateurTombe+store[id_objet].cookie_tombe;
  store[id_objet].utilisations++;
  store[id_objet].prix=store[id_objet].utilisations*store[id_objet].prix;
  afficher_Objet(id_objet);
}
function afficher_Objet(id_element) {

}
