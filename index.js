console.log('memory-game');
const uniqueCards = [
    {
        id: 1,
        name: "php",
        img: "./images/cards/card_1.png",
    },
    {
        id: 2,
        name: "css3",
        img: "./images/cards/card_2.png",
    },
    {
        id: 3,
        name: "html5",
        img: "./images/cards/card_3.png"
    },
    {
        id: 4,
        name: "jquery",
        img: "./images/cards/card_4.png",
    },
    {
        id: 5,
        name: "javascript",
        img: "./images/cards/card_5.png",

    },
    {
        id: 6,
        name: "node",
        img: "./images/cards/card_6.png",
    },
    {
        id: 7,
        name: "python",
        img: "./images/cards/card_7.png",
    },
    {
        id: 8,
        name: "sass",
        img: "./images/cards/card_8.png",
    },
];
const cards = uniqueCards.concat(uniqueCards);
console.log(cards.length);


window.onload = function() {
    document.body.append(createHeader());
    document.body.append(createCardsField());
    const main = document.body.querySelector('.main');
    createCounters();
    createCards();
    clickByCard();
}


const createEl = (element, className, id) => {
    let elem = document.createElement(element);
    if (className) elem.classList.add(className);
    if (id) elem.setAttribute('id', id);
    return elem;
}
const createHeader = () => {
    let header = createEl('header', 'header');
    let buttonNewGame = createEl('button', 'button', 'button-new-game');
    buttonNewGame.textContent = 'New Game';
    let buttonLeaderBoard = createEl('button', 'button', 'button-leader-board');
    buttonLeaderBoard.textContent = 'LeaderBoard';
    header.append(buttonNewGame, buttonLeaderBoard);
    return header;
}
const createCardsField = () => {
    let main = createEl('main', 'main');
    let container = createEl('div', 'container');
    main.append(container);
    return main;
}
const createCards = () => {
    let container = document.body.querySelector('.container');
    let cardsWrapper = createEl('div', 'cards-wrapper');

    let shuffle = [...cards].sort(() => Math.random() - 0.5);

    shuffle.forEach((cardData, i) => {
        let id = i + 1;
        let card = createEl('div', 'card', id);
        let cardBox = createEl('div', 'card-box');
        let cardFront = createEl('div', 'card-front', id);
        let img = createEl('img', 'image-card');
        img.src = cardData.img;
        img.alt = cardData.name;
        card.dataset.name = cardData.name;

        let idBack = `back-${id}`
        let cardBack = createEl('div', 'card-back', idBack);
        let imgBack = createEl('img', 'image-back');
        imgBack.src = './images/card-back.png';
        imgBack.alt = 'closed card';

        cardBack.append(imgBack);
        cardFront.append(img);
        card.append(cardBox);
        cardBox.append(cardFront);
        cardBox.append(cardBack);
        cardsWrapper.append(card);
    });
    container.append(cardsWrapper);
}
const createCounters = () => {
    let container = document.body.querySelector('.container');
    let wrapperMovesCounter = createEl('div', 'wrapper-counter');
    let movesCounter = createEl('p', 'counter', 'moves-counter');
    movesCounter.textContent = '0';
    wrapperMovesCounter.append(movesCounter);

    let wrapperCorrectPairsCounter = createEl('div', 'wrapper-counter');
    let correctPairsCounter = createEl('p', 'counter', 'correct-pairs-counter');
    correctPairsCounter.textContent = '0';
    wrapperCorrectPairsCounter.append(correctPairsCounter);

   container.append(wrapperMovesCounter, wrapperCorrectPairsCounter);
}
function clickByCard() {
    let firstCard = null;
    let secondCard = null;
    const cardContainer = document.querySelector('.cards-wrapper');
    cardContainer.addEventListener('click', function(event) {
        const card = event.target.closest('.card');
        if (!card) return;
        if (cardContainer.classList.contains('wait')) {
            return;
        }
        card.classList.toggle('flipped');
        card.classList.add('disabled');
        if (!firstCard) {
            firstCard = card;
            firstCard.classList.add('disabled');
        } else {
            secondCard = card;
            firstCard.classList.add('disabled');
        }
        if (firstCard && secondCard) {
            cardContainer.classList.add('wait');
            console.log(`firstCard: ${firstCard.id}`);
            console.log(`secondCard: ${secondCard.id}`);
            console.log(`firstCard: ${firstCard.dataset.name}`);
            console.log(`secondCard: ${secondCard.dataset.name}`);
            if (firstCard.dataset.name === secondCard.dataset.name) {
                classListOpenCardsHandler([firstCard, secondCard], 'add', 'correct');
                setTimeout(() => {
                    classListHandler('.correct', 'remove', 'correct');
                }, 1100);
                classListOpenCardsHandler([firstCard, secondCard], 'add', 'disabled');
                firstCard = null;
                secondCard = null;
                cardContainer.classList.remove('wait');
            } else {
                classListOpenCardsHandler([firstCard, secondCard], 'add', 'wrong');
                setTimeout(() => {
                    classListOpenCardsHandler([firstCard, secondCard], 'remove', 'wrong');
                }, 1100);
                setTimeout(() => {
                    classListOpenCardsHandler([firstCard, secondCard], 'remove', 'flipped');
                    classListOpenCardsHandler([firstCard, secondCard], 'remove', 'disabled');
                    firstCard = null;
                    secondCard = null;
                    cardContainer.classList.remove('wait');
                }, 1201)
            }
        }
    });
}
const classListHandler = (selector, action, classStr) => {
    const cardContainer = document.querySelector('.cards-wrapper');
    const correctCards = cardContainer.querySelectorAll(selector);
    correctCards.forEach((card) => {
        card.classList[action](classStr);
    });
};
const classListOpenCardsHandler = ([first, second], metod, classStr) => {
    first.classList[metod](classStr);
    second.classList[metod](classStr);
};




