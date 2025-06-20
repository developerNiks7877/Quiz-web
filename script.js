const questions = [
  {
    question: "Which is the largest animal in the world ?",
    answer: [
      { Text: "Shark", correct: false },
      { Text: "Blue whale", correct: true },
      { Text: "Elephant", correct: false },
      { Text: "Lion", correct: false },
    ],
  },
  {
    question: "Who is first prime minister of india ?",
    answer: [
      { Text: "Narendra Modi", correct: false },
      { Text: "Indra Gandhi", correct: false },
      { Text: "Rahul Gandhi", correct: false },
      { Text: "Jawaharlal Nehru", correct: true },
    ],
  },
  {
    question: "Which is biggest planet in solar system ?",
    answer: [
      { Text: "Earth", correct: false },
      { Text: "Jupitor", correct: false },
      { Text: "Mars", correct: false },
      { Text: "Saturn", correct: true },
    ],
  },
  {
    question: "What is capital of Rajasthan ?",
    answer: [
      { Text: "Jaipur", correct: true },
      { Text: "Jodhpur", correct: false },
      { Text: "Ajmer", correct: false },
      { Text: "Kota", correct: false },
    ],
  },
  {
    question: "How many days are there in the week ?",
    answer: [
      { Text: "3", correct: false },
      { Text: "8", correct: false },
      { Text: "7", correct: true },
      { Text: "9", correct: false },
    ],
  },
  {
    question: "What is the first month of the year ?",
    answer: [
      { Text: "February", correct: false },
      { Text: "January", correct: true },
      { Text: "August", correct: false },
      { Text: "December", correct: false },
    ],
  },
  {
    question: "Which fruit is known as the KINGS OF FRUIT ?",
    answer: [
      { Text: "Orange", correct: false },
      { Text: "Papaya", correct: false },
      { Text: "Mango", correct: true },
      { Text: "Apple", correct: false },
    ],
  },
  {
    question: "How many side in the rectangle ?",
    answer: [
      { Text: "3", correct: false },
      { Text: "2", correct: false },
      { Text: "1", correct: false },
      { Text: "4", correct: true },
    ],
  },
  {
    question: "What is capital of india ?",
    answer: [
      { Text: "New delhi", correct: true },
      { Text: "Jaipur", correct: false },
      { Text: "Mumbia", correct: false },
      { Text: "Rajasthan", correct: false },
    ],
  },
  {
    question: "What is my name ?",
    answer: [
      { Text: "Rakesh", correct: false },
      { Text: "Sanju", correct: false },
      { Text: "Priya", correct: false },
      { Text: "Nikhil", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.Text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
