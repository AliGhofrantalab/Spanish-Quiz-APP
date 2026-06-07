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
    alert("Quiz Finished! Your Score: " + score + " / " + quizData.length);
score = 0;
currentQuestion = 0;
loadQuestion();
    currentQuestion = 0;
  }
  loadQuestion();
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
loadQuestion();
