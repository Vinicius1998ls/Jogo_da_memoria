function start(time) {
    const cardSpace = document.querySelector('.organizer-cards')

    while(cardSpace.firstChild) {
        cardSpace.removeChild(cardSpace.firstChild)
    }

    cardSpace.innerHTML = `<div id="card-1" onclick="turn()">
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div>
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div>
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div>
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div>
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div>
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div>
                                <div class="card">Jogo da memória</div>
                            </div>

                            <div>
                                <div class="card">Jogo da memória</div>
                            </div>

                            </div>`

    if(time == 'first') {
        const start = document.getElementById('start')
        start.remove()
        addButton()
    }
}

function addButton() {
    const section = document.getElementsByTagName('section')[0]
    const button = document.createElement('button')
    button.id = 'restart'
    button.textContent = 'Recomeçar'
    button.onclick = start

    section.appendChild(button)
}

const position = [0, 1, 2, 3, 0, 1, 2, 3]

function turn() {    
    const card = document.getElementById('card-1')

    card.children[0].remove()

    card.innerHTML = `<div class="card-img">
                        <img src="imgs/html.png" alt="html icon">
                    </div>`
}