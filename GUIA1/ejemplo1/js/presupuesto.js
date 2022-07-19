function init(){
    //promt peremite obytener entrada de datos del usuario
    var presupuesto = prompt('ingrese el presupuesto anual','');
    var derma, trau, pedi, i;
    var div = document.getElementById('distribucion');

    //Reralizandop los calculos para distribucion del presupuesto 
    derma = presupuesto * 0.40;
    trauma = presupuesto * 0.35;
    pedia = presupuesto * 0.25;

    //creando el codigo que se inserta del elemento div id = distribucion
    var html = "<ul>\n\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para Ginecología es: $ " + derma + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";

    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tEl presupuesto asignado para Traumatología es: $ " + trauma + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";
    html += "\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\tEl presupuesto asignado para Pediatría es: $ " + pedia + "\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";
    html += "</ul>\n";

    //insertando dentro del elemento div e lcodigo asignbado en la variable html 
    div.innerHTML = html

    //hacer referencia a los elementos h1 dentro de la pagina web
    var links = document.getElementsByTagName('a');
    //Recorrer todos los elementos a y asignar el manejador de eventos
    //mendiante una funcion anonima
    for(i=0; i<links.length; i++){
        links[i].onmouseover = function(){
        this.className = 'move-right-hover';
        };
        links[i].onmouseout = function(){
        this.className = 'move-right';
        };
        }
}

window.onload = init;