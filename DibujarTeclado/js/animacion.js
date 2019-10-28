var teclado = 
{
	UP: 38,
	DOWN: 40,
	LEFT : 37,
	RIGT : 39,
}

document.addEventListener("keyup", DibujarTeclado);


console.log(teclado);

 var  cuadrito = document.getElementById("Carta");

 var papel = cuadrito.getContext("2d")
  
DibujarLinea("blue",149,149,151,151,papel)

 var desplazar = 10;
 var x = 150 ;
 var y =  150 ;

function DibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
   lienzo.lineWidth =3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();

  lienzo.closePath();
}




function DibujarTeclado(evento)
{
  switch(evento.keyCode){
  	case  teclado.UP:
  	DibujarLinea("blue",x,y,x,y - desplazar,papel);
    y = y - desplazar;
  	break;
  	case teclado.DOWN :
  DibujarLinea("green",x,y ,x,y + desplazar,papel);
      y  = y + desplazar;
  	break;
  	case  teclado.LEFT :
  	 DibujarLinea("black",x,y ,x -desplazar,y ,papel);
      x = x - desplazar;
  	break;
  	case teclado.RIGT :
  	 DibujarLinea("green",x,y ,x +desplazar,y ,papel);
      x = x + desplazar;

  	break;
  	default:
  	console.log("es otra letra");
  	break;

  }
};

