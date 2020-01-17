function SliderChange(element) {
	var elementValue = element.value;
	var body = document.getElementById("body");
	body.style.backgroundColor = "rgb(" + elementValue + "," + elementValue + "," + elementValue +")";
}

function AnswerCheck(numb){
	var solutions = ["temp", "Kontanter", "Hemvägen", "En hemlighet", "Jordgubbe", "Dragkamp", "Nattvakten];
	var guessValue = document.getElementById("keyText").value;
	if(solutions[numb] == guessValue){
		alert("Du svarade rätt!");
	}
}