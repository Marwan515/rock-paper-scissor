let rd = ["rock", "paper", "scissor"]

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * rd.length);
    const ans = rd[randomIndex];
    return ans
}

function game(plays, computerSelect) {
    let u = 0;
    let v = 0;
    for (i = 0; i < 5; i++){
        let playerSelection = prompt("enter:");
        let plays = playerSelection;
        computerSelect = computerPlay().toLowerCase();
        plays = playerSelection.toLowerCase();
        if (plays != computerSelect) {
            if (plays == "rock" && computerSelect == "scissor"){
                console.log("You Won!");
                u ++;
            } else if (plays == "rock" && computerSelect == "paper") {
                console.log("You Lost!");
                v ++;
            } else if (plays == "paper" && computerSelect == "rock") {
                console.log("You Won!");
                u ++;
            } else if (plays == "scissor" && computerSelect == "rock") {
                console.log("You Lost!");
                v ++;
            } else if (plays == "scissor" && computerSelect == "paper") {
                console.log("You Won!");
                u ++;
            } else if (plays == "paper" && computerSelect == "scissor") {
                console.log("You Lost!");
                v ++;
            } else {
                console.log("Error");
            }
        } else if (plays == computerSelect) {
            console.log("DRAW!");
            v ++;
            u ++;
        } else {
            console.log("ERROR")
        }
    }
    if (u > v) {
        console.log("You Won The Game", u, v);
    } else if (u < v) {
        console.log("You Lost Game Over!", u, v);
    } else {
        console.log("It's A Draw!", u, v);
    }
}

game();