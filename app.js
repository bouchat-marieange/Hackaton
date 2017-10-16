var scoreTotal=0;
var multiplicateurClick=1;
var multiplicateurTombe=1;


var cookieElement=document.getElementById("cookie");
cookieElement.onclick=function () {
  scoreTotal=scoreTotal+(1*multiplicateurClick);
}

setInvertval(function () {
  scoreTotal=scoreTotal+(1*multiplicateurTombe);
},1000)
