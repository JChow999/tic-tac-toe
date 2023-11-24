const allBoxes = document.querySelectorAll(".game-board div")

console.log(allBoxes)

// function Gameboard() {
//     let board = ["", "", "", 
//                 "", "", "",
//                 "", "", ""]

//     const win_conditions = [[1, 2, 3]
//     ]

//     function resetBoard() {
//         board = ["", "", "", 
//         "", "", "",
//         "", "", ""]
//     }
// }

winningConditions = [
    [0, 4, 8],
    [2, 4, 6],
]



let board = ["X", "O", "X", 
            "O", "X", "X",
            "X", "O", ""]
            
for (n = 0; n < 3; n++) {
    let tempBoard = [];
    tempBoard.push(n);
    while (tempBoard.length < 3) {
        tempBoard.push(tempBoard[tempBoard.length-1] + 3)
    }
    winningConditions.push(tempBoard)
}


for (n = 0; n < 7; n += 3) {
    let tempBoard = [];
    tempBoard.push(n);
    while (tempBoard.length < 3) {
        tempBoard.push(tempBoard[tempBoard.length-1] + 1)
    }
    winningConditions.push(tempBoard)
}

// function checkWinner() {
//     let symbol = "X"
//     let playerSpots = [];
//     for (n = 0; n < 9; n++) {
//         if (board[n] == symbol) {
//             playerSpots.push(n)
//         }
//     }

//     // Check winning conditions
//     for (n = 0; n < winningConditions.length; n++) {
//         console.log(winningConditions[n])
//         let accumulator = 0
//         for (m = 0; m < winningConditions[n].length; m++) {
//             if (playerSpots.includes(winningConditions[n][m])) {
//                 accumulator++
//             }
//             console.log(accumulator)
//         }
//         if (accumulator >= 3) return "Winner"
//     }

//     return playerSpots;
// }

// console.log(checkWinner())