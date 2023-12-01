const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dataEspecifica = new Date(2023, 10, 29, 9, 20, 0);

const relogio = setInterval(function time() {
    let dataAtual = new Date();
    let diferenca = dataAtual - dataEspecifica;

    let diasPassados = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    let horasPassadas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutosPassados = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    let segundosPassados = Math.floor((diferenca % (1000 * 60)) / 1000);

    dias.textContent = diasPassados < 10 ? '0' + diasPassados : diasPassados;
    horas.textContent = horasPassadas < 10 ? '0' + horasPassadas : horasPassadas;
    minutos.textContent = minutosPassados < 10 ? '0' + minutosPassados : minutosPassados;
    segundos.textContent = segundosPassados < 10 ? '0' + segundosPassados : segundosPassados;
}, 1000);