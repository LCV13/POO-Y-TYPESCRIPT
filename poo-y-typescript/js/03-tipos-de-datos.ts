//string
let cadena: string = "catalina villarreal";

//number
let numero: number = 12;

//Booleano
let verdadero_falso: boolean = true;

//Any - cualquier cosa
let cualquiera: any = "hola";

//Arrays
var lenguajes: Array<string> = ["´PHP", "JS", "TS", "HTML"];//donde dice string podria ir cualquier otro: any,number,etc

//otra manera de escribir un Array
let years: number[] = [12,13,14];

//otra manera para que acepte distintos tipos de datos

let cadenas: string | number = "catalina";//aca dice: es string o es  number, cualquiera de los dos se aceptan
cadenas = 16;//no voy a tener ningun tipo de error


console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes);


//creando un tipo de dato

type alfanumerico = string | number;
let prueba: alfanumerico = "villarreal";
 prueba = 17;


 //Var  vs Let

 var numero1 = 10;
 var numero2 = 12;

if(numero1 == 10){
	let numero1 = 44;
	var numero2 = 55;

console.log(numero1, numero2);	// me va a dar 44 y 55
}

console.log(numero1, numero2);	// me va a dar 10 y 55

