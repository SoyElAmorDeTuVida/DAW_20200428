//declaracion de varaivles
var pulgadas;
var metro = prompt("Ingrese la cantidad de metros que desea convertir a pulgadas");


if(isNaN(metro)){
    alert("ERROR... Dato no valido");
}else{
    if(!metro){
        alert("ERROR... La variable vacia");
       
    }else{
    //conversion de datos
    pulgadas = metro * 39.37;
    document.write("<h1>" + metro + "m <h1>");
    document.write("<h1>" + pulgadas + "Pulgadas<h1>");
    }
}
