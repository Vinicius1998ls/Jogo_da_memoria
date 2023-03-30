// essa função começa e recomeça o jogo
function start(time) {
    //seleciona a div que engloba as cartas
    const cardSpace = document.querySelector('.organizer-cards')

    //remove as cartas se houver
    while(cardSpace.firstChild) {
        cardSpace.removeChild(cardSpace.firstChild)
    }

    //inseri as cartas
    cardSpace.innerHTML = `<div id="card-1">
                                <div class="card" 
                                onclick="turn('card-1', position[0], number=0)">Jogo da memória</div>
                            </div>

                            <div id="card-2">
                                <div class="card" 
                                onclick="turn('card-2', position[1], number=1)">Jogo da memória</div>
                            </div>

                            <div id="card-3">
                                <div class="card" 
                                onclick="turn('card-3', position[2], number=2)">Jogo da memória</div>
                            </div>

                            <div id="card-4">
                                <div class="card" 
                                onclick="turn('card-4', position[3], number=3)">Jogo da memória</div>
                            </div>

                            <div id="card-5">
                                <div class="card" 
                                onclick="turn('card-5', position[4], number=4)">Jogo da memória</div>
                            </div>

                            <div id="card-6">
                                <div class="card" 
                                onclick="turn('card-6', position[5], number=5)">Jogo da memória</div>
                            </div>

                            <div id="card-7">
                                <div class="card" 
                                onclick="turn('card-7', position[6], number=6)">Jogo da memória</div>
                            </div>

                            <div id="card-8">
                                <div class="card" 
                                onclick="turn('card-8', position[7], number=7)">Jogo da memória</div>
                            </div>

                            </div>`

    //Remove o botão começar e adiciona o botão recomeçar
    if(time == 'first') {
        const start = document.getElementById('start')
        start.remove()
        addButton()
    }

    // Limpa o array
    position = new Array(8).fill(undefined)
    // chama a função para preencher o array position
    setCard('HTML')
    setCard('CSS')
    setCard('JS')
    setCard('GPT')

}

// função para inserir o botão recomeçar
function addButton() {
    const section = document.getElementsByTagName('section')[0]
    const button = document.createElement('button')
    button.id = 'restart'
    button.textContent = 'Recomeçar'
    button.onclick = start

    section.appendChild(button)
}

//cria o array
let position = new Array(8).fill(undefined)

//sorteia um numero de 0 a 7
function randomNumber(min, max) {
    min = Math.ceil(0)
    max = Math.floor(7)
    const number = Math.floor(Math.random() * (max - min + 1) + min)
    return number
}

//função para definir qual posição do array vai receber o valor
function setCard(card) {
    //recebe um numero aleatorio
    number = randomNumber()
    //se a posição conter um valor vai ser gerado outro numero
    while(position[number] !== undefined) {
        number = randomNumber()
    }
    //posição recebe o valor passado como parametro
    position[number] = card

    number = randomNumber()
    while(position[number] !== undefined) {
        number = randomNumber()
    }
    position[number] = card
}

const childrenList = []
const idList = []
const cardList = []

// função para virar carta
function turn(id, cardValue, children) {
    idList.push(id)
    cardList.push(cardValue)
    childrenList.push(children)    
    
    if(cardList[1] == undefined) {
        sideCard(cardList[0], childrenList[0])
    } else {
        sideCard(cardList[1], childrenList[1])
    }
    
    if(cardList[1] != undefined) {
        console.log(cardList)
        if(cardList[0] == cardList[1]) {
            console.log('São iguais')
            idList.splice(0, idList.length)
            cardList.splice(0, cardList.length)
            childrenList.splice(0, childrenList.length)
         } else {
            console.log('São Diferentes')            
            setTimeout(() => turnAgain(idList[0], childrenList[0]), 900)
            console.log('teste')
            setTimeout(() => turnAgain(idList[1], childrenList[1]), 900)
            console.log('teste2')

            setTimeout(() => {
                idList.splice(0, idList.length)
                cardList.splice(0, cardList.length)
                childrenList.splice(0, childrenList.length)
                console.log(idList)
                console.log(cardList)
                console.log(childrenList)
            }, 925)
        }
        
    }    
}

function sideCard(cardValue, position) {
    const cardSpace = document.querySelector('.organizer-cards')
    
    //inseri a nova divida conforme o parametro recebido
    if(cardValue == 'HTML') {
        cardSpace.children[position].innerHTML = `<div class="card-img">
                            <img src="imgs/html.png" alt="html icon">
                        </div>`
    } else if(cardValue == 'CSS') {
        cardSpace.children[position].innerHTML = `<div class="card-img">
                            <img src="imgs/css.png" alt="css icon">
                        </div>`
    } else if(cardValue == 'JS') {
        cardSpace.children[position].innerHTML = `<div class="card-img">
                            <img src="imgs/javascript.png" alt="js icon">
                        </div>`
    } else {
        cardSpace.children[position].innerHTML = `<div class="card-img">
                            <img src="imgs/gpt.png" alt="ChatGPT icon">
                         </div>`
    }
}

function turnAgain(id, number) {
    
    const card = document.getElementById(id)
    
    card.children[0].remove()
    card.innerHTML = `<div class="card" 
                        onclick="turn('${id}', position[${number}], number=${number})">
                        Jogo da memória
                    </div>`
}