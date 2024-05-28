function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (username === "myusername" && password === "mycode") {
        message.style.color = "green";
        message.innerHTML = "You are Logged in!";
    } else {
        message.style.color = "red";
        message.innerHTML = "Invalid username or password.";
    }
}