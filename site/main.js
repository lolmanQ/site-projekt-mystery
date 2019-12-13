function SliderChange(element) {
	var elementValue = element.value;
	var body = document.getElementById("body");
	body.style.backgroundColor = "rgb(" + elementValue + "," + elementValue + "," + elementValue +")";
}

