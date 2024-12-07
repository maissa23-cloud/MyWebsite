function calculateScore() {
    const correctAnswers = {
        q1: "b",
        q2: "a",
        q3: "a",
        q4: "b",
        q5: "b",
        q6: "b",
        q7: "a",
        q8: "b",
        q9: "a",
        q10: "a"
    };

    let score = 0;
    const form = document.getElementById("quizForm");
    const formData = new FormData(form);

    for (const [question, answer] of formData.entries()) {
        if (correctAnswers[question] === answer) {
            score++;
        }
    }

    const result = document.getElementById("result");
    result.textContent = `Your score is ${score} out of ${Object.keys(correctAnswers).length}.`;
}

