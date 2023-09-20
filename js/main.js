// let numero = 10;

// let raiz = Math.sqrt(numero)

// console.log(raiz)


// let dia = prompt("Dime un dia de la semana")

// switch(dia){
//      case 'lunes':
//      case 'martes':
//      case 'miercoles':
//      case 'jueves':
//      case 'viernes':
//          console.log("Entre semana")
//      break;
//      case 'sabado':
//      case 'domingo':
//          console.log("fin de  semana")
//      break;
//      default:
//          console.log("Aprendete los dias de la semana")
//      break;
// }

//Ejercio 1
// num1 = 2
// num2 = 3

// if(num1 === num2){
//     console.log("Son iguales");
// } else if(num1 > num2){
//     console.log(`${num1} es mayor que ${num2}`);
// } else{
//     console.log(`${num1} es menor que ${num2}`);
// };

//Ejercicio 2
// nombre = "Borja"
// console.log(`Bienvenido ${nombre}`)

//Ejercicio 3
// nombre = prompt("Dime tu nombre")
// console.log(`Bienvenido ${nombre}`)

//Ejercicio 4
// radio = prompt("Dime el radio del circulo")
// console.log(Math.PI * (radio**2))

//Ejercicio 5
// numero = prompt("Dame un numero")
// if(numero % 2 === 0){
//     console.log(`${numero} es divisible por 2`)
// }else{
//     console.log(`${numero} no es divisible por 2`)
// }

//Ejercicio 6
// precio = prompt("Dame un precio")
// console.log(precio * 1.21)

//Ejercicio 7
// numero = 1
// lista = ""
// do {
//     lista += `${numero} `;
//     numero++
// }while(numero < 101);
// console.log(lista)

//Ejercicio 8
// lista = ""
// for(var i = 1; i < 101; i++){
//     lista += `${i} `;
// }
// console.log(lista)

//Ejercicio 9 
// lista = ""
// for(var i = 1; i < 101; i++){
//     if(i % 2 === 0 && i % 3 === 0){
//         lista += `${i} `
//     }
// }
// console.log(lista)

//Ejercicio 10
// const vueltas = parseInt(prompt("numero de ventas"))
// let ventas = 0
// let sum = 0
// for(var i = 0; i < vueltas; i++){
//     ventas = parseFloat(prompt("Dame las ventas"))
//     if(!isNaN(ventas)){
//         sum += ventas;
//     }
// }
// console.log(sum)

//Ejercicio 11
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