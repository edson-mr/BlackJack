
const tipos = ['C','D','H','S'];
const especiales=['A','J','Q','K'];
let cartas=[];

const btnNuevo= document.querySelector(".btnNuevo");
const btnPedir = document.querySelector(".btnPedir");
const btnDetener = document.querySelector(".btnDetener");

const crearBaraja =()=>{

    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            cartas.push(i + tipo);
        }
    }

    for (const especial of especiales) {
        for (const tipo of tipos) {
            cartas.push(especial + tipo);
        }
    }

    cartas = _.shuffle(cartas);

    console.log(cartas);

}

const pedirCarta=()=>cartas.pop();

crearBaraja();
console.log(pedirCarta());