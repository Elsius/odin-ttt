const ticTacToe = (function () {
    let board = document.getElementById('boardTTT'),
        boardState = [],
        newBoard = function () {
            //create board elements, looped 9x for each button
            for (i = 0; i < 9; i++) {
                let card = document.createElement('div');
                //variable for index of item = loop?
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
                boardState[index] = 1
            } else {
                console.log('this is taken')
            }
            render()
            
        },
        render = function () {
            console.log('render')
            //read boardState and color board accordingly, then check for wincon

            for (i = 0; i < 9; i++){
                switch (boardState[i]){
                    case 0:
                        continue;
                    case 1:
                        //change to p1 class
                        board.children[i].classList.add('tttX')
                    break;
                    case 2:
                        board.children[i].classList.add('tttO')
                    break;
                }
            }
            checkWin()
        },
        checkWin = function () {

        },
        init = function () {
            clearBoard()
            newBoard()
        };
    return { init, }
})()

ticTacToe.init()
