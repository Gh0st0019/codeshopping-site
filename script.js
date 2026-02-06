const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => observer.observe(el));

const fallbackImgs = document.querySelectorAll('img[data-fallback]');
fallbackImgs.forEach((img) => {
  img.addEventListener('error', () => {
    const next = img.dataset.fallback;
    if (next && img.src.indexOf(next) === -1) {
      img.src = next;
    }
  });
});
