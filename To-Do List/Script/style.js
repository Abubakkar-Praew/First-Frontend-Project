let signinBox = document.querySelector(".signinBox");
let forgetPassword = document.querySelector(".forgetPasswordBox");
let forgetPasswordButton = document.querySelector(".forgetPassword")
let signupBox = document.querySelector(".signupBox");

function forgetFunction () {
    signinBox.classList.add("hidden");
    forgetPassword.classList.remove("hidden");
    signupBox.classList.add("hidden");
}

function SigninFunction () {
    signinBox.classList.remove("hidden");
    forgetPassword.classList.add("hidden");
    signupBox.classList.add("hidden");
}

function SignupFunction () {
    signinBox.classList.add("hidden");
    forgetPassword.classList.add("hidden");
    signupBox.classList.remove("hidden");
}