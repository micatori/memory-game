console.log('memory-game');
const cards = [
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

window.onload = function() {
    document.body.append(createHeader());
    document.body.append(createCardsField());
    const main = document.body.querySelector('.main');
    main.append(createCards());
}
const createEl = (element, className, id) => {
    let elem = document.createElement(element);
    elem.classList.add(className);
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
    for (let i = 0; i < 8; i += 1) {
        let id = i + 1;
        let card = createEl('div', 'card');
        let cardFront = createEl('div', 'card-front', id);
        let img = createEl('img', 'image-card');
        img.src = cards[i].img;
        console.log(img.src);
        img.alt = cards[i].name;
        let container = document.body.querySelector('.container');
        container.append(card);
        card.append(cardFront);
        cardFront.append(img);
    }
}

