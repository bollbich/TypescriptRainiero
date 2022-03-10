
interface Operaciones{

    suma(valor1:number, valor2:number):number;
	
	Multiplicacion(multiplicador, multiplicando):number;
	
	Resta(valor1:number, valor2:number):number;
	
	Division(dividendo:number, divisor:number):number;
	
	RaizCuadrada(valor1:number, valor2:number):number;
}


class Calculadora implements Operaciones{
    
    public suma(valor1:number, valor2:number):number
	{
		return valor1 + valor2;
	}
	
	public Multiplicacion(multiplicador, multiplicando):number
	{
		return multiplicador * multiplicando;
	}
	
	public Resta(valor1:number, valor2:number):number
	{
		return valor1 - valor2;
	}
	
	public Division(dividendo:number, divisor:number):number
	{
		return dividendo / divisor;
	}
	
	public RaizCuadrada(valor1:number):number
	{
		return Math.sqrt(valor1);
    }
    
    public DosValores(accion:number)
	{
        switch (accion) {
            case 1:
                let valores:number[] = [0,0];
                for (let i = 0; i < 2; i++) {
                    valores[i] = parseInt(prompt("Indique el "+(i+1)+"º valor numerico a sumar: "));
                }
                alert("El resultado de "+valores[0]+" + "+valores[1]+" es: "+this.suma(valores[0] , valores[1]));
                break;
            case 2:
                let valores:number[] = [0,0];
                for (let i = 0; i < 2; i++) {
                    valores[i] = parseInt(prompt("Indique el "+(i+1)+"º valor numerico a restar: "));
                }
                alert("El resultado de "+valores[0]+" - "+valores[1]+" es: "+this.Resta(valores[0] , valores[1]));
                break;
            case 3:
                let valores:number[] = [0,0];
                for (let i = 0; i < 2; i++) {
                    valores[i] = parseInt(prompt("Indique el "+(i+1)+"º valor numerico a multiplicar: "));
                }
                alert("El resultado de "+valores[0]+" * "+valores[1]+" es: "+this.Multiplicacion(valores[0] , valores[1]));
                break;
            case 4:
                let valores:number[] = [0,0];
                for (let i = 0; i < 2; i++) {
                    valores[i] = parseInt(prompt("Indique el "+(i+1)+"º valor numerico a dividir: "));
                }
                alert("El resultado de "+valores[0]+" / "+valores[1]+" es: "+this.Division(valores[0] , valores[1]));
                break;
            case 5:
                let valor:number;
                valor = parseInt(prompt("Indique el valor numerico para la raiz cuadrada: "));                
                alert("La raiz cuadrada de "+valor+" es: "+this.RaizCuadrada(valor));
                break;
        
            default:
                alert("bad implementation");
                break;
        }
	}
}

