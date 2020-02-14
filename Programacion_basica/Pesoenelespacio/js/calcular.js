
function validar(){

 
var usuario = document.getElementById("usuario").value;


 var peso = parseInt(usuario);

 var Tierra = 9.8;
 var Marte =  3.7;



var  PesoFinal  = 0 ;


PesoFinal = peso * Marte / Tierra;
 
 document.getElementById("hello").innerHTML ="tu peso es marte es el siguente:  "+ PesoFinal;


 }


