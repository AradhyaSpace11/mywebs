// Dictionary of valid usernames and passwords
const users = {
    "Aradhya": "hehe",
    "teacher1": "password456"
};

// Login function to check credentials
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username exists and password matches
    if (users[username] === password) {
        // Redirect to feedback page if login is successful
        window.location.href = "index2.html";
    } else {
        // Show an alert if login fails
        alert("Invalid username or password. Please try again.");
    }
}
