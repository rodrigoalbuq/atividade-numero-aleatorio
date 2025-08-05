function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

let numeroGerado = getRandom(1, 101);

let tentativasRestantes = 10;

function atualizarTentativas() {
    document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;
}

function verificarPalpite() {
    const numeroDigitado = parseInt(document.getElementById("numero").value);
    console.log(numeroDigitado);

    if (numeroDigitado < 1 || numeroDigitado > 100 || isNaN(numeroDigitado)) {
        alert(`Número inválido! Por favor, digite um número entre 1 e 100`);
        return;
    }

    tentativasRestantes--;
    atualizarTentativas();

    if (numeroDigitado === numeroGerado) {
        document.getElementById("informações").textContent = ("Parabéns! Você acertou o número secreto!");
        document.getElementById("numero").disabled = true;
        document.getElementById("button").disabled = true;
        return;
    }

    if (tentativasRestantes === 0) {
        document.getElementById("informações").textContent = (`Você perdeu! O número secreto era ${numeroGerado} `);
        document.getElementById("numero").disabled = true;
        document.getElementById("button").disabled = true;
        return;

    }

    if (numeroDigitado < numeroGerado) {
        document.getElementById("informações").textContent = (`O número secreto é maior !`);
        return;
    }

    if (numeroDigitado > numeroGerado) {
        document.getElementById("informações").textContent = (`O número secreto é menor !`);
        return;

    }

}
// Chame atualizarTentativas() ao iniciar o jogo
atualizarTentativas();


