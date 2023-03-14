const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let cartas = [];
let puntosJugador=0, puntosComputadora=0;

const btnNuevo = document.querySelector(".btnNuevo");
const btnPedir = document.querySelector(".btnPedir");
const btnDetener = document.querySelector(".btnDetener");
const jugadorCartas = document.getElementById("jugador-cartas");
const computadoraCartas= document.getElementById("computadora-cartas");
const puntoJugador= document.querySelector(".punto-jugador");
const puntoComputadora= document.querySelector(".punto-computadora");
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
  return isNaN(valor) ? (valor == "A" ? 11 : 10) : valor * 1;
};

const turnoComputadora=(puntosJugador)=>{
    do {

       const carta = pedirCarta();
       const valor = valorCarta(carta);
       puntosComputadora += valor;
       puntoComputadora.textContent = puntosComputadora;
      const imgCarta = document.createElement("img");
      imgCarta.classList.add("carta");
      imgCarta.src = `recursos/cartas/${carta}.png`;
      computadoraCartas.appendChild(imgCarta);

    } while (puntosJugador < 21);
}

crearBaraja();

btnPedir.addEventListener("click", () => {
  const carta = pedirCarta();
  const valor = valorCarta(carta);
  puntosJugador+=valor;
  puntoJugador.textContent=puntosJugador;

  const imgCarta = document.createElement("img");
  imgCarta.classList.add("carta");
  imgCarta.src = `recursos/cartas/${carta}.png`;
  jugadorCartas.appendChild(imgCarta);

  if(puntosJugador >= 21){
    turnoComputadora(puntosJugador);
  }

});
btnDetener.addEventListener("click",()=>{
    turnoComputadora(puntosJugador);
});
