let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-Board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const spock_div = document.getElementById("spo");
const lizard_div = document.getElementById("l");
const timer_span = document.getElementById("timer");
const restart_btn = document.getElementById("restartBtn");

const startingTime = 20;
var time = startingTime;

var countDown = setInterval(updatCoundown, 1000);



function getComputerChoice() {
    const choices = ['r', 'p', 's', 'spo', 'l'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissor";
    if (letter === "l") return "Lizard";
    return "Spock";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} <br>You win! `;
    userChoiceDiv.classList.add('green-glow');
    setTimeout(function () { userChoiceDiv.classList.remove('green-glow') }, 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} <br>You lost...`;
    userChoiceDiv.classList.add('red-glow');
    setTimeout(function () { userChoiceDiv.classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} <br>Draw`;
    userChoiceDiv.classList.add('grey-glow');
    setTimeout(function () { userChoiceDiv.classList.remove('grey-glow') }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
        case "rl":
        case "sl":
        case "lspo":
        case "pspo":
        case "lp":
        case "spor":
        case "spos":
            win(userChoice, computerChoice);
            break;

        case "rp":
        case "rspo":
        case "ps":
        case "pl":
        case "sr":
        case "sspo":
        case "lr":
        case "ls":
        case "spol":
        case "spop":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "spospo":
            draw(userChoice, computerChoice);
            break;
        
    }

}


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissor_div.addEventListener('click', function() {
        game("s");
    })

    spock_div.addEventListener('click', function() {
        game("spo");
    })
    lizard_div.addEventListener('click', function() {
        game("l");
    })
}

function updatCoundown() {
    time--;

    if (time < 30) {
        var sec = time % 60;
        sec = sec < 10 ? '0' + sec : sec;
        timer_span.innerHTML = `00:${sec}`
    }

    
    if (time === -1) {
        clearInterval(countDown);

        if (confirm("Game Over! Click Ok to restart.")) {
            resetGame();
            
        } else {
            console.log("You pressed Cancel!");
            timer_span.innerHTML = `00:00`;

            rock_div.style.display = 'none';
            paper_div.style.display = 'none';
            scissor_div.style.display = 'none';
            spock_div.style.display = 'none';
            lizard_div.style.display = 'none';
            restart_btn.style.display = 'block';
        }
    }
    
}


function resetGame() {
    userScore = 0;
    computerScore = 0;
    countDown = setInterval(updatCoundown, 1000);
    time = startingTime;
    result_p.innerHTML = `Welcome to Adv. RockPaperScissor Gamez.`;
    timer_span.innerHTML = `00:00`;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    rock_div.style.display = 'inline';
    paper_div.style.display = 'inline';
    scissor_div.style.display = 'inline';
    spock_div.style.display = 'inline';
    lizard_div.style.display = 'inline';
    restart_btn.style.display = 'none';
}


main();