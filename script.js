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
                card.textContent = ''
                card.classList.add('tttCard')
                board.appendChild(card)
                card.addEventListener('click', clickBoard.bind(card, i))
                boardState.push(0);
            }
            playerTurn = 1
        },
        clearBoard = function (fullclear = 0) {
            board.innerHTML = '';
            boardState = [];
            if (fullclear == 1){
                fullclear = 0
                player1Score = 0
                player2Score = 0
                render()
                
            }
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
            let victoryState = '';
            //check diagonals
            if (boardState[0] == playerTurn &&
                boardState[4] == playerTurn &&
                boardState[8] == playerTurn ||
                boardState[2] == playerTurn &&
                boardState[4] == playerTurn &&
                boardState[6] == playerTurn) {
                victoryState = 'win';
            }
            //check horizontal
            for (i = 0; i < 3; i++) {
                let row = i * 3
                if (boardState[0 + row] == playerTurn &&
                    boardState[1 + row] == playerTurn &&
                    boardState[2 + row] == playerTurn) {
                    victoryState = 'win'
                }

            }
            //check vertical
            for (i = 0; i < 3; i++) {
                if (boardState[i] == playerTurn &&
                    boardState[i + 3] == playerTurn &&
                    boardState[i + 6] == playerTurn) {
                    victoryState = 'win'
                }
            }
            //check tie
            if (!boardState.includes(0)) {
                if (!victoryState == 1) {
                    victoryState = 'tie'
                }
            }
            if (!victoryState == '') {
                gameEnd(victoryState, playerTurn);
                victoryState = '';
            }
            //change turns after checking for win
            if (playerTurn == 1) {
                playerTurn = 2
            } else {
                playerTurn = 1
            }
            victoryState = ''
        },
        gameEnd = function (gameVictoryState, lastPlayer) {
            //clone elements to remove event listeners
            board.innerHTML = board.innerHTML
            //tie
            if (gameVictoryState == 'tie') {
                //tie
            }
            //win
            else {
                //win, increment score
                switch (lastPlayer) {
                    case 1:
                        player1Score++;
                        break;
                    case 2:
                        player2Score++;
                        break;
                }

            }
            //create menu for new game
            //need functions on buttons and css for the menu
            //create elements
            let menu = document.createElement('div'),
                menuMessage = document.createElement('div'),
                buttonContainer = document.createElement('div'),
                newgameButton = document.createElement('button'),
                restartGameButton = document.createElement('button');
                //adjust elements
                menu.id = "gameOver"
                buttonContainer.id = "tttButtonBox"
                menuMessage.textContent = `Player ${lastPlayer} wins!`
                newgameButton.addEventListener('click', ticTacToe.init)
                newgameButton.textContent = `New Game`
                restartGameButton.textContent = `Reset Game`
                restartGameButton.addEventListener('click', ticTacToe.init.bind(this, 1))
                //append elements
                menu.appendChild(menuMessage)
                menu.appendChild(buttonContainer)
                buttonContainer.appendChild(newgameButton)
                buttonContainer.appendChild(restartGameButton)
                board.appendChild(menu)
            render()
        },
        init = function (fullclear) {
            clearBoard(fullclear)
            newBoard()
        };
    return { init, }
})()

