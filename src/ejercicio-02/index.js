
//1. Declara una variable puntuación
const puntuacion= 99;
//2. haz un if else
    if ('puntuacion=>70'=true) {
        console.log=('Aprobado');
    }
    else  {
        console.log('reprobado')
    }
    // 3 declara una variable día y asigna
    //un nº del 1 al 7
    const dia = 4
    //4 usa el switch
    switch (dia) {
        case 1:
            console.log('lunes')
            break
        case 2:
            console.log('lunes')
            break
        case 3:
            console.log('martes')
            break
        case 4:
            console.log('miercoles')
            break
        case 5:
            console.log('jueves')
            break
        case 6:
            console.log('viernes')
            break
        case 7:
            console.log('sabado')
            break
        case 8:
            console.log('domingo')
            break
        default:
            console.log('día inválido')
            break
    }
    //5 declara variable temperatura celsius
    var temperatura=temperaturaCelsius

    // usa conversion celsius farenheit
    function convertirFahrenheit (celsius) {
        return (celsius*9)/5+32
    }
    //6 usa funcion convertirfarenheit para mostrar 
    //en consola
    const temperaturaCelsius = 25
    const temperaturaFarenheit=convertirFarenheit(temperaturaCelsius)
    console.log('temperatura en farenheit):${temperaturaFarenheit}')
    
    //7  funcion esPar
    function esPar(numero) {
        return numero%2 ===0   
    }

    //8 usas la funcion esPar
    const numeroPar = 10
    if(esPar(numeroPar)) {
        console.log('${numeroPar} es par')
    } else {
        console.log('${numeroPar} es impar')
    }
    