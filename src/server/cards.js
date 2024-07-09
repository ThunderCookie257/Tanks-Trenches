// Abstract Card class
class Card {
    constructor(id) {
        throw new Error("Cannot instantiate abstract class.");
    }
}

// Abstract Troop Class
class Troop extends Card {
    constructor(id) {
        throw new Error("Cannot instantiate abstract class.");
    }
    
    // check if current troop can attack target, and return roll if target can be attacked.
    attack(target) {
        throw new Error("Method 'attack' must be implemented.")
    }
}

class Infantry extends Troop {
    constructor(id) {
        this.id = id;
        this.type = "Infantry";
        this.attacksGround = true;
        this.attacksAir = true;
        this.isGround = true;
        this.baseRoll = 6;
        this.hitBy = 3;
        this.movement = 2;
        this.range = 2;
        this.deployed = false; // is the troop currently deployed?
    }

    attack(target) {
        // TODO
    }
}

class Tank extends Troop {
    constructor(id) {
        this.id = id;
        this.type = "Tank";
        this.attacksGround = true;
        this.attacksAir = false;
        this.isGround = true;
        this.baseRoll = 6;
        this.hitBy = 5;
        this.movement = 3;
        this.range = 3;
        this.deployed = false; // is the troop currently deployed?
    }
}

class Artillery extends Troop {
    constructor(id) {
        this.id = id;
        this.type = "Artillery";
        this.attacksGround = true;
        this.attacksAir = false;
        this.isGround = true;
        this.baseRoll = 6;
        this.hitBy = 3;
        this.movement = 1;
        this.range = 5;
        this.deployed = false; // is the troop currently deployed?
    }
}

class Fighter extends Troop {
    constructor(id) {
        this.id = id;
        this.type = "Fighter";
        this.attacksGround = false;
        this.attacksAir = true;
        this.isGround = false;
        this.baseRoll = 6;
        this.hitBy = 2;
        this.movement = 3;
        this.range = 3;
        this.deployed = false; // is the troop currently deployed?
    }
}

class Bomber extends Troop {
    constructor(id) {
        this.id = id;
        this.type = "Bomber";
        this.attacksGround = true;
        this.attacksAir = false;
        this.isGround = false;
        this.baseRoll = 6;
        this.hitBy = 2;
        this.movement = 2;
        this.range = 1;
        this.deployed = false; // is the troop currently deployed?
    }
}

// Abstract Infrastructure Class
class Infrastructure extends Card {

}

class Trench extends Infrastructure {

}

class AA extends Infrastructure {

}

class Railroad extends Infrastructure {

}

class Position extends Infrastructure {

}

// Abstract Strategy Class
class Strategy extends Card {

}

class Roll extends Strategy {

}

class Movement extends Strategy {

}

class ReturnFire extends Strategy {

}

class DeployInfantry extends Strategy {

}