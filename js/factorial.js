

let numero = prompt("Ingresa un numero para saber su factorial")

if (isNaN(numero)) {
    alert("Por favor, Ingrese un numero valido ");
} else {
    let factorial_resultado = 1;

    for (let i = 1; i <= numero; i++){
        factorial_resultado = factorial_resultado * i;
    }
    alert("El factorial de " + numero + " es " + factorial_resultado);
}


