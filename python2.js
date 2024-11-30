document.addEventListener("DOMContentLoaded", function() {
	const textResult = document.getElementById("textResult");
	const result = JSON.parse(sessionStorage.getItem("quizResult"));

	if (result.point === 100){
		textResult.textContent = "正常";
	}
	else {
		textResult.textContent = "色盲";
	}
	console.log(result);
});