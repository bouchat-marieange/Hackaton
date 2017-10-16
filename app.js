var scoreTotal=0;
var multiplicateurClick=1;
var multiplicateurTombe=1;


document.getElementById("cookie").onclick=function () {
  scoreTotal=scoreTotal+(1*multiplicateurClick);
}

setInvertval(function () {
  scoreTotal=scoreTotal+(1*multiplicateurTombe);
},1000)
