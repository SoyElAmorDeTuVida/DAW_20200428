var Fah;
var Cel = prompt("Ingrese la cantidad e grados celsius que desea convertir a grados Fahrenhrit");


if(isNaN(Cel)){
   alert("ERROR..... Dato no valido");
}else{
    if(!Cel){
        alert("ERROR..... la variable esta vacia");
       
    }else{
        //Conversion de datos
        Fah = (Cel * 1.8) + 32;
        document.write("<h1>Celsius (°C): " + Cel + "°C <h1>");
        document.write("<h1> Fahrenheit (°F): " + Fah + "°F <h1>");
    }
}
