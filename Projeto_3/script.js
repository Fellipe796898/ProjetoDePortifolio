// Animação de contadores do impacto
const counters = document.querySelectorAll('.contador');

const startCounting = (counter) => {
  const target = +counter.getAttribute('data-target');
  const speed = 50;
  const increment = target / 100;

  const update = () => {
    const value = +counter.innerText;
    if (value < target) {
      counter.innerText = Math.ceil(value + increment);
      setTimeout(update, speed);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counters.forEach(startCounting);
      observer.disconnect();
    }
  });
});

observer.observe(document.querySelector('.impacto'));
