//decalracion de varaibles
var pies;
var metro = prompt('Ingrese los metro que desea convertir a pies');

if(isNaN(metro)){
    alert("ERROR... Dato no valido");
}else{
    if(!metro){
        alert("ERROR... La variable vacia");
       
    }else{
        //convertir metros a pies
        pies = metro * 3.281;
        document.write("<h1>" + metro + "m <h1>");
        document.write("<h1>" + pies + "pies<h1>");
    }
}




