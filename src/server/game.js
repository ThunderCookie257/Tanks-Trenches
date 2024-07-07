class Game {
    constructor() {
        this.p1 = new Player();
        this.p2 = new Player();
        this.board = new Board();
        this.p1Turn = true;
    }

    // returns true if the game is over (non turn player stronghold has been captured)
    // turn player wins if game is over
    checkGameOver() {
    }

    playCard(card) {

    }

    // return true if you can build from given square
    canBuild() {

    }

    // returns true if you can move from given square
    canMove() {

    }

    // returns true if you can attack from given square
    canAttack() {

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

// a board is made up of squares
class Board {
    constructor() {
        this.board = generateNewBoard();
    }

    generateNewBoard() {
        var board = [];
        for (let i = 0; i < 80; i++) {
            var square = new Square(i);
            board.push(square);
        }
        return board;
    }

    // return string representation of board
    printBoard() {

    }

};

// board is made up of squares
// squares can have troops and/or infrastructure
class Square {
    constructor(id) {
        this.id = id;
        this.troop = null;
        this.infrastructure = null;
        this.stronghold = false;
    }

    getId() {
        return this.id;
    }

    getTroop() {
        return this.troop;
    }

    getInfrastructure() {
        return this.infrastructure;
    }

    getStronghold() {
        return this.stronghold;
    }

    addTroop(troop) {
        if (this.troop) {
            return false;
        }
        this.troop = troop;
        return true;
    }

    addInfrastructure(infrastructure) {
        if (this.infrastructure) {
            return false;
        }
        this.infrastructure = infrastructure;
        return true;
    }

    addStronghold() {
        this.stronghold = true;
    }

    removeTroop() {
        this.infrastructure = null;
    }

    removeInfrastructure() {
        this.troop = null;
    }
}

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