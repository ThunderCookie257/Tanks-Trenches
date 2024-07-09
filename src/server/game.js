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
            "board": this.board.printBoard()
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
        for (let i = 0; i < 8; i++) {
            var row = [];
            for (let j = 0; j < 8; j++) {
                var square = new Square(ids);
                row.push(square);
                ids++;
            }
            board.push(row);
        }
        return board;
    }

    // return grid representation of board
    printBoard() {
        var board_string_rep = [];
        for (let i = 0; i < 8; i++) {
            var row = [];
            for (let j = 0; j < 8; j++) {
                var square = this.board[i][j];
                var id = square.getId();
                var troop = square.getTroop();
                var infrastructure = square.getInfrastructure();
                var stronghold = square.getStronghold();
                var troopType = "";
                var troopId = "";
                if (troop) {
                    troopType = troop.type;
                    troopId = troop.id;
                }
                var sq_info = {
                    "square_id": id,
                    "troop_type": troopType,
                    "troop_id": troopId,
                    "stronghold": stronghold
                };
                row.push(sq_info);
            }
            board_string_rep.push(row);
        }
        return board_string_rep;
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