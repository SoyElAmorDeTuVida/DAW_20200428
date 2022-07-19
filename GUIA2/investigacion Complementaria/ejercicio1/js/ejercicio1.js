var numero;

numero = prompt("Ingrese un numero");

//s una función que se usa para devolver el valor absoluto de un número
document.write("Math.abs: "+Math.abs(numero)+"<br>")
//retorna el valor de un número redondeado al entero más cercano
document.write("Math.round: "+Math.round(numero)+"<br>");
//devuelve el entero mayor o igual más próximo a un número dado
document.write("Math.ceil: "+Math.ceil(numero)+"<br>");
//Devuelve el máximo entero menor o igual a un número.
document.write("Math.floor: "+Math.floor(numero)+"<br>");
//La función Math.exp() devuelve ex, donde x es el argumento, y e es El número de Euler (también conocido como la constante de Napier), la base de los algoritmos naturales.
document.write("Math.exp: "+Math.exp(numero)+"<br>");
//El console.log() es una función en JavaScript que se utiliza para imprimir cualquier tipo de variable definida anteriormente o simplemente para imprimir cualquier mensaje que deba mostrarse al usuario.
console.log(numero);
//evuelve un número aleatorio entre 0 (inclusive) y 1 (exclusivo):
document.write("Math.floor: "+Math.floor(Math.random()*numero)+"<br>");


