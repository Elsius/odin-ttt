const ticTacToe = (function () {
    let board = document.getElementById('boardTTT'),
        boardState = [],
        playerTurn = 1,
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
        },
        clearBoard = function () {
            board.innerHTML = ''
            boardState = []
        },
        clickBoard = function (index) {
            //index = if 0, change to current player turn, else send error

            if (boardState[index] == 0) {
                boardState[index] = playerTurn
                render()
                checkWin(index)
            } else {
                console.log(`section ${index} is taken`)
            }
        },
        render = function () {
            //read boardState and color board accordingly, then check for wincon
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
        },
        checkWin = function (indexLastClicked) {
            //loops through win conditions
            let win
            console.log()
            //check last clicked?

            //check the 3 possible win conditions?
            //check diagonals
            if (indexLastClicked % 2 == 0) {
                if (boardState[0] == playerTurn &&
                    boardState[4] == playerTurn &&
                    boardState[8] == playerTurn ||
                    boardState[2] == playerTurn &&
                    boardState[4] == playerTurn &&
                    boardState[6] == playerTurn) {
                    console.log(`Player ${playerTurn} wins!`)}
            }
            
            if (playerTurn == 1) {
                playerTurn = 2
            } else {
                playerTurn = 1
            }
        },
        init = function () {
            clearBoard()
            newBoard()
        };
        checkState = function() {
            console.log(boardState)
        }
    return { init, checkState}
})()

ticTacToe.init()
