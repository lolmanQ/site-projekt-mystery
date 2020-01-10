function SliderChange(element) {
	var elementValue = element.value;
	var body = document.getElementById("body");
	body.style.backgroundColor = "rgb(" + elementValue + "," + elementValue + "," + elementValue +")";
}

function AnswerCheck(numb){
	var solutions = ["temp"];
	var guessValue = document.getElementById("keyText").value;
	if(solutions[numb].toLowerCase() == guessValue.toLowerCase()){
		alert("Du svarade rätt!");
	}
}