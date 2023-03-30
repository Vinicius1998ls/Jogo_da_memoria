// essa função começa e recomeça o jogo
function start(time) {
    //seleciona a div que engloba as cartas
    const cardSpace = document.querySelector('.organizer-cards')

    //remove as cartas se houver
    while(cardSpace.firstChild) {
        cardSpace.removeChild(cardSpace.firstChild)
    }

    //inseri as cartas
    cardSpace.innerHTML = `<div id="card-1" onclick="turn('card-1', position[0])">
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div id="card-2" onclick="turn('card-2', position[1])">
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div id="card-3" onclick="turn('card-3', position[2])">
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div id="card-4" onclick="turn('card-4', position[3])">
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div id="card-5" onclick="turn('card-5', position[4])">
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div id="card-6" onclick="turn('card-6', position[5])">
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div id="card-7" onclick="turn('card-7', position[6])">
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div id="card-8" onclick="turn('card-8', position[7])">
                                <div class="card">Jogo da memória</div>
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

// função para virar carta
function turn(id, cardValue) { 
    // seleciona o ID recebido como parametro   
    const card = document.getElementById(id)
    // Remove a div
    card.children[0].remove()

    //inseri a nova divida conforme o parametro recebido
    if(cardValue == 'HTML') {
        card.innerHTML = `<div class="card-img">
                            <img src="imgs/html.png" alt="html icon">
                        </div>`
    } else if(cardValue == 'CSS') {
        card.innerHTML = `<div class="card-img">
                            <img src="imgs/css.png" alt="css icon">
                        </div>`
    } else if(cardValue == 'JS') {
        card.innerHTML = `<div class="card-img">
                            <img src="imgs/javascript.png" alt="js icon">
                        </div>`
    } else {
        card.innerHTML = `<div class="card-img">
                            <img src="imgs/gpt.png" alt="ChatGPT icon">
                         </div>`
    }
    
}