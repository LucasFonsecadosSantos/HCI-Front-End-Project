function loginSimulation(loginForm) {
    if ((loginForm.user.value == "user1@email.com") && (loginForm.password.value == "123456") ) {
        location="index.html"
    } else {
        //var errorDiv = Document.createElement("div");
        //errorDiv.innerHTML = "<p>Ops: Seu usuário ou senha estão incorretos :(. Tente novamente!</p>"
        //loginForm.appendChild(errorDiv)
        loginForm.innerHTML += '<p style="color: #FF0000">Ops: Seu usuário ou senha estão incorretos :(. Tente novamente!</p>'
    }
}

function taskRegisterSimulation(registerForm) {}
function expenseRegisterSimulation(registerForm){}