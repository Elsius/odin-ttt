const ticTacToe = (function () {
    let board = document.getElementById('boardTTT'),
        player1ScoreBoard = document.getElementById('player1score'),
        player2ScoreBoard = document.getElementById('player2score'),
        boardState = [],
        playerTurn = 1,
        player1Score = 0,
        player2Score = 0,
        newBoard = function () {
            //create board elements, looped 9x for each button
            for (i = 0; i < 9; i++) {
                let card = document.createElement('div');
                card.textContent = 'x'
                card.classList.add('tttCard')
                board.appendChild(card)
                card.addEventListener('click', clickBoard.bind(card, i))
                boardState.push(0);
            }
            playerTurn = 1
        },
        clearBoard = function () {
            board.innerHTML = ''
            boardState = []
        },
        clickBoard = function (index) {
            //index = if 0, change to current player turn and update, else send error
            if (boardState[index] == 0 && !playerTurn == 0) {
                boardState[index] = playerTurn
                render()
                checkWin()
            } else {
                console.log(`section ${index} is taken`)
            }
        },
        render = function () {
            //read boardState and color board accordingly
            for (i = 0; i < 9; i++) {
                switch (boardState[i]) {
                    case 0:
                        continue;
                    case 1:
                        board.children[i].classList.add('tttX')
                        break;
                    case 2:
                        board.children[i].classList.add('tttO')
                        break;
                }
            }
            //update DOM on player turn/stats
            player1ScoreBoard.textContent = player1Score;
            player2ScoreBoard.textContent = player2Score;
        },
        checkWin = function () {
            let victoryState = 0;
            //check diagonals
            if (boardState[0] == playerTurn &&
                boardState[4] == playerTurn &&
                boardState[8] == playerTurn ||
                boardState[2] == playerTurn &&
                boardState[4] == playerTurn &&
                boardState[6] == playerTurn) {
                victoryState = 1
            }
            //check horizontal
            for (i = 0; i < 3; i++) {
                let row = i * 3
                if (boardState[0 + row] == playerTurn &&
                    boardState[1 + row] == playerTurn &&
                    boardState[2 + row] == playerTurn) {
                    victoryState = 1
                }

            }
            //check vertical
            for (i = 0; i < 3; i++) {
                if (boardState[i] == playerTurn &&
                    boardState[i + 3] == playerTurn &&
                    boardState[i + 6] == playerTurn) {
                    victoryState = 1
                }
            }
            //check tie
            if (!boardState.includes(0)) {
                if (!victoryState == 1) {
                    victoryState = 2
                }
            }
            if (!victoryState == 0) {
                gameEnd(victoryState, playerTurn)
            }
            //change turns after checking for win
            if (playerTurn == 1) {
                playerTurn = 2
            } else {
                playerTurn = 1
            }
        },
        gameEnd = function (gameVictoryState, lastPlayer) {
            //clone elements to remove event listeners
            board.innerHTML = board.innerHTML
            //tie
            if (gameVictoryState == 2) {
                //tie, open menu for new game
            }
            //win
            else {
                //win, increment score, open menu for new game
                switch (lastPlayer) {
                    case 1:
                        player1Score++;
                        break;
                    case 2:
                        player2Score++;
                        break;
                }

            }
            render()
        },
        init = function () {
            clearBoard()
            newBoard()
        };
    return { init, }
})()

