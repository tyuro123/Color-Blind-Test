const questionText = document.getElementById("question-text");
const conResult = document.getElementById("container-result");
const btnResult = document.getElementById("btn-result");
const choices = document.querySelectorAll(".choice");

const quiz = [{
					question: "What color is Apple?",
					choices: ["red", "blue", "green"],
					correct: "red"
			  },
			  {
					question: "What color is Orange?",
					choices: ["red", "orange", "blue"],
					correct: "orange"
			  },
			  {
					question: "What color is Satsumaimo?",
					choices: ["tom", "mark", "purple"],
					correct: "purple"
			  }
			  
];
let quizIndex = 0;
let isQuizEnd = false;
let pointWeight = 100 / quiz.length;
let result = {
			point: 0,
			};

function quizSetup(quizIndex){
	questionText.textContent = quiz[quizIndex].question;
	for (let i = 0; i < choices.length; i++){
		choices[i].textContent = quiz[quizIndex].choices[i];
	};
}

let i = 0;

quizSetup(quizIndex);

choices.forEach((choice) => {
	choice.addEventListener("click", ()=>{
		if (!isQuizEnd){
			console.log(`回答: ${choice.textContent}, 正答: ${quiz[quizIndex].correct}`);
			if (choice.textContent === quiz[quizIndex].correct){
				console.log("正解");
				result.point = result.point + 1 * pointWeight;
			}
			else {
				console.log("不正解");
			};
			
			if (quizIndex + 1 < quiz.length){
				console.log(`${quiz.length}, ${quizIndex}`);
				quizIndex++;
				quizSetup(quizIndex);
				console.log(quizIndex);
			}
			else {
				console.log(`${quiz.length}, ${quizIndex}`);
				console.log("終了");
				conResult.classList.remove("hidden");
				sessionStorage.setItem("quizResult", JSON.stringify(result));
				isQuizEnd = true;
			}
		}
		else {
			console.log("終了しています");
		}
	});
	i++;
})

btnResult.addEventListener("click", () => {
	console.log(result.point);
});

