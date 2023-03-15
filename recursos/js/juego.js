const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];
let cartas = [];
let puntosJugadores = [];

const btnNuevo = document.querySelector(".btnNuevo"),
  btnPedir = document.querySelector(".btnPedir"),
  btnDetener = document.querySelector(".btnDetener"),
  jugadoresDiv = document.querySelectorAll(".jugadoresDiv"),
  puntosJugadoresSmall = document.querySelectorAll("small");

const inicializarJuego = (numJugadores = 2) => {
  cartas = [];
  cartas = crearBaraja();
  puntosJugadores=[];
  for (let i = 1; i <= numJugadores; i++) {
    puntosJugadores.push(0);
  }

  jugadoresDiv.forEach(el=> el.innerHTML="");
  puntosJugadoresSmall.forEach(el=> el.textContent=0);

  btnPedir.disabled=false;
  btnNuevo.disabled=true;

};

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

  return _.shuffle(cartas);
};

const pedirCarta = () => cartas.pop();
const valorCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor == "A" ? 11 : 10) : valor * 1;
};

const obtenerPuntos=(turno, valor)=>{
     puntosJugadores[turno] += valor;
     puntosJugadoresSmall[turno].textContent = puntosJugadores[turno];

     return puntosJugadores[turno];
}

const pintarCarta=(turno, carta)=>{
  const imgCarta = document.createElement("img");
  imgCarta.classList.add("carta");
  imgCarta.src = `recursos/cartas/${carta}.png`;
  jugadoresDiv[turno].append(imgCarta);
}

const obtenerGanador = () => {

  const [puntosJugador, puntosComputadora]= puntosJugadores;

  if (puntosJugador > 21) {
    alert("computadora gana");
  } else if (puntosComputadora > 21) {
    alert("jugador gana");
  } else if (puntosJugador === puntosComputadora) {
    alert("empate");
  } else if (puntosJugador < puntosComputadora) {
    alert("computadora gana");
  } else {
    alert("jugador gana");
  }
};

const turnoComputadora = (puntoJugador) => {
  let puntoComputadora=0;
  do {
    const carta = pedirCarta();
    const valor = valorCarta(carta);
    puntoComputadora = obtenerPuntos(puntosJugadores.length - 1, valor);
    pintarCarta(puntosJugadores.length - 1, carta);
  } while (
    puntoJugador <= 21 &&
    (puntoComputadora < puntoJugador ||
      (puntoComputadora === puntoJugador && puntoJugador < 21))
  );

  setTimeout(() => {
    obtenerGanador();
  }, 300);
};

crearBaraja();

btnPedir.addEventListener("click", () => {
  btnDetener.disabled=false;
  const carta = pedirCarta();
  const valor = valorCarta(carta);
 const puntoJugador= obtenerPuntos(0,valor);
  pintarCarta(0, carta);

  if (puntoJugador >= 21) {
    turnoComputadora(puntoJugador);
  }
});

btnDetener.addEventListener("click", () => {
  turnoComputadora(puntosJugadores[0]);

  btnNuevo.disabled=false;
  btnPedir.disabled=true;
  btnDetener.disabled=true;
});

btnNuevo.addEventListener("click", () => {
  inicializarJuego();
});
