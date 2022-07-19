//varibales de numero
var numeros = new Array(100);
var canNumeros = 0;

//contador de numeros
var conNum = 1;
var i;
var j;

var seleccion;

var prueba;
//varaible auxiliar
var aux;
//banderas
var bandera = false;
var bandera1 = false;
var bandera2 = false;

do{
   if(!(canNumeros = parseInt(prompt("Ingrese la cantidad de numeros que va a digitar")))){
    alert("ERROR... dato vacio");
   }else{
    if(isNaN(canNumeros) || (canNumeros % 1 < 0) || (canNumeros % 1 > 0)){
        alert("ERROR... dato no valido");
    }else{
      for(i = 0; i < canNumeros; i++){
        do{
            if(!(numeros[i] = parseFloat(prompt("Ingrese el " + conNum +" numero")))){
                if(numeros[i] == 0){
                    conNum++;
                    bandera1 = true;

                }else{
                    alert("ERROR... dato vacio");
                }
                
               }else{
                if(isNaN(numeros[i])){
                    alert("ERROR... dato no valido");
                }else{
                    conNum++;
                    bandera1 = true;

                }
            }

        }while(bandera1 == false);

      }
      bandera = true;
    }

   }
}while(bandera == false);

do{
seleccion = prompt("Ingrese ascendente ssi desea ver la serie de numeros de mayor a menor, Ingrese descendente si dese ver la serie de numeros de mayor a menor");
seleccion.toLowerCase();

if(!(seleccion)){
    alert("ERROR... dato vacio");
}else{
    if(isNaN(seleccion)){
        if((seleccion == "ascendente") || (seleccion == "ascendentes")){
            for(i=0; i<canNumeros-1; i++){
                    for(j=i+1; j<canNumeros; j++){
                        if(numeros[i]>numeros[j]){
                        aux = numeros[j];
                        numeros[j] = numeros[i];
                         numeros[i] = aux;
                       }
                    }
            }
             
            document.write("<h1>Serie de numeros ascendentes: </h1>")
            document.write("<table>");
            for(i = 0; i < canNumeros; i++){
                document.write("<td><h2>"+numeros[i]+",</h2></td>");
            }
            document.write("</table>");
            bandera2 = true;

        }else if(seleccion == "descendente" || seleccion == "descendentes"){
            for(i=0; i<canNumeros-1; i++){
                for(j=i+1; j<canNumeros; j++){
                    if(numeros[i]<numeros[j]){
                    aux = numeros[j];
                    numeros[j] = numeros[i];
                     numeros[i] = aux;
                   }
                }
        }
         
        document.write("<h1>Serie de numeros ascendentes: </h1>")
        document.write("<table>");
        for(i = 0; i < canNumeros; i++){
            document.write("<td><h2>"+numeros[i]+",</h2></td>");
        }
        document.write("</table>");
        bandera2 = true;

        }else{
            alert("ERROR... dato no valido");
        }
     
    }else{
        alert("ERROR... dato no valido");
    }
}
}while(bandera2  == false);

