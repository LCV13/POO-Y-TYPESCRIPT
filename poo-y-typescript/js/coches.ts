//La interfaz

interface cocheBase{ //ya definimos la interfaz
	getModelo():string;
	getVelocidad():number;
}

//El molde
class Coche implements cocheBase{ //le implementamos la interfaz a la clase
	public color: string;
	public modelo: string;
	public velocidad: number;


	constructor(modelo:Any = null){ //esto es opcional
		this.color = "Blanco"; //el color pode defecto es blanco
		this.velocidad = 0;

		if(modelo==null){
		this.modelo = "BMW Generico";
		}else{
			this.modelo = modelo;
		}
	}

	public getModelo():string{
		return this.modelo; 
	}

	public setModelo(modelo:string){
		this.modelo = modelo;
	}


	public getColor(){
		return this.color; //esto lo que va a hacer es devolvernos el valor de la propiedad color
	}

	public setColor(color:string){
		this.color = color;
	}

	public acelerar(){
		this.velocidad++;//le sumamos 1 a la velocidad 
	}

	public frenar(){
		this.velocidad--; //le restamos 1 a la velocidad
	}

	public getVelocidad():number{
		return this.velocidad;
	}
}

//El objeto que va a usar el molde

var coche = new Coche("Renault clio R.S"); //listo, objeto creado. tenemos por defecto ese modelo pero se lo podemos cambiar
var coche_dos = new Coche(); //nuevo coche creado
var coche_tres = new Coche(); //otro coche creado


coche.setColor("Rojo");//el color por defecto era blanco pero se lo cambiamos a Rojo
coche.acelerar();
coche.acelerar();
coche.acelerar();
//la velocidad está a 3


console.log("El modelo del coche es "+coche.getModelo());
console.log("El color del coche es "+coche.getColor());
console.log("El velocidad del coche es "+coche.getVelocidad());


coche.frenar();
console.log("El velocidad despues de frenar el coche es "+coche.getVelocidad());
//ahora la velocidad es 2

/*coche_dos.setColor("Azul");
coche_tres.setColor("Verde");
console.log("El color del coche 2 es "+coche_dos.getColor());
console.log("El color del coche 3 es "+coche_tres.getColor());*/

