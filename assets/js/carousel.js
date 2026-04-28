<script>
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const realSlides = Array.from(track.querySelectorAll('.carousel-slide'));
  const dots = Array.from(carousel.querySelectorAll('.dot'));
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  const viewport = carousel.querySelector('.carousel-viewport');

  const firstClone = realSlides[0].cloneNode(true);
  const lastClone = realSlides[realSlides.length - 1].cloneNode(true);
  firstClone.classList.add('is-clone');
  lastClone.classList.add('is-clone');
  track.insertBefore(lastClone, realSlides[0]);
  track.appendChild(firstClone);

  const slides = Array.from(track.querySelectorAll('.carousel-slide'));
  let index = 1;
  let timer = null;
  const interval = 4000;
  let startX = 0;
  let deltaX = 0;
  let isAnimating = false;

  function realIndex() {
    if (index === 0) return realSlides.length - 1;
    if (index === slides.length - 1) return 0;
    return index - 1;
  }

  function setPosition(animate = true) {
    track.style.transition = animate ? 'transform .5s ease' : 'none';
    track.style.transform = `translateX(-${index * 100}%)`;
    const current = realIndex();
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
  }

  function moveTo(newIndex) {
    if (isAnimating) return;
    isAnimating = true;
    index = newIndex;
    setPosition(true);
  }

  track.addEventListener('transitionend', () => {
    if (index === slides.length - 1) {
      index = 1;
      setPosition(false);
    } else if (index === 0) {
      index = slides.length - 2;
      setPosition(false);
    }
    isAnimating = false;
  });

  function startAuto() {
    stopAuto();
    timer = setInterval(() => moveTo(index + 1), interval);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
  }

  prev.addEventListener('click', () => { moveTo(index - 1); startAuto(); });
  next.addEventListener('click', () => { moveTo(index + 1); startAuto(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => {
    moveTo(i + 1);
    startAuto();
  }));

  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);
  carousel.addEventListener('focusin', stopAuto);
  carousel.addEventListener('focusout', startAuto);

  viewport.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    deltaX = 0;
    stopAuto();
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    deltaX = e.touches[0].clientX - startX;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) moveTo(index + 1);
      else moveTo(index - 1);
    }
    startAuto();
  });

  setPosition(false);
  startAuto();
});
</script>
