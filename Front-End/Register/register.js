const registerEmail = document.getElementById("registerEmail");
const regisrterCPF = document.getElementById("registerCPF");
const registerPassword1 = document.getElementById("registerPassword1");
const registerPassword2 = document.getElementById("registerPassword2");
const sendDados = document.getElementById("register");

const dadosUser = [];

sendDados.addEventListener("click", register);

function registerUser() {
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
    registerUser();
  } else {
    registerPassword1.value = "";
    registerPassword2.value = "";
    alert("As senhas não conferem, tente novamente");
  }
}

function register() {
  if (verificationEmail(registerEmail.value) == true) {
    if (verificationCPF(regisrterCPF.value) === true) {
      verificationPassowrd(registerPassword1.value, registerPassword2.value);
    }
  }
}
function verificationCPF(CPF) {
  let numberCPF = CPF.replace(/[^\d]-=.,+/g, "");
  if (CPF == "") {
    alert("Digite um CPF Valido");
    regisrterCPF.value = "";
    return false;
  }
  if (
    CPF == 11111111111 ||
    CPF == 22222222222 ||
    CPF == 33333333333 ||
    CPF == 44444444444 ||
    CPF == 55555555555 ||
    CPF == 66666666666 ||
    CPF == 77777777777 ||
    CPF == 88888888888 ||
    CPF == 99999999999 ||
    CPF == 00000000000 ||
    CPF.length != 11
  ) {
    alert("Digite um CPF Valido");
    regisrterCPF.value = "";
    return false;
  }
  add = 0;
  for (i = 0; i < 9; i++) add += parseInt(CPF.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(CPF.charAt(9))) {
    alert("Digite um CPF Valido");
    regisrterCPF.value = "";
    return false;
  }

  add = 0;
  for (i = 0; i < 10; i++) add += parseInt(CPF.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) {
    rev = 0;
  }

  if (rev != parseInt(CPF.charAt(10))) {
    alert("Digite um CPF Valido");
    regisrterCPF.value = "";
    return false;
  }

  return true;
}
function verificationEmail(email) {
  const caracters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (caracters.test(email) === true) {
    return true;
  } else {
    alert("Digite um email valido")
    return false;
  }
}
