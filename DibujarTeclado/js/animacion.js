var teclado = 
{
	UP: 38,
	DOWN: 40,
	LEFT : 37,
	RIGT : 39,
}

document.addEventListener("keyup", DibujarTeclado);


console.log(teclado);



function DibujarTeclado(evento)
{
  switch(evento.keyCode){
  	case  teclado.UP:
  	console.log("vamos para arriba");
  	break;
  	case teclado.DOWN :
  	console.log("vamos para abajo");
  	break;
  	case  teclado.LEFT :
  	console.log("vamos para derechas");
  	break;
  	case teclado.RIGT :
  	console.log("vamos para la izquierdad");
  	break;
  	default:
  	console.log("es otra letra");
  	break;

  }
};

