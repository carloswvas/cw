document.addEventListener("DOMContentLoaded", () => {
  const quizData = [
    { question: "Lugar da nossa primeira foto?", answer: "MC Donalds" },
    {
      question: "Primeiro lugar para onde viajamos juntos?",
      answer: "Piranhas",
    },
    {
      question: "'Difícil' nome completo do seu nego?",
      answer: "Carlos Wilton Fonseca Vasconcelos de Araújo",
    },
    {
      question: "De que animal é a minha toca favorita?",
      answer: "Vaca",
    },
    {
      question: "Qual sabor do seu café favorito?",
      answer: "Salada de frutas",
    },
    {
      question: "Local da melhor pousada que você escolheu?",
      answer: "São Bento",
    },
    {
      question:
        "Quais são as iniciais dos nomes que formam a melhor união do Sistema S?",
      answer: "CJ",
    },
    { question: "Nome da Rainha do WOD?", answer: "Jeanynne" },
  ];

  let currentQuestionIndex = 0;

  const quizContainer = document.getElementById("quiz-container");
  const resultsContainer = document.getElementById("results-container");
  const questionCounter = document.getElementById("question-counter");
  const questionText = document.getElementById("question-text");
  const answerInput = document.getElementById("answer-input");
  const feedbackText = document.getElementById("feedback-text");
  const checkBtn = document.getElementById("check-btn");
  const nextBtn = document.getElementById("next-btn");

  function loadQuestion() {
    feedbackText.textContent = "";
    feedbackText.className = "";
    answerInput.value = "";
    answerInput.disabled = false;
    checkBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
    const currentQuestion = quizData[currentQuestionIndex];
    questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${
      quizData.length
    }`;
    questionText.textContent = currentQuestion.question;
    // answerInput.focus();
  }

  function normalizeAnswer(str) {
    return str
      .trim()
      .toLowerCase()
      .replace(/ç/g, "c")
      .replace(/ã/g, "a")
      .replace(/õ/g, "o")
      .replace(/é/g, "e")
      .replace(/sao/g, "são");
  }

  function checkAnswer() {
    const userAnswer = normalizeAnswer(answerInput.value);
    const correctAnswer = normalizeAnswer(
      quizData[currentQuestionIndex].answer
    );

    if (userAnswer === correctAnswer) {
      feedbackText.textContent = "Correto! ❤️";
      feedbackText.className = "feedback-correct";
      answerInput.disabled = true;
      checkBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    } else {
      feedbackText.textContent = "Ops, tente de novo!";
      feedbackText.className = "feedback-incorrect";
      answerInput.value = "";
      answerInput.focus();
    }
  }

  function showResults() {
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");
  }

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  });

  checkBtn.addEventListener("click", checkAnswer);

  answerInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      if (!checkBtn.classList.contains("hidden")) {
        checkBtn.click();
      }
    }
  });

  loadQuestion();
});
