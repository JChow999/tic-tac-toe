const boardCircleScore = document.querySelector("#circle-score");
const boardCrossScore = document.querySelector("#cross-score");
const startBtn = document.querySelector("#start-btn");

function ticTacToe() {

    let allBoxes = document.querySelectorAll(".game-board div");
    let currentPlayer = ""
    let crossScore = 0;
    let circleScore = 0;
    
    let board = ["", "", "", 
                "", "", "",
                "", "", ""];
    
    let winningConditions = [
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ]
    
    function chooseStarter() {
        if (crossScore != 0 || circleScore != 0){
            currentPlayer = prompt("Please choose who is starting, O or X").toUpperCase();    
        }
        else {
            currentPlayer = prompt("Please choose who is starting, O or X").toUpperCase();
        }
    
        while (currentPlayer != "X" && currentPlayer != "O") {
            currentPlayer = prompt("Please choose a valid option: O or X").toUpperCase();
        }
    }
    
    function resetBoard() {
        board = ["", "", "", 
                "", "", "",
                "", "", ""]
        for (n = 0; n < allBoxes.length; n++) {
            allBoxes[n].className = 'empty';
        }
    }
    
    function updateScore() {
        boardCircleScore.textContent = `Player "O" score: ${circleScore}`
        boardCrossScore.textContent = `Player "X" score: ${crossScore}`
    }
    
    function updateClickable(symbol) {
        allBoxes = document.querySelectorAll(".game-board div");
        for (n = 0; n < allBoxes.length; n++) {
            allBoxes[n].addEventListener('click', (e) => {
                if (e.target.className == "empty") {
                    e.target.style.cursor = "pointer";
                    e.target.className = (currentPlayer == "O" ? "circle" : "cross")
                    board[e.target.getAttribute("data-index-number")] = currentPlayer;
                    updateClickable();
    
                    if (checkWinner() != null) {
                        if (currentPlayer == "X") {
                            crossScore++
                        }
                        else {
                            circleScore++
                        }
    
                        console.log(checkWinner())
                        updateScore()
                    }
                    else if (document.querySelectorAll(".empty").length <= 0) {
                        alert("It's a tie!");
                    }
                    else {
                        if (currentPlayer == "X") {
                            currentPlayer = "O"
                        }
                        else {
                            currentPlayer = "X"
                        }
                    }
                }
            })
        }
    }
    
    function checkWinner() {
        let playerSpots = [];
        for (n = 0; n < 9; n++) {
            if (board[n] == currentPlayer) {
                playerSpots.push(n)
            }
        }
    
        // Check winning conditions
        for (n = 0; n < winningConditions.length; n++) {
            let accumulator = 0
            for (m = 0; m < winningConditions[n].length; m++) {
                if (playerSpots.includes(winningConditions[n][m])) {
                    accumulator++
                }
            }
            if (accumulator >= 3) {
                for (n = 0; n < allBoxes.length; n++) {
                    let tempNode = allBoxes[n].cloneNode(true);
                    tempNode.style.cursor = "auto"
                    allBoxes[n].replaceWith(tempNode)
                }
                
                return `${currentPlayer} is the winner`
            }
        }
    }

    return { chooseStarter, updateClickable, resetBoard }
}

newGame = ticTacToe()

startBtn.addEventListener("click", () => {
    newGame.chooseStarter()
    newGame.updateClickable()
    newGame.resetBoard()
})