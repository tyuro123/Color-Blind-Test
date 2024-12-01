//  _________
// /         \
//|  O     O  |
//|    >_<    |
//|  \_____/  |
// \_________/
//
// やあ、よく来たね。
//

console.log("Xx_ 何見てんだよ。ゴミハゲ!　_xX");

const questionText = document.getElementById("text-question");
const questionBox = document.getElementById("question-box");
const questionCountText = document.getElementById("text-questionCount");
const conResult = document.getElementById("container-result");
const btnResult = document.getElementById("btn-result");
const choices = document.querySelectorAll(".choice");

const quiz = [{
					count: 1,
					question: "こちらが何色ですか?",
					choices: ["Red", "Blue", "Green"],
					correct: "Red"
			  },
			  {
					count: 2,
					question: "これは何色ですか？",
					choices: ["Onion", "Green", "Blue"],
					correct: "Green"
			  },
			  {
					count: 3,
					question: "こちらは何色ですｋ",
					choices: ["Tom", "Mark", "Blue"],
					correct: "Blue"
			  }
			  
];

let fakeCount = 104;
let quizIndex = 0;
let isQuizEnd = false;
let pointWeight = 100 / quiz.length;
let result = {
			point: 0,
			};

function quizSetup(quizIndex){
	questionBox.style.backgroundColor = quiz[quizIndex].correct;
	questionText.textContent = quiz[quizIndex].question;
	questionCountText.textContent = `${quiz[quizIndex].count} / ${fakeCount}`;
	for (let i = 0; i < choices.length; i++){
		choices[i].textContent = quiz[quizIndex].choices[i];
	};
}

let i = 0;

quizSetup(quizIndex);

choices.forEach((choice) => {
	choice.addEventListener("click", ()=>{
		if (!isQuizEnd){
			if (choice.textContent === quiz[quizIndex].correct){
				result.point = result.point + 1 * pointWeight;
			}
			
			if (quizIndex + 1 < quiz.length){
				quizIndex++;
				quizSetup(quizIndex);
			}
			else {
				conResult.classList.add("show");
				conResult.classList.remove("hidden");
				sessionStorage.setItem("quizResult", JSON.stringify(result));
				isQuizEnd = true;
			}
		}
		else {
		}
	});
	i++;
})
btnResult.addEventListener("click", ()=>{
	window.location.href = "result.html";
})