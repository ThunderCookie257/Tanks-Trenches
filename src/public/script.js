
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
        // TODO: setup game state
        })
        .catch(error => {
        console.error('Error sending request:', error);
        });
    }
    // assign event handlers
    playButton.onclick = play;
}