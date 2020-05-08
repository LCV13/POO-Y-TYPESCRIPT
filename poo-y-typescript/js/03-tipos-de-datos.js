//string
var cadena = "catalina villarreal";
//number
var numero = 12;
//Booleano
var verdadero_falso = true;
//Any - cualquier cosa
var cualquiera = "hola";
//Arrays
var lenguajes = ["´PHP", "JS", "TS", "HTML"]; //donde dice string podria ir cualquier otro: any,number,etc
//otra manera de escribir un Array
var years = [12, 13, 14];
//otra manera para que acepte distintos tipos de datos
var cadenas = "catalina"; //aca dice: es string o es  number, cualquiera de los dos se aceptan
cadenas = 16; //no voy a tener ningun tipo de error
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes);
var prueba = "villarreal";
prueba = 17;
//Var  vs Let
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log(numero1_1, numero2); // me va a dar 44 y 55
}
console.log(numero1, numero2); // me va a dar 10 y 55
