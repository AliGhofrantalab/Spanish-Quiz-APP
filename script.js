const quizData = [
  {
    question: "¿Cómo se dice 'Hello' en español?",
    options: ["Hola", "Adiós", "Gracias", "Por favor"],
    correct: "Hola",
  },
  {
    question: "¿Qué significa 'Casa'?",
    options: ["کتاب", "خانه", "سگ", "سلام"],
    correct: "خانه",
  },
  {
    question: "¿Cómo se dice 'Dog' en español?",
    options: ["Perro", "Gato", "Pájaro", "Vaca"],
    correct: "Perro",
  },
];
const questionElement = document.getElementById("question");
const optionsElement = document.querySelectorAll(".option");
const resultElement = document.getElementById("results");
const nextButton = document.getElementById("nextBtn");
let currentQuestion = 0;
let score = 0;
const finalScreen = document.getElementById("finalScreen");
const finalScore = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.forEach((btn) => {
    btn.classList.remove("correct", "wrong");
    btn.disabled = false;
    btn.style.background = "";
    document.getElementById("score").textContent = `Score: ${score}`;
  });
  optionsElement.forEach((btn, index) => {
    btn.textContent = q.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = "";
  });
  resultElement.textContent = "";
}

optionsElement.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedOption = btn.textContent;
    const correctOption = quizData[currentQuestion].correct;
    if (selectedOption === correctOption) {
      resultElement.textContent = "✅CORRECT!";
      btn.classList.add("correct");
      score++;
      document.getElementById("score").textContent = `Score: ${score}`;
    } else {
      resultElement.textContent = "❌WRONG!";
      btn.classList.add("wrong");
      optionsElement.forEach((b) => {
        if (b.textContent === correctOption) b.style.backgroundColor = "green";
      });
    }

    optionsElement.forEach((b) => (b.disabled = true));
  });
});
nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion >= quizData.length) {
    finalScreen.style.display = "block";
    questionElement.style.display = "none";
    document.getElementById("options").style.display = "none";
    nextButton.style.display = "none";
    finalScore.textContent = `Your Score: ${score} / ${quizData.length}`;
    resultElement.style.display = "none";
    document.getElementById("score").style.display = "none";
    return;
  }
  loadQuestion();
});
restartBtn.addEventListener("click", () => {
  score = 0;
  currentQuestion = 0;
  ((finalScreen.style.display = "none"),
    (questionElement.style.display = "block"));
  document.getElementById("options").style.display = "block";
  nextButton.style.display = "block";
  resultElement.textContent = "";
  optionsElement.forEach((btn) => {
    btn.classList.remove("correct", "wrong");
    btn.style.backgroundColor = "";
    btn.disabled = false;
    resultElement.style.display = "block";
    document.getElementById("score").style.display = "block";
    document.getElementById("score").textContent = "Score: 0";
  });

  document.getElementById("score").textContent = "Score: 0";
  loadQuestion();
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
loadQuestion();
