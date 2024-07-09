
window.onload = function() {
    // define elements
    const playButton = document.getElementById('PlayButton');
    
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
        })
        .catch(error => {
        console.error('Error sending request:', error);
        });
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
                button.textContent = board[i][j]["square_id"];
                row.appendChild(button);
            }
            boardDiv.appendChild(row);
        }
    }
    // assign event handlers
    playButton.onclick = play;
}