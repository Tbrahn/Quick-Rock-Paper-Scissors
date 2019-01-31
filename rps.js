var compSelect = "";
var playerSelect = "";
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var paper = document.getElementById("paper");
var result = document.getElementById("result");
var compChoices = ["rock", "paper", "scissors"];

rock.addEventListener("click", function(){
	playerSelect = "rock";
	compSelect = compChoices[Math.floor(Math.random() * 3)];
	if(playerSelect === compSelect){
			result.textContent = "Tie!";
	} else if(compSelect == "scissors"){
			result.textContent = "You Win!";
	} else if(compSelect == "paper"){
			result.textContent = "You lose!";

	}
});

paper.addEventListener("click", function(){
	playerSelect = "paper";
	compSelect = compChoices[Math.floor(Math.random() * 3)];
	if(playerSelect === compSelect){
			result.textContent = "Tie!";
	} else if(compSelect == "rock"){
			result.textContent = "You Win!";
	} else if(compSelect == "scissors"){
			result.textContent = "You lose!";

	}
});

scissors.addEventListener("click", function(){
	playerSelect = "scissors";
	compSelect = compChoices[Math.floor(Math.random() * 3)];
	if(playerSelect === compSelect){
			result.textContent = "Tie!";
	} else if(compSelect == "paper"){
			result.textContent = "You Win!";
	} else if(compSelect == "rock"){
			result.textContent = "You lose!";

	}
});

