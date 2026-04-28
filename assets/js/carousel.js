
<script>
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
  const dots = Array.from(carousel.querySelectorAll('.dot'));
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  let index = 0;
  let timer = null;
  const interval = 3000;
  let startX = 0;
  let deltaX = 0;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
  }

  function goTo(newIndex) {
    index = (newIndex + slides.length) % slides.length;
    update();
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => goTo(index + 1), interval);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  prev.addEventListener('click', () => { goTo(index - 1); startAuto(); });
  next.addEventListener('click', () => { goTo(index + 1); startAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startAuto(); }));
  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);
  carousel.addEventListener('focusin', stopAuto);
  carousel.addEventListener('focusout', startAuto);

  const viewport = carousel.querySelector('.carousel-viewport');
  viewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    deltaX = 0;
    stopAuto();
  }, {passive: true});
  viewport.addEventListener('touchmove', (e) => {
    deltaX = e.touches[0].clientX - startX;
  }, {passive: true});
  viewport.addEventListener('touchend', () => {
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) goTo(index + 1);
      else goTo(index - 1);
    }
    startAuto();
  });

  update();
  startAuto();
});
</script>
