console.log('memory-game');
window.onload = function() {
    document.body.append(createHeader());
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

