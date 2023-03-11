const registerEmail = document.getElementById("registerEmail");
const regisrterCPF = document.getElementById("registerCPF");
const registerPassword1 = document.getElementById("registerPassword1");
const registerPassword2 = document.getElementById("registerPassword2");
const sendDados = document.getElementById("register");

const dadosUser = [];

sendDados.addEventListener("click", register);

function registerUser(){
  let user = {
    email: registerEmail.value,
    CPF: regisrterCPF.value,
    passwod: registerPassword1.value,
  };
  dadosUser.push(user);
  registerPassword1.value = "";
  registerPassword2.value = "";
  regisrterCPF.value = "";
  registerEmail.value = "";
  console.log(dadosUser);
  alert("Cadastro realizado com sucesso !");
}

function verificationPassowrd(passwod1, passwod2) {
  if (passwod1 === passwod2) {
    registerUser()
  } else {
    registerPassword1.value = "";
    registerPassword2.value = "";
    alert("As senhas não conferem, tente novamente");
  }
}

function register() {
  verificationPassowrd(registerPassword1.value, registerPassword2.value);
}
