//declaracion de variables 
var yarda;
var metro = prompt('Ingrese los metro que desea convertir a pies');



if(isNaN(metro)){
    alert("ERROR... Dato no valido");
}else{
    if(!metro){
        alert("ERROR... La variable vacia");
       
    }else{
        //Conversion de datos
        yarda = metro * 1.094;
        document.write("<h1>" + metro + "m <h1>");
        document.write("<h1>" + yarda + "yardas <h1>");
    }
}
    


