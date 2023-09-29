let tentarNumero = [];
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;

    responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function mensagemInicial (){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagem = `Voce descobriu com ${tentativas} ${palavraTentativa}`;
    console.log(numeroSecreto);

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", mensagem);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("h1", `Tente um numero menor`);
        } else {
            exibirTextoNaTela("h1" , `Tente um numero maior`);
        }

        tentativas++;

        limparCampo()
    }
}

function numeroAleatorio (){
    let numeroGerado = parseInt(Math.random() * 10 + 1);
    let QntDeNumeros = tentarNumero.length;
    
    if (QntDeNumeros == 3) {
        tentarNumero = [];
    }
    if (tentarNumero.includes(numeroGerado)){
        return numeroAleatorio();
    } else {
        tentarNumero.push(numeroGerado);
        return numeroGerado;
    }
}

function limparCampo (){
    chute = document.querySelector("input");
    chute.value = "";
}

function novoJogo (){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    console.log(numeroSecreto);
}