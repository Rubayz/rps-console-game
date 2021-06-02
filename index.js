function rps(choice) {
    let choices = ["rock", "paper", "scissor"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Your choice:${choice} \n My choice: ${random}`)
    if(choice == "rock" && random == "paper") return console.log("I win!");
    if(choice == "paper" && random == "rock") return console.log("You win!");
    if(choice == "scissor" && random == "rock") return console.log("I win!");
    if(choice == "rock" && random == "scissor") return console.log("You win!");
    if(choice == "scissor" && random == "paper") return console.log("You win!");
    if(choice == "paper" && random == "scissor") return console.log("I win!");
    if(choice == random) return console.log("It's a tie!");
}
rps("paper");