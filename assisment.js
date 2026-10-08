const skill = localStorage.getItem("selectedSkill") || "Programming";
const skillImage = document.getElementById("skillImage");
const skillName = document.getElementById("skillName");

const skillImages = {
    "Programming": "images/programming.jpeg",
    "Web Development": "images/web-development.jpeg",
    "Database": "images/database.jpeg",
    "Problem Solving": "images/problem-solving.jpeg",
    "Teamwork & Communication": "images/teamwork.jpeg",
    "Interview Skills": "images/interview.jpeg"
};

skillImage.src = skillImages[skill] || "";
skillName.textContent = skill;

const assessmentNumber =
    Number(localStorage.getItem("currentAssessment")) || 1;

const QUESTIONS_PER_ASSESSMENT = 15;
const questionText =
    document.getElementById("question");

const optionsContainer =
    document.getElementById("options");

const questionNumber =
    document.getElementById("questionNumber");

const currentQuestionText =
    document.getElementById("currentQuestion");

const progress =
    document.getElementById("progress");

const nextBtn =
    document.getElementById("nextBtn");
    const explanationBox =
    document.getElementById("explanation");

explanationBox.style.display = "none";
    let currentQuestion = 0;
let selectedAnswer = null;
let userAnswers = [];
let score = 0;
let scoreChart = null;

// ======================================================
// GET 15 QUESTIONS FOR CURRENT ASSESSMENT
// ======================================================

const startIndex =
    (assessmentNumber - 1) *
    QUESTIONS_PER_ASSESSMENT;

const skillQuestions =
    questionBank[skill] || [];

const assessmentQuestions =
    skillQuestions.slice(
        startIndex,
        startIndex + QUESTIONS_PER_ASSESSMENT
    );


console.log(
    "Assessment Questions:",
    assessmentQuestions
);
console.log("Selected Skill:", skill);
console.log("Assessment Number:", assessmentNumber);
console.log("Start Index:", startIndex);
console.log("Questions Count:", assessmentQuestions.length);

// ======================================================
// LOAD QUESTION
// ======================================================

function loadQuestion() {
console.log("LOAD QUESTION STARTED");
    const q =
        assessmentQuestions[currentQuestion];


    if (!q) {

        questionText.textContent =
            "Questions are not available.";

        optionsContainer.innerHTML = "";

        return;
    }


    // Question number

    questionNumber.textContent =
        currentQuestion + 1;


    currentQuestionText.textContent =
        currentQuestion + 1;


    // Progress bar

    const percentage =
        ((currentQuestion + 1) /
        QUESTIONS_PER_ASSESSMENT) * 100;

    if (progress) {

        progress.style.width =
            percentage + "%";
    }


    // Question

    questionText.textContent =
        q.question;


    // Clear old options

    optionsContainer.innerHTML = "";


    // Reset selected answer

    selectedAnswer = null;


 // Create options

const options = [...q.options];

options.sort(() => Math.random() - 0.5);

options.forEach(option => {

    const button =
        document.createElement("button");

    button.className =
        "option";

    button.textContent =
        option;

    button.addEventListener(
        "click",
        function () {

            selectAnswer(
                option,
                button
            );

        }
    );

    optionsContainer.appendChild(
        button
    );

});


    // Button text

    if (
        currentQuestion ===
        QUESTIONS_PER_ASSESSMENT - 1
    ) {

        nextBtn.textContent =
            "Submit";

    } else {

        nextBtn.textContent =
            "Next →";
    }
}


// ======================================================
// SELECT ANSWER
// ======================================================

function selectAnswer(option, button) {

    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = option;

    const allOptions =
        document.querySelectorAll(".option");

    allOptions.forEach(btn => {
        btn.classList.remove(
            "selected",
            "correct",
            "wrong"
        );
    });

    // Select pannina option mattum highlight aagum
    button.classList.add("selected");
}


// ======================================================
// NEXT QUESTION
// ======================================================

function nextQuestion() {

    const q =
        assessmentQuestions[currentQuestion];

    // If explanation is already showing,
    // move to next question
    if (explanationBox.style.display === "block") {

        explanationBox.style.display = "none";

        currentQuestion++;

        if (
            currentQuestion <
            QUESTIONS_PER_ASSESSMENT
        ) {

            loadQuestion();

        } else {

            showResult();

        }

        return;
    }


    // Answer not selected
    if (selectedAnswer === null) {

        alert("Please select an answer.");

        return;
    }


    const isCorrect =
        selectedAnswer === q.answer;


    // Save answer
    userAnswers.push({

        question: q.question,

        selected: selectedAnswer,

        correct: q.answer,

        explanation: q.explanation,

        isCorrect: isCorrect

    });


    // Score
    if (isCorrect) {

        score++;

    }


    // Show correct / wrong colors
    const allOptions =
        document.querySelectorAll(".option");


    allOptions.forEach(btn => {

        if (btn.textContent === q.answer) {

            btn.classList.add("correct");

        }

        if (
            btn.textContent === selectedAnswer &&
            selectedAnswer !== q.answer
        ) {

            btn.classList.add("wrong");

        }

        btn.disabled = true;

    });


    // Show explanation
    explanationBox.textContent =
        "💡 Explanation: " + q.explanation;

    explanationBox.style.display = "block";


    // Keep button active for next click
    nextBtn.textContent =
        currentQuestion ===
        QUESTIONS_PER_ASSESSMENT - 1
            ? "Submit"
            : "Next →";
}
// ======================================================
// AI / NLP ANALYSIS
// ======================================================

function generateAIAnalysis() {

    const performance =
        document.getElementById("aiPerformance");

    const strengths =
        document.getElementById("aiStrengths");

    const weakness =
        document.getElementById("aiWeakness");

    const recommendation =
        document.getElementById("aiRecommendation");

    const percentage =
        (score / QUESTIONS_PER_ASSESSMENT) * 100;

    if (percentage >= 80) {

        performance.textContent =
            "Excellent performance! You have demonstrated a strong understanding of " +
            skill + " concepts.";

    } else if (percentage >= 60) {

        performance.textContent =
            "Good performance! You have a reasonable understanding of " +
            skill + " concepts.";

    } else if (percentage >= 40) {

        performance.textContent =
            "Average performance. You need more practice in " +
            skill + ".";

    } else {

        performance.textContent =
            "You need more practice and learning in " +
            skill + " to improve your performance.";
    }


    if (percentage >= 70) {

        strengths.textContent =
            "You answered most questions correctly and showed good knowledge of the selected skill.";

    } else {

        strengths.textContent =
            "You have started building knowledge in the selected skill. Continue practicing regularly.";
    }


    if (percentage < 60) {

        weakness.textContent =
            "Some concepts need more attention. Review the learning question bank and practice similar questions.";

    } else {

        weakness.textContent =
            "Keep improving your accuracy and strengthen advanced concepts.";
    }


    if (percentage >= 80) {

        recommendation.textContent =
            "Keep practicing advanced questions and try mock interviews to improve further.";

    } else {

        recommendation.textContent =
            "Review the learning materials, practice regularly, and retake the assessment to improve your score.";
    }
}
// ======================================================
// SHOW RESULT
// ======================================================



    function showResult() {

    document.getElementById(
        "quizContainer"
    ).style.display = "none";

    const resultContainer =
        document.getElementById("resultContainer");

    resultContainer.style.display = "block";

    // Result page-ஐ மேலிருந்து காட்டும்
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    document.getElementById(
        "scoreText"
    ).textContent =
        "Score: " +
        score +
        "/" +
        QUESTIONS_PER_ASSESSMENT;

    document.getElementById(
        "rightAnswers"
    ).textContent =
        score;

    document.getElementById(
        "wrongAnswers"
    ).textContent =
        QUESTIONS_PER_ASSESSMENT - score;
        
// ================= SAVE RESULT =================

const percentage = Math.round(
    (score / QUESTIONS_PER_ASSESSMENT) * 100
);

// Save completed assessment
localStorage.setItem(
    skill + "_completed",
    assessmentNumber.toString()
);

// Save score
localStorage.setItem(
    skill + "_assessment_" + assessmentNumber + "_score",
    percentage.toString()
);

// Check saved data
console.log("RESULT SAVED");
console.log("Skill:", skill);
console.log("Assessment:", assessmentNumber);
console.log("Score:", percentage + "%");
console.log(
    "Saved Score:",
    localStorage.getItem(
        skill + "_assessment_" + assessmentNumber + "_score"
    )
);
    // Pie chart
    setTimeout(() => {
        createChart();
    }, 100);

    // Answer Review
    showReview();
    generateAIAnalysis();
}


// ======================================================
// CHART
// ======================================================
function createChart() {

    const canvas = document.getElementById("scoreChart");

    if (!canvas) {
        console.log("Pie chart canvas not found");
        return;
    }

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {
        type: "pie",

        data: {
            labels: ["Correct", "Wrong"],

            datasets: [{
                data: [
                    score,
                    QUESTIONS_PER_ASSESSMENT - score
                ],

                backgroundColor: [
                    "#22c55e",
                    "#ef4444"
                ],

                borderWidth: 2
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    display: true,
                    position: "bottom"
                }
            }
        }
    });
}

// ======================================================
// ANSWER REVIEW
// ======================================================

function showReview() {

    const reviewContainer =
        document.getElementById("reviewContainer");

    reviewContainer.innerHTML = "";

    userAnswers.forEach((item, index) => {

        const div = document.createElement("div");

        div.className = "review-item";

        const isCorrect =
            item.selected === item.correct;

        div.innerHTML = `
            <h3>Question ${index + 1}</h3>

            <p class="review-question">
                ${item.question}
            </p>

            <p class="${isCorrect ? "review-correct" : "review-wrong"}">
                ${isCorrect ? "✅" : "❌"} Your Answer:
                ${item.selected}
            </p>

            <p class="review-correct">
                ✅ Correct Answer:
                ${item.correct}
            </p>

            <div class="review-explanation">
                <strong>💡 Explanation:</strong><br>
                ${item.explanation || "This is the correct answer for this question."}
            </div>
        `;

        reviewContainer.appendChild(div);
    });
}


// ======================================================
// BACK TO ASSESSMENTS
// ======================================================

function goToAssessments() {

    window.location.href =
        "assessment-select.html";
}


// ======================================================
// START
// ======================================================

loadQuestion();


// ======================================================
// NEXT BUTTON
// ======================================================

nextBtn.addEventListener(
    "click",
    nextQuestion
);
function goBack() {
    window.location.href = "assessment-select.html";
}
