function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Sunsian" || password == "1216") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}

function validateRegistration() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmpassword").value;

    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}