//alert("corre perra");

var foto = [];
foto["Pollote"]= "pollo.png";
foto["Tocinauro"]= "cerdo.png";
foto["Vacota"]= "vaca.png";


class paquiman {


  constructor (n,v,a)
  {
  	this.imagen = new Image();
  	this.nombre = n;
  	this.vida = v;
  	this.ataque = a;
  	this.imagen.src = foto[this.nombre];
  }

  mostrar(){
  	document.body.appendChild(this.imagen)
  	document.write("<br>"+this.nombre + "<br>")
  	document.write(this.vida + "<br>")
  	document.write(this.ataque + "<br>")
  
  }

}


var Pollote = new paquiman("Pollote", 100 ,80) ;
var Tocinauro = new paquiman("Tocinauro",120 , 60);
var Vacota = new paquiman("Vacota",120 , 60);

coleccion = []
{
	coleccion.push(new paquiman("Pollote", 100 ,80)); 
    coleccion.push(new paquiman("Tocinauro",120 , 60));
     coleccion.push(new paquiman("Vacota",120 , 60));

}

for(h  of coleccion){

	h.mostrar();
}