document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("mensagem").value;
  const status = document.getElementById("mensagemStatus");

  if (!nome || !email || !msg) {
    status.textContent = "Preencha todos os campos!";
    status.style.color = "red";
    return;
  }

  status.textContent = "Mensagem enviada com sucesso!";
  status.style.color = "#00b4d8";

  this.reset();
});
