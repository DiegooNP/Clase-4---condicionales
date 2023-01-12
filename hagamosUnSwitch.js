// let dia = "viernes"

// if (dia == "viernes") {
//   console.log("buen finde");
// } else if (dia == "lunes") {
//   console.log("buena semana");
// } else {
//   console.log("buen dia");
// }

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