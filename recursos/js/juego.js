const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let cartas = [];

const btnNuevo = document.querySelector(".btnNuevo");
const btnPedir = document.querySelector(".btnPedir");
const btnDetener = document.querySelector(".btnDetener");

const crearBaraja = () => {
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
};

const pedirCarta = () => cartas.pop();
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  const val = isNaN(valor) ? (valor == "A" ? 11 : 10) : valor * 1;
  console.log(val);
};

crearBaraja();
console.log(pedirCarta());
valorCarta("3C");
