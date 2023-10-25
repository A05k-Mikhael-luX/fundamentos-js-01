//ejercicio operador ternario

//crea una variable numero y asignale un valor
const numero=70;


//crea un operador ternario para
// asignar tipoNumero
const tipoNumero = numero>0 ? 'positivo':
'negativo o cero'
console.log('El número es ${tiponumero}')

//3 variable cadena
const cadena = 'Hola Mundo'

//4 operador ternario para asignar 
//longitudCadena
const longitudCadena = cadena.length <5? 'larga' :'corta'
console.log('la cadena es ${longitudCadena}')

//5 Funcion esVocal
function esVocal(letra) {
    const vocales='aeiouAEIOU'
    return vocales.includes(letra)
}

//usa la funcion esVocal
const caracter = 'e'
if (esVocal(caracter)) {
    console.log('${caracter} es una vocal')
} else {
    console.log ('${caracter} no es una vocal')
}

