// Function to handle feedback submission
function submitFeedback() {
    const feedback = document.getElementById("feedback").value;

    if (feedback) {
        // Display confirmation message after submitting feedback
        document.getElementById("confirmationMessage").style.display = "block";
        
        // Clear the feedback form
        document.getElementById("feedback").value = "";
    } else {
        alert("Please provide feedback before submitting.");
    }
}
