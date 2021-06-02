document.getElementById('yes').addEventListener("click", function() {
    document.getElementById('first').style.display = "none";
    document.getElementById('game').style.display = "block";
});
document.getElementById("rock").addEventListener("click", function() {
    let choices = ["rock", "paper", "scissor"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("just").style.display = "block";
    document.getElementById("just2").style.display = "block";
    document.getElementById("lol").innerHTML = random;
    document.getElementById("lol2").innerHTML = "rock";
    document.getElementById("game").style.display = "none";
    if(random === "paper") {
        document.getElementById("ok").style.display = "block";
    }else if(random === "scissor") {
        document.getElementById("ok2").style.display = "block";
    } else {
        document.getElementById("ok3").style.display = "block";
    }
    document.getElementById("ta").style.display = "block";
})
document.getElementById("paper").addEventListener("click", function() {
    let choices = ["rock", "paper", "scissor"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("just").style.display = "block";
    document.getElementById("just2").style.display = "block";
    document.getElementById("lol").innerHTML = random;
    document.getElementById("lol2").innerHTML = "paper";
    document.getElementById("game").style.display = "none";
    if(random === "scissor") {
        document.getElementById("ok").style.display = "block";
    }else if(random === "rock") {
        document.getElementById("ok2").style.display = "block";
    } else {
        document.getElementById("ok3").style.display = "block";
    }
    document.getElementById("ta").style.display = "block";
})
document.getElementById("scissor").addEventListener("click", function() {
    let choices = ["rock", "paper", "scissor"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("just").style.display = "block";
    document.getElementById("just2").style.display = "block";
    document.getElementById("lol").innerHTML = random;
    document.getElementById("lol2").innerHTML = "scissor";
    document.getElementById("game").style.display = "none";
    if(random === "rock") {
        document.getElementById("ok").style.display = "block";
    }else if(random === "paper") {
        document.getElementById("ok2").style.display = "block";
    } else {
        document.getElementById("ok3").style.display = "block";
    }
    document.getElementById("ta").style.display = "block";
})
document.getElementById("ta").addEventListener("click", function() {
    document.getElementById('game').style.display = "block";
    document.getElementById("just").style.display = "none";
    document.getElementById("just2").style.display = "none";
    document.getElementById("ok").style.display = "none";
    document.getElementById("ok2").style.display = "none";
    document.getElementById("ok3").style.display = "none";
    document.getElementById("ta").style.display = "none";
})