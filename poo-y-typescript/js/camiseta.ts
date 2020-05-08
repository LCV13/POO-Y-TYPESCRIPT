//Interface

interface camisetaBase{
	setColor(color);
	getColor();

}

//decorador
function estampar(logo: string){
	return function(target: Function){//que devuelva esta funcion
		target.prototype.estampacion = function():void{	//estampacion es un metodo que creamos. Void significa que no va a devolver nada
			console.log("camiseta estampada con el logo de: "+logo);
		}

	}
}

//Clase (molde)
@estampar('Gucci Gang')//con la @+(nombre de la funcion del decorador) le aplicamos el decorador. UN DECORADOR NUNCA SE CIERRA CON ;
/*export*/ class Camiseta implements camisetaBase{

//Propiedades (caracteristicaas)
	private color:string; 
	private modelo:string;
	private marca:string;
	private talla: string;
	private precio: number;
//Metodos (funxiones o acciones del objecto)

constructor(color, modelo, marca, talla, precio){//constructor sirve para darle un valor a las propiedades de la clase
	this.color = color;
	this.modelo= modelo;
	this.marca = marca;
	this.talla = talla;
	this.precio = precio;

}	

	public setColor(color){ //set se usa siempre
		this.color = color;
	}

	public getColor(){ //get se usa siempre
		return this.color
	}
}

//Clase hija

class Sudadera extends Camiseta{
	public capucha: boolean;

	setCapucha(capucha: boolean){
		this.capucha = capucha;
	}

	getCapucha():boolean{//tiene que devolver un booleano
		return this.capucha;
	}
}


var camiseta = new Camiseta("rojo","manga larga","nike","l",14);
 console.log(Camiseta);
 camiseta.estampacion();

var sudadera_nike = new Sudadera("rojo","manga corta","adidas","m",30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("Gris Japeado");
console.log(sudadera_nike);

/*camiseta.setColor("rojo");



/*console.log(camiseta);*/



/*var playera = new Camiseta();
playera.setColor("rojo");


console.log(camiseta.getColor(), playera);*/