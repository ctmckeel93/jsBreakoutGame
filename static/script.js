console.log("Connecting to js file")

const GAME = [
    "xxxxxx",
    " xxxx ", 
    "  x   ",
    "      ",
    "  P   "
]
const BOARD = document.getElementById("gameBoard");
const createGame = (game) => {
    let result = ""

    for (let i = 0; i < game.length; i++) {
        console.log(game[i])
        if (i != game.length -1) {
            content = "<div class='row'>"
        }
        for (let j = 0; j < game[i].length; j++) {
            console.log("Row location:",game[i][j])
            if (game[i][j] === 'x') {
                content += "<div class='block'></div>" 
            }
            else if (game[i][j] === 'P') {
                content += "<div class='player'></div>"
            }
        }
        content += "</div>"
        result += content;
        console.log(content);
    }
    BOARD.innerHTML = result;
}

createGame(GAME);