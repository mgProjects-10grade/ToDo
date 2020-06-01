let logInButtonOnClick = (event) => {
        canvas.remove();    
        usernameAndPasswordContainer.style.visibility = "visible";
        event.target.innerText = "Log In";
    },
    usernameInputOnClick = (event) => {
        if(event.target.value == "Enter your username here:"){
            event.target.value = "";
        }
    },
    passwordInputOnClick = (event) => {
        if(event.target.type == "text"){
            event.target.value = "";
            event.target.type = "password";
        }
    }