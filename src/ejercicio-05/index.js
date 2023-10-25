//Ejercicio 5 declaración Switch
//1. crea una variable mes y asigna un numero del 1 al 12 para representar
// un mes
const mes = 1

// usa switch para mostrar le estación 
//del año del mes escogido numericamente
switch (mes) {
    case 12:
    case 1: 
    case 2:
        console.log('Invierno')
        break
    case 3:
    case 4: 
    case 5:
        console.log('Primavera')
        break
    case 6:
    case 7: 
    case 8:
        console.log('Verano')
        break
    case 9:
    case 10: 
    case 11:
        console.log('Otoño')
        break
    default:
        console.log('mes inválido')
}

//3 crear funcion calcularDiasMes que 
//tome un numero de la variable mes y
 //devuelva los días de ese mes
 //usa un switch
 function calcularDiasMes(mes) {
    switch (mes) {
        case 2:
            return 28
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
        default:
            return 31
    }
 }

 //usa funcion calculasDiasMes para mostrar en
 //consola la  Q de días de un mes específico
 function calcularDiasMes(mes) {
 const mesEspecifico = 4
 console.log('El mes ${mesESpecifico} tiene ${calcularDiasMes(mesEspecifico)} días.')
}