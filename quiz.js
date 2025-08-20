// Step 1: Function Declaration
function checkAnswer() {
    // Step 2: Retrieve the Correct Answer
    const correctAnswer = "4";

    // Step 3: Retrieve the User’s Selected Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    // Guard clause if no option selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare Answers
    if (userAnswer === correctAnswer) {
        // Step 5: Provide Feedback (Correct Answer)
        feedback.textContent = "Correct! Well done.";
    } else {
        // Step 6: Provide Feedback (Incorrect Answer)
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Step 7: Retrieve the Submit Button and Add Event Listener
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
