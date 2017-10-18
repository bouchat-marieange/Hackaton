var scoreTotal=0;
var multiplicateurClick=1;
var multiplicateurTombe=1;


var cookieElement;

var cookieElement=document.getElementById("cookie");
cookieElement.onclick=function () {
  scoreTotal=scoreTotal+(1*multiplicateurClick);
  console.log(scoreTotal);
}

setInterval(function () {
  scoreTotal=scoreTotal+(1*multiplicateurTombe);
},1000)

// Création de la liste des objets bonus




//Fonction nb_cookies

scoreTotal = function(multiplicateurTombe,multiplicateurClick){
	
	scoreTotal=document.getElementsById(scoreTotal+multiplicateurTombe+multiplicateurClick);
	return scoreTotal;
} 

