function registrarse() {
  document.getElementById("container2").style.visibility = "visible";
  document.getElementById("container").style.visibility = "hidden";
}
function fechar() {
  document.getElementById("container2").style.visibility = "hidden";
  document.getElementById("container").style.visibility = "visible";
}
function enviar() {
  alert("Cadastro feito com sucesso");
  document.getElementById("container2").style.visibility = "hidden";
  document.getElementById("container").style.visibility = "visible";
}

let dados = [
  {
    nome: "Luiz",
    mail: "borbalawal@gmail.com",
    senha: 123456,
    fone: 554818681266,
  },
];
class Receber {
  enviar() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let cpf = document.getElementById("CPF").value;
    let fone = document.getElementById("fone").value;
    let obj = {
      nome: name,
      mail: email,
      CPF: cpf,
      telefone: fone,
    };
    dados.push(obj)
  }
  cadastrar(){
    this.enviar()
    console.log(this.obj)
  }
}
let receber = new Receber();
console.log()
