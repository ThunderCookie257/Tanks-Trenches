const {Infantry, Tank} = require('./cards.js');

class Game {
    constructor() {
        this.board = new Board();
        this.p1 = new Player(1, this.board.getStronghold(0));
        this.p2 = new Player(2, this.board.getStronghold(this.board.board.length -1));
        this.p1Turn = true;
        this.globalCardId = 0;
    }

    getGlobalId() {
        this.globalCardId = this.globalCardId + 1;
        return this.globalCardId -1;
    }

    // set up a couple pieces for each side
    setUpSamplePosition() {
        var i1 = new Infantry(this.getGlobalId());
        var t1 = new Tank(this.getGlobalId());
        this.p1.addTroop(i1);
        this.p1.addTroop(t1);
        this.board.addTroop(i1, 11);
        this.board.addTroop(t1, 14);

        var i2 = new Infantry(this.getGlobalId());
        var t2 = new Tank(this.getGlobalId());
        this.p2.addTroop(i2);
        this.p2.addTroop(t2);
        this.board.addTroop(i2, 56);
        this.board.addTroop(t2, 50);
    }

    // returns true if the game is over (non turn player stronghold has been captured)
    // turn player wins if game is over
    checkGameOver() {
    }

    playCard(card) {

    }

    // return true if you can build from given square
    // is it your turn?
    // is there already infrastructure there?
    // do you have an infantry in it or an adjacent square?
    // do you have anything to build?
    canBuild() {

    }

    // returns true if you can move from given square
    // is it your turn?
    // do you have a troop on the square?
    // has the troop moved already this turn?
    // is there at least one valid move target?
    canMove() {

    }

    // gets all valid move targets from a square for the troop on that square
    validMoveTargets() {

    }

    // returns true if you can attack from given square
    // is it your turn?
    // do you have a troop on the given square?
    // has the troop already attacked this turn?
    // is there an enemy troop in range?
    canAttack() {

    }

    // gets all valid attack targets from a square for the troop on that square
    validAttackTargets() {

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
        var state = {
            "board": this.board.printBoard(),
            "p1": this.p1.printState(),
            "p2": this.p2.printState()
        };
        return state;
    }
};

// a board is made up of squares
class Board {
    constructor() {
        this.board = this.generateNewBoard();
    }

    // generates a 9x9 grid of Squares to represent the board state
    generateNewBoard() {
        var board = [];
        var ids = 0;
        for (let i = 0; i < 9; i++) {
            var row = [];
            for (let j = 0; j < 9; j++) {
                var square = new Square(ids);
                row.push(square);
                ids++;
            }
            board.push(row);
        }
        board[0][4].addStronghold();
        board[8][4].addStronghold();
        return board;
    }

    // gets the stronghold square in the given row
    getStronghold(row) {
        for (let i = 0; i < this.board.length; i++) {
            if (this.board[row][i].getStronghold()) {
                return this.board[row][i];
            }
        }
    }

    // return grid representation of board
    printBoard() {
        var board_string_rep = [];
        for (let i = 0; i < 9; i++) {
            var row = [];
            for (let j = 0; j < 9; j++) {
                var square = this.board[i][j];
                row.push(square);
            }
            board_string_rep.push(row);
        }
        return board_string_rep;
    }

    // adds given troop to given square by id
    // if the add is successful, returns true
    addTroop(troop, id) {
        var square = this.getSquareById(id);
        if (square && square.getTroop() == null) {
            square.addTroop(troop);
            return true;
        }
        return false;
    }

    // returns square with the given id
    getSquareById(id) {
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j< this.board.length; j++) {
                if (this.board[i][j].getId() == id) {
                    return this.board[i][j];
                }
            }
        }
        return null;
    }

    addInfrastructure(infrastructure, square) {

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
        this.playerStronghold = null;
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
    constructor(id, capital) {
        this.id = id;
        this.cards = [];
        this.troops = [];
        this.infrastructure = [];
        this.capital = capital; // capital square
    }

    addTroop(troop) {
        this.troops.push(troop);
    }

    addInfrastructure(infrastructure) {
        this.infrastructure.push(infrastructure);
    }

    printState() {
        var state = {
            "id": this.id,
            "cards": this.cards,
            "troops": this.troops,
            "infrastructure": this.infrastructure,
            "capital": this.capital
        }
        return state;
    }
};

module.exports = {
    Game,
    Board,
    Player
};