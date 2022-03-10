var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.suma = function (valor1, valor2) {
        return valor1 + valor2;
    };
    Calculadora.prototype.Multiplicacion = function (multiplicador, multiplicando) {
        return multiplicador * multiplicando;
    };
    Calculadora.prototype.Resta = function (valor1, valor2) {
        return valor1 - valor2;
    };
    Calculadora.prototype.Division = function (dividendo, divisor) {
        return dividendo / divisor;
    };
    Calculadora.prototype.RaizCuadrada = function (valor1) {
        return Math.sqrt(valor1);
    };
    Calculadora.prototype.DosValores = function (accion) {
        switch (accion) {
            case 1:
                var valores = [0, 0];
                for (var i = 0; i < 2; i++) {
                    valores[i] = parseInt(prompt("Indique el " + (i + 1) + "º valor numerico a sumar: "));
                }
                alert("El resultado de " + valores[0] + " + " + valores[1] + " es: " + this.suma(valores[0], valores[1]));
                break;
            case 2:
                var valores = [0, 0];
                for (var i = 0; i < 2; i++) {
                    valores[i] = parseInt(prompt("Indique el " + (i + 1) + "º valor numerico a restar: "));
                }
                alert("El resultado de " + valores[0] + " - " + valores[1] + " es: " + this.Resta(valores[0], valores[1]));
                break;
            case 3:
                var valores = [0, 0];
                for (var i = 0; i < 2; i++) {
                    valores[i] = parseInt(prompt("Indique el " + (i + 1) + "º valor numerico a multiplicar: "));
                }
                alert("El resultado de " + valores[0] + " * " + valores[1] + " es: " + this.Multiplicacion(valores[0], valores[1]));
                break;
            case 4:
                var valores = [0, 0];
                for (var i = 0; i < 2; i++) {
                    valores[i] = parseInt(prompt("Indique el " + (i + 1) + "º valor numerico a dividir: "));
                }
                alert("El resultado de " + valores[0] + " / " + valores[1] + " es: " + this.Division(valores[0], valores[1]));
                break;
            case 5:
                var valor = void 0;
                valor = parseInt(prompt("Indique el valor numerico para la raiz cuadrada: "));
                alert("La raiz cuadrada de " + valor + " es: " + this.RaizCuadrada(valor));
                break;
            default:
                alert("bad implementation");
                break;
        }
    };
    return Calculadora;
}());
