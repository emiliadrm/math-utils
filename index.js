function suma(a, b) {
    console.log("SUMA", a + b)
    return a + b
}

function resta(a, b) {
    console.log("RESTA", a - b)
    return a - b
}

function multiplicacion(a, b) {
    console.log("MULTIPLICACION", a * b)
    return a * b
}

function division(a, b) {
    console.log("DIVISION", a / b)
    return a / b
}

suma(12, 25);
resta(30, 8);
multiplicacion(12, 5);
division(50,10);


// Nueva función que muestra cual numero es menor
function menorQue(a, b) {
    if( a > b) {
        return `${b} es MENOR que ${a}`
    } else {
        return `${a} es MENOR que ${b}`
    }
}
