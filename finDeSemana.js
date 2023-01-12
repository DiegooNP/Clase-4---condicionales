// let dia = 'jueves'
// function finDeSemana (dia) {	
// 	if (dia == 'viernes') {
//     	console.log('buen finde')
// 	} else if (dia == 'lunes') {
//     	console.log('buena semana')
// 	} else {
//     	console.log('buen dia')
// 	}
// }
//El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el 
//día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else 
//que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado.


// function finDeSemana(dia){
//     let diaAsignado = 'jueves';
    
//     switch (dia) {
//         case 'viernes':
//             finDeSemana = diaAsignado;
//             console.log("buen finde")  
//             break;
//         case 'lunes':
//             finDeSemana = diaAsignado;
//             console.log("buena semana")
//             break;
//         default:
//             console.log("buen dia")
//     }
// }

// finDeSemana("martes"); 

let dia = 'jueves';
function finDeSemana(dia){
    
    
    switch (dia) {
        case 'viernes':
            //finDeSemana = diaAsignado;
            console.log("buen finde")  
            break;
        case 'lunes':
            //finDeSemana = diaAsignado;
            console.log("buena semana")
            break;
        default:
            console.log("buen dia")
    }
}

finDeSemana("viernes");