const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: 1
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "5", "4", "6"],
      correct: 2
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: 1
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
  
    const optionsBox = document.getElementById("options");
    optionsBox.innerHTML = "";
  
    q.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => selectAnswer(index);
      optionsBox.appendChild(btn);
    });
  }
  
  function selectAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    if (selected === correct) score++;
  
    document.getElementById("next-btn").disabled = false;
    Array.from(document.getElementById("options").children).forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correct) btn.style.backgroundColor = "#c8e6c9"; // Green
      if (idx === selected && selected !== correct) btn.style.backgroundColor = "#ffcdd2"; // Red
    });
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      document.getElementById("next-btn").disabled = true;
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";
    document.getElementById("score").textContent = `${score} / ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz-box").style.display = "block";
    document.getElementById("result-box").style.display = "none";
    loadQuestion();
    document.getElementById("next-btn").disabled = true;
  }
  
  // Start game
  window.onload = () => {
    loadQuestion();
    document.getElementById("next-btn").disabled = true;
  };
  