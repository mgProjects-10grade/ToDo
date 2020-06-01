let usernameAndPasswordContainer = document.getElementById("usernameAndPasswordContainer"),
    usernameInput = document.getElementById("usernameInput"),
    passwordInput = document.getElementById("passwordInput"),
    logInButton = document.getElementById("logInButton"),
    usernameTakenWarning = document.getElementById("usernameTakenWarning"),
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

    
canvas.style.width = logInButton.clientWidth * 2 + "px";
canvas.style.height = canvas.style.width;
canvas.style.left = window.innerWidth / 2 - parseInt(canvas.style.width) / 2 + "px";

usernameAndPasswordContainer.style.left = canvas.style.left;
usernameAndPasswordContainer.style.top = "20px";
usernameInput.style.width = passwordInput.style.width = logInButton.clientWidth * 2 + "px";

logInButton.style.left = parseInt(canvas.style.left) + logInButton.clientWidth / 2 + "px";
logInButton.style.top = "40px"

usernameAndPasswordContainer.style.visibility = "hidden";

usernameTakenWarning.style.left = parseInt(logInButton.style.left) - 20 + "px";
usernameTakenWarning.style.top = "50px";
usernameTakenWarning.style.visibility = "hidden";
