const registerEmail = document.getElementById("registerEmail");
const regisrterCPF = document.getElementById("registerCPF");
const registerPassword1 = document.getElementById("registerPassword1");
const registerPassword2 = document.getElementById("registerPassword2");
const sendDados = document.getElementById("register");

const dadosUser = [];

sendDados.addEventListener("click", register);

function verificationPassowrd(passwod1, passwod2) {
  if (passwod1 === passwod2) {
    let user = {
      email: registerEmail.value,
      CPF: regisrterCPF.value,
      passwod: passwod1,
    };
    dadosUser.push(user);
    registerPassword1.value = "";
    registerPassword2.value = "";
    regisrterCPF.value = "";
    registerEmail.value = "";
    console.log(dadosUser);
    alert("Cadastro realizado com sucesso !");
  } else {
    registerPassword1.value = "";
    registerPassword2.value = "";
    alert("As senhas não conferem, tente novamente");
  }
}

function register() {
  verificationPassowrd(registerPassword1.value, registerPassword2.value);
}
