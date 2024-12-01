


// アホ




console.log("ここまで見に来たのか？このバカガキ");

document.addEventListener("DOMContentLoaded", function() {
	const textResult = document.getElementById("text-Result");
	const btnBack = document.getElementById("btn-back");
	const btnShow = document.getElementById("btn-show");
	const result = JSON.parse(sessionStorage.getItem("quizResult"));
	
	btnShow.addEventListener("click", () => {

		if (result.point === 100){
			document.getElementById("success").play();
			textResult.textContent = "正常";
		}
		else {
			document.getElementById("fail").play();
			textResult.textContent = "色盲";
		}
		textResult.classList.add("animate");
		btnShow.classList.add("hidden");
		btnBack.classList.remove("hidden");
	});
	
	btnBack.addEventListener("click", () => {
		window.location.href = "index.html";
	});
});