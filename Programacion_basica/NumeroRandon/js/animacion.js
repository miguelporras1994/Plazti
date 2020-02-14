
 var vp = document.getElementById("VillaMiguel");
 var papel = vp.getContext("2d");


 var mapa =  {
 	url :"mapa.png",
 	cargarok: false,
 }

 var vaca = {
 	url:"imagenes/vaca.png",
 	cargarok :  false,
 }

mapa.objeto = new Image();
mapa.objeto.src = mapa.url;
mapa.objeto.addEventListener("load",CargarMapa);


vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",CargaVaca)




function CargarMapa(){

mapa.cargarok = true;
dibujar();

}

function CargaVaca() {

vaca.cargarok = true;
dibujar ();

}

	
 


function dibujar(){


if (mapa.cargarok){
	papel.drawImage(mapa.objeto, 0 ,0);
}
if(vaca.cargarok){

papel.drawImage(vaca.imagen , 100,100);
}

}





function aleatorio(min,max) {


 var resultado  = Math.floor(Math.random()*(max - min + 1))+min;
 return resultado;




}


