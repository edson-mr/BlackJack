

const tipos = ['C','D','H','S'];
const especiales=['A','J','Q','K'];
let cartas=[];

for (let i = 2; i <=10; i++) {
   for (const tipo of tipos) {
        cartas.push(i+tipo);
   } 
}
for (const especial of especiales) {
    for (const tipo of tipos) {
        cartas.push(especial+tipo);
    }
}

cartas = _.shuffle(cartas);

console.log(cartas);