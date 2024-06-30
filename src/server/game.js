class Game {
    constructor() {
        this.p1 = new Player();
        this.p2 = new Player();
        this.board = new Board(p1, p2);
        this.p1Turn = true;
    }

    // returns true if the game is over (non turn player stronghold has been captured)
    // turn player wins if game is over
    checkGameOver() {
    }

    playCard(card) {

    }

    attack() {

    }

    build() {

    }

    move() {

    }

    endTurn() {

    }

    // returns dict representation of game state
    // should encode everything needed from the FE to render game state
    printState() {

    }
};

class Board {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.board = [  ["", "", "", "", "", "2S", "", "", "", "", ""],
                        ["", "", "", "", "", "", "", "", "", "", ""],
                        ["", "", "", "", "", "", "", "", "", "", ""],
                        ["", "", "", "", "", "", "", "", "", "", ""],
                        ["", "", "", "", "", "", "", "", "", "", ""],
                        ["", "", "", "", "", "", "", "", "", "", ""],
                        ["", "", "", "", "", "", "", "", "", "", ""],
                        ["", "", "", "", "", "", "", "", "", "", ""],
                        ["", "", "", "", "", "", "", "", "", "", ""],
                        ["", "", "", "", "", "", "", "", "", "", ""],
                        ["", "", "", "", "", "1S", "", "", "", "", ""]];
    }
    
    // push a troop or infrastructure piece onto the board at given position (by id)
    push(id, x, y) {

    }

    // remove a troop or infrastructure piece from the board at given position (by id)
    remove(id, x, y) {

    }
};

class Player {
    constructor() {
        this.cards = [];
    }
};

module.exports = {
    Game,
    Board,
    Player
};