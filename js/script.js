const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dataEspecifica = new Date(2023, 11, 11, 15, 17, 0);
// Meses no JavaScript vão do 0 até 11 (sendo 0 = janeiro e 11 = dezembro)

// [15:17, 11/12/2023] Hiann: nosso sistema ja ta de volta
// [15:21, 11/12/2023] Thiago: Amém senhor

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