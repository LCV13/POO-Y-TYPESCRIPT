//Modulo

module Tienda{
export class Ropa{
		constructor(public titulo:string){
			alert(titulo);
		}
	}

export	class Informatica{
		constructor(public titulo:string){
			alert('Tienda de tecnologia '+titulo);
		}
	}
}

import Informatica = Tienda.Informatica;
let cargar_informatica = new Informatica('Supertienda');

//creando el decorador
function arranque(lanzar: string){
	return function(target: Function){
		target.prototype.lanzamiento = function():void{
			alert(lanzar);
		}

	}
}

//Añadir el decorador
@arranque('Lanzamiento del curso de nodejs Y ANGULAR 2')
class Programa{ //clase padre
	public nombre:string;
	public version:number;


	getNombre(){
		return this.nombre;
	}

	setNombre(nombre:string){
		this.nombre = nombre;
	}

	getVersion(){
		return this.version;
	}

	setVersion(version:number){
		this.version = version;
	}
}


class EditorVideo extends Programa{ //clase hija
	public timeline:number;

	setTimeline(timeline: number){
		this.timeline = timeline;
	}

	getTimeline(){
		return this.timeline;
	}

	getAllData():string{
		return this.getNombre()+" - "+this.getVersion()+" - "+this.getTimeline();
	}

}

var programa = new Programa();
programa.lanzamiento();

var editor = new EditorVideo();
editor.setNombre("Camtasia Estudio");
editor.setVersion(8);
editor.setTimeline(4000);

console.log(editor.getAllData());


//Logica del formulario

var programas = [];

function guardar(){
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString(); //le indicamos que es un input de html de donde tiene que recoger el dato

	var programa = new Programa();
	programa.setNombre(nombre);
	programa.setVersion(1);


	programas.push(programa);

	var list = "";
	for(var  i = 0; i < programas.length; i++){
		list = list+"<li>"+programas[i].getNombre()+"</li>";

	}//de esta forma recorremos todo lo que hay en el array "programas"

	var listado = <HTMLElement> document.getElementById("listado");
	listado.innerHTML = list;

	(<HTMLInputElement>document.getElementById("nombre")).value ="";//le borra el value. O sea, borra lo que esta escrito en el campo de texto despues de que apretamos el boton
}