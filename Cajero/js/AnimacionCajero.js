alert("corre perra");


class  Billete
{
constructor(v,c){

this.valor= v;
this.Cantidad =c;

}


}

 var caja  =[];
 var entragar= [];
 var Dinero = 0;
 var div = 0 ;
var  envio =  new Billete(50,3);

caja.push(new Billete(50 ,5));
caja.push(new Billete(20 , 7));
caja.push(new Billete(10,20));



function ExtrarDinero(){

 var  dineros = document.getElementById("Dinero").value;
 Dinero =parseInt(dineros);
 alert(Dinero);




for (d of caja){

if(Dinero>0){

div = Math.floor(Dinero/d.valor);
alert(div);
console.log(div);


}else{

alert("estoy aqui hueva")
}


}
}

