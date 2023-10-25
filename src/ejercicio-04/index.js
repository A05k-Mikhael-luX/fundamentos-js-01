//ejercicio 4 condiciones anidadas y operador

//1. variable 'hora' y asignale un valor numerico
const hora = 24

// 2. condicionales anidados para determinar el momento del día
if (hora<12) {
    console.log('Buenos días')
} else if  (hora>= 12 && hora <= 18) {
    console.log('Buenas tardes')
} else {
    console.log('Buenas noches')
}

//3 crea funcion 'es mayor de edad' que tome la 
//edad como argumento y devuelva tru si edad>=18 
//y false si es menor
function esMayorDeEdad(edad) {
    return edad>=18
}
if (edad >= 18) {
    console.log('es mayor de edad')
} else {
    console.log('es menor de edad')
}

//4. condicionales anidados con operador logico 
//para verificar mayor de edad y estudiante
const esEstudiante = 20
const edadPersona = 28

if (esMayorDeEdad(edadPersona)&& esEstudiante) {
    console.log('Es mayor de edad y estudiante')
} else {
    console.log('no cumple ambas condiciones')
}

//5 crea funcion esVocal que tome una letra y devuelva true si es vocal 
//y false si no lo es
function esVocal(letra) {
    const vocal= 'aeiouAEIOU'
    return vocales.includes(letra)
}
const letraCaracter = 'A'
if (esVocal(letraCaracter)) {
    console.log('${letracaracter} es una vocal')
} else {
    console.log('${letraCaracter} no es una vocal')
}

