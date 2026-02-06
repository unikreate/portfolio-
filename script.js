const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
const stars = Array.from({ length: 140 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  z: Math.random() * 0.9 + 0.1,
  size: Math.random() * 1.8 + 0.2
}));

const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    const driftX = (pointer.x - window.innerWidth / 2) * star.z * 0.0008;
    const driftY = (pointer.y - window.innerHeight / 2) * star.z * 0.0008;

    star.x += driftX;
    star.y += driftY;

    if (star.x < 0) star.x = canvas.width;
    if (star.x > canvas.width) star.x = 0;
    if (star.y < 0) star.y = canvas.height;
    if (star.y > canvas.height) star.y = 0;

    ctx.fillStyle = `rgba(255,255,255,${0.45 + star.z * 0.4})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(drawStars);
}

window.addEventListener('mousemove', (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
drawStars();

const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.22 });

revealEls.forEach((el, idx) => {
  el.style.transitionDelay = `${Math.min(idx * 60, 300)}ms`;
  observer.observe(el);
});

const toggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') {
  document.body.classList.add('light');
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
});

const magneticCards = document.querySelectorAll('.magnetic');
magneticCards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((0.5 - y / rect.height)) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
