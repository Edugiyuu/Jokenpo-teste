const buttonpvp = document.getElementById("pvpButton")
const buttonpvb = document.getElementById("pvbButton")
const nomeDosJogadores = document.getElementById("nomeDosJogadores");
const op = document.getElementById("opções");

const buttonVoltar = document.getElementById("pgInicial");
const Logo = document.getElementById("logo");
const JogarPvb = document.getElementById("JogarPvb");
const JogarPvp = document.getElementById("JogarPvp");
const ColoqueNomePlayer1 = document.getElementById("ColoqueNomePlayer1");
const ColoqueNomePlayer2 = document.getElementById("ColoqueNomePlayer2");

const resutadoFinalPvb = document.getElementById("resutadoFinalPvb");
const resutadoFinalPvp = document.getElementById("resutadoFinalPvp");
let nomeDoJogador1
let nomeDoJogador2

const colocarNomeDoPlayer2 = document.getElementById("colocarNomeDoPlayer2");
const enviarNomeDoPlayer2 = document.getElementById("enviarNomeDoPlayer2");
const enviarNomeDoPlayer1 = document.getElementById("enviarNomeDoPlayer1");
const colocarNomeDoPlayer1 = document.getElementById("colocarNomeDoPlayer1");

function PvpDisappear() {
    Logo.style.display = "none";
    buttonpvp.style.display = "none";
    buttonpvb.style.display = "none";
    nomeDosJogadores.style.display = 'block';
    op.style.display = 'block';
    colocarNomeDoPlayer1.style.display = "block"
    enviarNomeDoPlayer1.style.display = "block"
    buttonVoltar.style.display = 'block';
    JogarPvp.style.display = 'block';
    ColoqueNomePlayer1.style.display = "block"
}
function PvbDisappear() {
   Logo.style.display = "none";
    buttonpvb.style.display = "none";
    buttonpvp.style.display = "none";
    buttonVoltar.style.display = 'block';
    op.style.display = 'block';
    colocarNomeDoPlayer1.style.display = "block"
    enviarNomeDoPlayer1.style.display = "block"
    JogarPvb.style.display = "block"
}

function JogarButtonPvb() {
  buttonVoltar.style.display = 'block';
    op.style.display = 'none';
    nomeDosJogadores.style.display = 'none';
    JogarPvb.style.display = "none"
  resutadoFinalPvb.style.display= "block"
}

function JogarButtonPvp() {
  ColoqueNomePlayer2.style.display = "block"
  ColoqueNomePlayer1.style.display = "none"
    Logo.style.display = "none";
    buttonpvp.style.display = "none";
    buttonpvb.style.display = "none";
    colocarNomeDoPlayer2.style.display = "block"
    enviarNomeDoPlayer2.style.display = "block"
    nomeDosJogadores.style.display = 'block';
    op.style.display = 'block';
    buttonVoltar.style.display = 'block';
    JogarPvp.style.display = 'block'; 
}



function ArmazenarNome() {
    nomeDoJogador1 = document.getElementById("colocarNomeDoPlayer1").value;
    console.log(nomeDoJogador1);
}
function ArmazenarNomeDoSegundoPlayer2() {
  nomeDoJogador2 = document.getElementById("colocarNomeDoPlayer2").value;
  alert(nomeDoJogador2);
  console.log(nomeDoJogador2);
}

function AtualizarPagina() {
    location.reload(true);
}

const escolhaDoBotMostrar = document.getElementById('escolhaDoBot')
const EscolhaDoPlayer = document.getElementById('escolhaDoPlayer')
const resultadoFinalPvb = document.getElementById('resultadoPvb')
const resultadoFinalPvp = document.getElementById('resultadoPvp')
const escolhasPossiveis = document.querySelectorAll('#Tesoura, #Pedra, #Papel')

escolhasPossiveis.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  escolhaDoJogador = e.target.id
  
  GerarEscolhaDoRobo()
  pegarResultadoPvb()
  //alertselect()
  ArmazenarNome()
  mudarNome(nomeDoJogador1, escolhaDoJogador)
  
}))

escolhasPossiveis.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  escolhaDoJogador1 = e.target.id
  
  GerarEscolhaDoRobo()
  pegarResultadoPvb()
  alertselect()
  ArmazenarNome()
  mudarNome(nomeDoJogador1, escolhaDoJogador)
  
}))

function GerarEscolhaDoRobo() {
  const NumeroAleatorio = Math.floor(Math.random() * 3) + 1;
  
  if (NumeroAleatorio === 1) {
    escolhaDoBot = 'Pedra'
  }
  if (NumeroAleatorio === 2) {
    escolhaDoBot = 'Tesoura'
  }
  if (NumeroAleatorio === 3) {
    escolhaDoBot = 'Papel'
  }
  escolhaDoBotMostrar.innerHTML = escolhaDoBot
}

function pegarResultadoPvb() {
  if (escolhaDoBot === escolhaDoJogador) {
    resultado = 'Empate'
  }
  if (escolhaDoBot === 'Pedra' && escolhaDoJogador === "Papel") {
    resultado = `${nomeDoJogador1} Ganhou`
  }
  if (escolhaDoBot === 'Pedra' && escolhaDoJogador === "Tesoura") {
    resultado = `${nomeDoJogador1} Perdeu`
  }
  if (escolhaDoBot === 'Papel' && escolhaDoJogador === "Tesoura") {
    resultado = `${nomeDoJogador1} Ganhou`
  }
  if (escolhaDoBot === 'Papel' && escolhaDoJogador === "Pedra") {
    resultado = `${nomeDoJogador1} Perdeu`
  }
  if (escolhaDoBot === 'Tesoura' && escolhaDoJogador === "Pedra") {
    resultado = `${nomeDoJogador1} Ganhou`
  }
  if (escolhaDoBot === 'Tesoura' && escolhaDoJogador === "Papel") {
    resultado = `${nomeDoJogador1} Perdeu`
  }
  resultadoFinalPvb.innerHTML = resultado
}

function pegarResultadoPvp() {
  if (escolhaDoBot === escolhaDoJogador) {
    resultado = 'Empate'
  }
  if (escolhaDoBot === 'Pedra' && escolhaDoJogador === "Papel") {
    resultado = `${nomeDoJogador1} Ganhou`
  }
  if (escolhaDoBot === 'Pedra' && escolhaDoJogador === "Tesoura") {
    resultado = 'Player1 Perdeu'
  }
  if (escolhaDoBot === 'Papel' && escolhaDoJogador === "Tesoura") {
    resultado = `${nomeDoJogador1} Ganhou`
  }
  if (escolhaDoBot === 'Papel' && escolhaDoJogador === "Pedra") {
    resultado = 'Player1 Perdeu'
  }
  if (escolhaDoBot === 'Tesoura' && escolhaDoJogador === "Pedra") {
    resultado = `${nomeDoJogador1} Ganhou`
  }
  if (escolhaDoBot === 'Tesoura' && escolhaDoJogador === "Papel") {
    resultado = 'Player1 Perdeu'
  }
  resultadoFinalPvp.innerHTML = resultado
}

function alertselect() {
  if (escolhaDoJogador === 'Papel') {
    alert("Papel selecionada")
  } else if (escolhaDoJogador ==='Pedra') {
    alert('Pedra selecionada')
  }else if (escolhaDoJogador ==='Tesoura') {
    alert('Tesoura selecionada')
  }
}

function mudarNome(coco, escolhaDoJogador) {
  let selecionaLabel = document.getElementById("escolhaPlayer")
  selecionaLabel.innerHTML = `Escolha Do ${coco}: ${escolhaDoJogador}`
}