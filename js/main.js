// let numero = 10;

// let raiz = Math.sqrt(numero)

// console.log(raiz)


let dia = prompt("Dime un dia de la semana")

switch(dia){
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log("Entre semana")
    break;
    case 'sabado':
    case 'domingo':
        console.log("fin de  semana")
    break;
    default:
        console.log("Aprendete los dias de la semana")
    break;
}
