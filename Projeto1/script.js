// ========== ANIMAÇÃO AO SCROLL ==========
const elements = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// ========== FORMULÁRIO DE CONTATO ==========
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

// ========== MENU HAMBÚRGUER ==========
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("open");
});
