let rd = ["rock", "paper", "scissor"]

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * rd.length);
    const ans = rd[randomIndex];
    return ans
}

document.getElementById("roc").addEventListener("click", () => {
    let playerSelection = "rock";
    game(playerSelection, computerPlay);
});

document.getElementById("pap").addEventListener("click", () => {
    let playerSelection = "paper";
    game(playerSelection, computerPlay);
});

document.getElementById("sci").addEventListener("click", () => {
    let playerSelection = "scissor";
    game(playerSelection, computerPlay);
});


const scorep = document.createTextNode("You Won This Battle!");
const scorel = document.createTextNode("You Lost This Battle!");
const lsr = document.createElement("h2");
const wnr = document.createElement("h2");
lsr.appendChild(scorel);
wnr.appendChild(scorep);
let rnd = 0;

let u = 0;
let v = 0;

function game(playerSelection, computerSelect) {
    if (playerSelection == null){
        console.log("Sorry Not Sure What's wrong!?");   
    } else {
        let plays = playerSelection;
        computerSelect = computerPlay().toLowerCase();
        plays = playerSelection.toLowerCase();
        if (plays != computerSelect) {
            if (plays == "rock" && computerSelect == "scissor"){
                u ++;
                rnd ++;
                console.log("1+");
            } else if (plays == "rock" && computerSelect == "paper") {
                v ++;
                rnd ++;
                console.log("1-");
            } else if (plays == "paper" && computerSelect == "rock") {
                u ++;
                rnd ++;
                console.log("1+");
            } else if (plays == "scissor" && computerSelect == "rock") {
                v ++;
                rnd ++;
                console.log("1-");
            } else if (plays == "scissor" && computerSelect == "paper") {
                u ++;
                rnd ++;
                console.log("1+");
            } else if (plays == "paper" && computerSelect == "scissor") {
                v ++;
                rnd ++;
                console.log("1-");
            } else {
                console.log("Error");
            }
        } else if (plays == computerSelect) {
            v ++;
            u ++;
            console.log("draw 1 + both");
        } else {
            console.log("ERROR")
        }
    }
if (rnd === 5){
    if (u > v) {
        document.getElementById("res").appendChild(wnr);
        console.log("winner");
        rnd = 0;
    } else if (u < v) {
        document.getElementById("res").appendChild(lsr);
        console.log("losser");
        rnd = 0;
    } else {
        document.getElementById("res").appendChild(l);
        console.log("Draw");
        rnd = 0;
    }
}    
}

