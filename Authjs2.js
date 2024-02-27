function showLogin() {
    document.getElementById("loginContainer").style.display = "block";
    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("forgotPasswordContainer").style.display = "none";
}

function showRegister() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registerContainer").style.display = "block";
    document.getElementById("forgotPasswordContainer").style.display = "none";
    document.getElementById("accountPreview").style.display = "none";
}

function showForgotPassword() {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("forgotPasswordContainer").style.display = "block";
    document.getElementById("accountPreview").style.display = "none";
}

function handleLogin() {
    // Implement your actual login logic here
    alert("Login logic to be implemented!");
    return false;
}

function handleRegister() {
    var newUsername = document.getElementById("newUsername").value;
    var newUsername = document.getElementById("newemail").value;
    var newUsername = document.getElementById("newmobileno").value;
    var newPassword = document.getElementById("newPassword").value;
    var bloodGroup = document.getElementById("bloodGroup").value;

    document.getElementById("previewUsername").innerText = newUsername;
    document.getElementById("previewUseremail").innerText = newemail;
    document.getElementById("previewUsermobileno").innerText = newmobileno;
    document.getElementById("previewPassword").innerText = newPassword;
    document.getElementById("previewBloodGroup").innerText = bloodGroup;

    document.getElementById("registerContainer").style.display = "none";
    document.getElementById("accountPreview").style.display = "block";

    return false;
}

function handleForgotPassword() {
    // Implement your actual forgot password logic here
    alert("Forgot password logic to be implemented!");
    return false;
}
