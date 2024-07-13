
window.onload = function() {
    // define elements
    const playButton = document.getElementById('PlayButton');
    const attackButton = document.getElementById('AttackButton');
    const moveButton = document.getElementById('MoveButton');
    const buildButton = document.getElementById('BuildButton');
    const passButton = document.getElementById('EndTurnButton');
    
    // play button handler
    function play() {
        const url = 'http://localhost:3000/newGame';
        fetch(url, {method: 'GET',
                    headers: {'Content-Type': 'application/json',}})
        .then(response => {
        if (!response.ok) {
            throw new Error('Received bad response from server.');
        }
        return response.json();
        })
        .then(data => {
        console.log('Response from server:', data);
        setUpBoard(data);
        attackButton.disabled = true;
        moveButton.disabled = true;
        buildButton.disabled = true;
        })
        .catch(error => {
        console.error('Error sending request:', error);
        });
    }

    // grid button handler
    // enable buttons based on what actions can be taken
    function squareActions() {
        // TODO
    }

    function setUpBoard(data) {
        var board = data["board"];
        var size = board.length;

        var boardDiv = document.getElementById("board");
        for (let i = 0; i < size; i++) {
            var row = document.createElement("div");
            row.classList.add("boardRow");
            row.id = "row" + i;
            for (let j = 0; j < size; j++) {
                var button = document.createElement("button");
                button.classList.add("boardButton");
                button.id = "button" + i + j;
                var square = board[i][j];
                var text = getSquareDisplayText(square);
                button.textContent = text;
                row.appendChild(button);
            }
            boardDiv.appendChild(row);
        }
    }

    function getSquareDisplayText(square) {
        var text = "id: " + square["id"];
        if (square["stronghold"]) {
            text+= " STRONGHOLD";
        }
        if (square["infrastructure"]) {
            text+= " infrastructure: TODO";
        }
        if (square["troop"]) {
            text += " troop: " + square["troop"]["type"] + square["troop"]["id"];
        }
        return text;
    }

    // assign event handlers
    playButton.onclick = play;

    const boardButtons = document.querySelectorAll('.btn-class');
    boardButtons.forEach(button => {
        button.onclick = squareActions;
    });
}