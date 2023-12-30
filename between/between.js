function between(beggining, end) {
    let intervalo = [];
    for (let i = beggining; i <= end; i++) {
      intervalo.push(i);
    }
    return intervalo;
}
  
const parametros = between(1, 4);
console.log(parametros);
