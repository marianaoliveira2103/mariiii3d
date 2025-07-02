// Relógio em tempo real
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  clock.textContent = now.toLocaleTimeString('pt-BR');
}
setInterval(updateClock, 1000);
updateClock();

// Validação de formulário
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  let valid = true;
  const name = document.getElementById('name');
  const email = document.getElementById('email');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const formMessage = document.getElementById('formMessage');

  nameError.classList.add('hidden');
  emailError.classList.add('hidden');
  formMessage.classList.add('hidden');

  if (name.value.trim() === '') {
    nameError.classList.remove('hidden');
    valid = false;
  }

  if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.classList.remove('hidden');
    valid = false;
  }

  if (valid) {
    formMessage.classList.remove('hidden');
    this.reset();
  }
});

// Simulação de feed dinâmico (com conteúdo fictício)
document.getElementById('loadPosts').addEventListener('click', function () {
  const feed = document.getElementById('feed');
  feed.innerHTML = '<p>Carregando...</p>';

  setTimeout(() => {
    const posts = [
      "💬 Novo comentário em seu post!",
      "🔔 Atualização: novo artigo disponível.",
      "📦 Seu pedido foi enviado!",
      "📢 Promoção: 30% OFF hoje!"
    ];

    feed.innerHTML = '';
    posts.forEach(post => {
      const div = document.createElement('div');
      div.className = "p-2 border rounded bg-gray-50";
      div.textContent = post;
      feed.appendChild(div);
    });
  }, 1500);
});