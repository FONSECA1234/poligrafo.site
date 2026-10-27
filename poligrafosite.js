let perguntas = [
    "Você estava no local do crime na hora da ocorrência?",
    "Você conhecia a vítima?",
    "Você discutiu com a vítima nos ultimos dias?",
    "Você saiu do local as pressas depois do ocorrido?",
    "Você tem algum objeto que pertencia a vitima?",
    "Você mentiu para a policia em algum momento?",
    "Você ganharia algo com o que aconteceu com a vitima?",
    "Alguem te viu perto do local no horario do crime?",
    "Você apagou mensagens ou fotos ligadas ao caso?",
    "Você sabe quem fez isso e está escondendo?"
];

let contador = 0;
let atual = 0;

mostrarPergunta();

function mostrarPergunta() {
    document.getElementById("pergunta").innerHTML = perguntas[atual];
    document.getElementById("numero").innerHTML = "Pergunta " + (atual + 1) + " de " + perguntas.length;
}

function responder() {
    let resposta = document.getElementById("resposta").value;
    
    if (resposta === "") {
        alert("Escolha uma resposta!");
        return;
    }
    
    if (resposta === "sim") {
        contador++;
    }
    
    atual++;
    document.getElementById("resposta").value = "";
    
    if (atual < perguntas.length) {
        mostrarPergunta();
    } else {
        resultado();
    }
}

function resultado() {
    let classificacao = "";
    let falaPatrick = "";
    
    if (contador < 5) {
        classificacao = "INOCENTE";
        falaPatrick = "Patrick Jane: Pode ir para casa, sua história se sustenta.";
    } else if (contador === 5) {
        classificacao = "SUSPEITO";
        falaPatrick = "Patrick Jane: Humm... tem algo estranho aí. Vamos ficar de olho.";
    } else if (contador <= 9) {
        classificacao = "CUMPLICE";
        falaPatrick = "Patrick Jane: Você sabe mais do que contou. Ajudou o culpado, não foi?";
    } else {
        classificacao = "CULPADO";
        falaPatrick = "Patrick Jane: Caso encerrado! Foi você, e o polígrafo não mente.";
    }
    
    let mensagemFinal = `<strong>Classificação: ${classificacao}</strong><br><br>${falaPatrick}<br><br><small>Respostas SIM: ${contador}</small>`;
    
    document.getElementById("pergunta").innerHTML = mensagemFinal;
    document.getElementById("numero").innerHTML = "Fim do interrogatório";
    document.getElementById("resposta").style.display = "none";
    document.querySelector("button").style.display = "none";
    document.getElementById("reiniciar").style.display = "inline-block";
}

function reiniciarJogo() {
    location.reload();
}