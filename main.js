const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const clickOnCookie = document.querySelector("#closedCookie")

const phrases = [
    'Além de não ser fácil, ainda é difícil!',
    'É por isso que a sua família faz churrasco sem você.',
    'Expectativa é igual paçoca, do nada esfarela tudo.',
    'Não se desanime com a derrota de hoje, porque amanhã tem mais.',
    'Agora você sabe porque o Uber cancela sua corrida.',
    'O segredo do sucesso é fazer o contrário do você está fazendo',
    'Relaxa, porque daqui para frente é só para trás.',
    'Arrisque, tente, lute, mostre para você mesmo o quanto é incapaz.',
    'Depois dessa sua atitude eu vou no banheiro por 15 minutos, se eu não voltar, leia novamente.',
    'O mérito da derrota é todinho seu, orgulhe-se.',
    'A verdade dói, mas precisa ser dita: "Não será desta vez".',
    'É só uma fase ruim, logo vai piorar.',
    'Não sabendo que era impossível, foi lá e soube.',
    'Quando tudo estiver dando errado, se acostume.',
    'Você não pode mudar o seu passado, porém pode estragar seu futuro.',
    'Acreditar que você consegue já é meio caminho para o fracasso.',
    'A vida é o que acontece quando você está ocupado lendo frases motivacionais.',
    'Relaxe, a vida é uma fonte inesgotável de frustrações.',
    'Pode ser que o seu propósito na vida seja servir de aviso para os outros.',
    'Pode sonhar! Mas saiba que os sonhos antecedem os seus fracassos..',
    'Tudo passa, até as coisas ruins vão embora para coisas terríveis chegarem.',
  ];

let randomPhrase = document.querySelector('#randomPhrase')
let chooseRandomPhrase

clickOnCookie.addEventListener('click', choosePhrase)
document.addEventListener('keydown', pressEnterKey)

function choosePhrase () {
    toggleScreen ()
    chooseRandomPhrase = Math.floor(Math.random()*(phrases.length));
    randomPhrase.innerText = phrases[chooseRandomPhrase]
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterKey(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        toggleScreen()
    }
}