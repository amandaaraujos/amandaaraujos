const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
}

document.getElementById('next').onclick = () => {
  current = (current + 1) % slides.length;
  showSlide(current);
};

document.getElementById('prev').onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') document.getElementById('next').click();
  if (e.key === 'ArrowLeft') document.getElementById('prev').click();
});

const modal = document.getElementById('zoom-modal');
const modalImg = document.getElementById('zoom-img');

document.querySelectorAll('.zoomable').forEach(img => {
  img.onclick = () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  };
});

modal.onclick = () => modal.style.display = 'none';
